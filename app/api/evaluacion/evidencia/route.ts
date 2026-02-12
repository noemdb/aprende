import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { auth } from '@/auth';

export async function POST(request: Request) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    try {
        const { activityId, content, studentId } = await request.json();

        if (!activityId || !studentId) {
            return NextResponse.json({ error: 'Faltan parámetros' }, { status: 400 });
        }

        // 1. Verificar si ya existe un registro en boletins
        const [existing]: any = await pool.query(
            `SELECT id FROM boletins WHERE estudiant_id = ? AND evaluacion_id = ? LIMIT 1`,
            [studentId, activityId]
        );

        if (existing.length > 0) {
            // Actualizar
            await pool.query(
                `UPDATE boletins SET description = ?, updated_at = NOW() WHERE id = ?`,
                [content, existing[0].id]
            );
        } else {
            // Crear nuevo registro (nota nula por ahora)
            await pool.query(
                `INSERT INTO boletins (estudiant_id, evaluacion_id, description, created_at, updated_at) 
                 VALUES (?, ?, ?, NOW(), NOW())`,
                [studentId, activityId, content]
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error submitting evidence:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
