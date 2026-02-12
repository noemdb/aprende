import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { auth } from '@/auth';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ studentId: string; lapsoId: string }> }
) {
    const session = await auth();
    const { studentId, lapsoId } = await params;
    
    console.log(`[API/Actividades] Hit for student ${studentId}, lapso ${lapsoId}`);
    
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    try {
        // 1. Obtener el contexto de sección del estudiante (última inscripción)
        // Nota: En un sistema real, esto podría venir del AcademicContext persistido.
        const [inscription]: any = await pool.query(
            `SELECT i.seccion_id 
             FROM inscripcions i 
             WHERE i.estudiant_id = ? AND i.deleted_at IS NULL 
             ORDER BY i.id DESC LIMIT 1`,
            [studentId]
        );

        if (!inscription.length) {
            return NextResponse.json({ activities: [] });
        }

        const { seccion_id } = inscription[0];

        // 2. Obtener actividades y notas
        const [rows]: any = await pool.query(
            `SELECT 
                p.id as plan_id,
                p.profesor_id,
                p.pensum_id,
                p.lapso_id,
                p.seccion_id,
                p.nota_type,
                p.escala_id as plan_escala_id,
                p.objetivo as plan_objetivo,
                p.description as plan_description,
                p.category as plan_category,
                e.id as eval_id,
                e.escala_id as eval_escala_id,
                e.objetivo as eval_objetivo,
                e.description as eval_description,
                e.status_execution,
                e.fecha,
                a.name as asignatura_name,
                b.id as boletin_id,
                b.nota as nota,
                b.description as boletin_description,
                b.observations as boletin_observations
            FROM pevaluacions p
            JOIN evaluacions e ON e.pevaluacion_id = p.id
            JOIN pensums pe ON p.pensum_id = pe.id
            JOIN asignaturas a ON pe.asignatura_id = a.id
            LEFT JOIN boletins b ON b.evaluacion_id = e.id AND b.estudiant_id = ?
            WHERE p.seccion_id = ? AND p.lapso_id = ? 
              AND p.deleted_at IS NULL AND e.deleted_at IS NULL
            ORDER BY e.fecha ASC`,
            [studentId, seccion_id, lapsoId]
        );

        // Map to Domain Objects
        const activities = rows.map((row: any) => ({
            plan: {
                id: row.plan_id,
                profesor_id: row.profesor_id,
                pensum_id: row.pensum_id,
                lapso_id: row.lapso_id,
                seccion_id: row.seccion_id,
                nota_type: row.nota_type,
                escala_id: row.plan_escala_id,
                objetivo: row.plan_objetivo,
                description: row.plan_description,
                category: row.plan_category,
            },
            evaluacion: {
                id: row.eval_id,
                pevaluacion_id: row.plan_id,
                escala_id: row.eval_escala_id,
                objetivo: row.eval_objetivo,
                description: row.eval_description,
                status_execution: !!row.status_execution,
                fecha: row.fecha,
            },
            boletin: row.boletin_id ? {
                id: row.boletin_id,
                estudiant_id: parseInt(studentId),
                evaluacion_id: row.eval_id,
                nota: row.nota,
                description: row.boletin_description,
                observations: row.boletin_observations,
            } : null,
            asignatura_name: row.asignatura_name,
        }));

        return NextResponse.json({ activities });
    } catch (error) {
        console.error('Error fetching activities:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
