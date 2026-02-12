import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { auth } from '@/auth';

export async function GET(
    request: Request,
    { params }: { params: { reportId: string } }
) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { reportId } = params;

    try {
        const [rows]: any = await pool.query(
            `SELECT * FROM diag_report_ai_drafts 
             WHERE report_id = ? 
             ORDER BY created_at DESC LIMIT 1`,
            [reportId]
        );

        if (!rows.length) {
            return NextResponse.json({ error: 'No se encontró registro de IA' }, { status: 404 });
        }

        return NextResponse.json(rows[0]);
    } catch (error) {
        console.error('Error checking AI assistance:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
