import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';
import { auth } from '@/auth';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ studentId: string; lapsoId: string }> }
) {
  const session = await auth();
  if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
      const { studentId, lapsoId } = await params;

      // 1. Obtener Inscripción (Latest active)
      const [inscriptionRows] = await pool.query<RowDataPacket[]>(
          `SELECT 
              id, 
              estudiant_id, 
              seccion_id, 
              tipo_id, 
              programacion_id, 
              grupo_estable_id 
           FROM inscripcions 
           WHERE estudiant_id = ? AND deleted_at IS NULL 
           ORDER BY id DESC LIMIT 1`,
          [studentId]
      );

      if (inscriptionRows.length === 0) {
           return NextResponse.json({ message: 'Inscripción no encontrada' }, { status: 404 });
      }

      const inscription = inscriptionRows[0];

      // 1.5 Obtener Grado via Seccion
      const [sectionRows] = await pool.query<RowDataPacket[]>(
          `SELECT grado_id FROM seccions WHERE id = ?`,
          [inscription.seccion_id]
      );
      
      if (sectionRows.length === 0) {
          return NextResponse.json({ message: 'Seccion no encontrada' }, { status: 404 });
      }
      
      const gradoId = sectionRows[0].grado_id;

      // 2. Obtener Materias (Pensum + Asignaturas)
      const [pensumRows] = await pool.query<RowDataPacket[]>(
          `SELECT 
              p.id,
              p.pestudio_id,
              p.grado_id,
              p.asignatura_id,
              p.status_active,
              a.code,
              a.name
           FROM pensums p
           JOIN asignaturas a ON p.asignatura_id = a.id
           WHERE p.grado_id = ? AND p.status_active = 1`,
          [gradoId] 
      );

      const pensum = pensumRows.map(row => ({
          id: row.id,
          pestudio_id: row.pestudio_id,
          grado_id: row.grado_id,
          asignatura_id: row.asignatura_id,
          status_active: Boolean(row.status_active),
          status_active_diagnostic: false, 
          asignatura: {
              id: row.asignatura_id,
              code: row.code,
              name: row.name,
              area_id: 1, // Placeholder as area_id is missing in asignaturas
              status_active: true
          }
      }));

      return NextResponse.json({
          inscription: {
              id: inscription.id,
              estudiant_id: parseInt(studentId),
              seccion_id: inscription.seccion_id,
              tipo_id: inscription.tipo_id,
              programacion_id: inscription.programacion_id || 0,
              grupo_estable_id: inscription.grupo_estable_id
          },
          pensum,
          server_timestamp: new Date().toISOString()
      });

  } catch (error) {
      console.error('Error fetching academic load:', error);
      return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
