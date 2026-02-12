import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { auth } from '@/auth';

export async function GET(
    request: Request,
    { params }: { params: { studentId: string; lapsoId: string } }
) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { studentId, lapsoId } = params;

    try {
        const [rows]: any = await pool.query(
            `SELECT * FROM diag_reports 
             WHERE estudiant_id = ? AND lapso_id = ? 
             ORDER BY created_at DESC`,
            [studentId, lapsoId]
        );

        return NextResponse.json(rows);
    } catch (error) {
        console.error('Error fetching diagnostic reports:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
