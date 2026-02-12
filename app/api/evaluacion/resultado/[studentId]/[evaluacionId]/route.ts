import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { auth } from '@/auth';

export async function GET(
    request: Request,
    { params }: { params: { studentId: string; evaluacionId: string } }
) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { studentId, evaluacionId } = params;

    try {
        const [rows]: any = await pool.query(
            `SELECT * FROM boletins 
             WHERE estudiant_id = ? AND evaluacion_id = ? AND deleted_at IS NULL 
             LIMIT 1`,
            [studentId, evaluacionId]
        );

        if (!rows.length) {
            return NextResponse.json({ error: 'No se encontró resultado' }, { status: 404 });
        }

        return NextResponse.json(rows[0]);
    } catch (error) {
        console.error('Error fetching evaluation result:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
