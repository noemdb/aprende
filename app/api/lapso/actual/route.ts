import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';
import { auth } from '@/auth';

export async function GET() {
  const session = await auth();
  if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
      const now = new Date().toISOString().split('T')[0];

      // 1. Intentar buscar lapso que cubra la fecha actual
      let [rows] = await pool.query<RowDataPacket[]>(
          `SELECT 
              id,
              1 as periodo_escolar_id,
              name,
              finicial,
              ffinal,
              status_last
           FROM lapsos 
           WHERE finicial <= ? AND ffinal >= ?
           ORDER BY id DESC
           LIMIT 1`,
          [now, now]
      );

      // 2. Fallback: Si no hay lapso para hoy, tomar el primero (como Laravel)
      if (rows.length === 0) {
          [rows] = await pool.query<RowDataPacket[]>(
              `SELECT id, 1 as periodo_escolar_id, name, finicial, ffinal, status_last 
               FROM lapsos ORDER BY id ASC LIMIT 1`
          );
      }

      if (rows.length === 0) {
          return NextResponse.json({ message: 'No hay lapsos configurados' }, { status: 404 });
      }

      const activeLapso = rows[0];
      return NextResponse.json({
          id: activeLapso.id,
          periodo_escolar_id: 1,
          name: activeLapso.name,
          finicial: activeLapso.finicial,
          ffinal: activeLapso.ffinal,
          status_active: true, // Se considera activo si es el devuelto por esta lógica
          server_timestamp: new Date().toISOString()
      });

  } catch (error) {
      console.error('Error fetching current lapso:', error);
      return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
