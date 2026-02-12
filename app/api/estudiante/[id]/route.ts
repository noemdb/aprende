import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';
import { auth } from '@/auth';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Verificar autenticación
  const session = await auth();
  if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
      // En Next.js 15, params es una promesa
      const { id } = await params;
      const studentId = id;

      const [rows] = await pool.query<RowDataPacket[]>(
          `SELECT 
              id, 
              ci_estudiant, 
              name, 
              lastname, 
              grado_inicial_id,
              seccion_inicial,
              representant_id,
              status_active
           FROM estudiants 
           WHERE user_id = ? AND status_active = 'true'`,
          [studentId]
      );

      if (rows.length === 0) {
          return NextResponse.json({ message: 'Estudiante no encontrado' }, { status: 404 });
      }

      const student = rows[0];
      
      return NextResponse.json({
          id: student.id,
          ci_estudiant: student.ci_estudiant,
          name: student.name,
          lastname: student.lastname,
          grado_inicial_id: student.grado_inicial_id,
          seccion_inicial: student.seccion_inicial,
          representant_id: student.representant_id,
          status_active: student.status_active === 'true',
          server_timestamp: new Date().toISOString()
      });

  } catch (error) {
      console.error('Error fetching student profile:', error);
      return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
