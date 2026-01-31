import { SaeflStudent, SaeflPensum, SaeflLapso, SaeflIncripcion } from '../types/saefl';

// MOCK implementation for Web
export class SaeflAdapter {

    async getStudentProfile(studentId: number): Promise<SaeflStudent> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return {
            id: studentId,
            ci_estudiant: '12345678',
            name: 'Estudiante',
            lastname: 'Modelo Web',
            grado_inicial_id: 1,
            seccion_inicial: 'A',
            representant_id: 1,
            status_active: true
        };
    }

    async getAcademicLoad(studentId: number, lapsoId: number): Promise<{
        inscription: SaeflIncripcion;
        pensum: SaeflPensum[];
    }> {
        await new Promise(resolve => setTimeout(resolve, 500));

        return {
            inscription: {
                id: 100,
                estudiant_id: studentId,
                seccion_id: 10,
                tipo_id: 1,
                programacion_id: 50,
                grupo_estable_id: null
            },
            pensum: [
                {
                    id: 1,
                    pestudio_id: 1,
                    grado_id: 1,
                    asignatura_id: 101,
                    status_active: true,
                    status_active_diagnostic: true,
                    asignatura: { id: 101, code: 'MAT1', name: 'Matemática I', area_id: 1, status_active: true }
                },
                {
                    id: 2,
                    pestudio_id: 1,
                    grado_id: 1,
                    asignatura_id: 102,
                    status_active: true,
                    status_active_diagnostic: false,
                    asignatura: { id: 102, code: 'LEN1', name: 'Lengua y Literatura', area_id: 2, status_active: true }
                }
            ]
        };
    }

    async getCurrentLapso(): Promise<SaeflLapso> {
        await new Promise(resolve => setTimeout(resolve, 300));
        return {
            id: 202501,
            periodo_escolar_id: 2025,
            name: 'Lapso I 2025-2026',
            finicial: '2025-09-01',
            ffinal: '2025-12-15',
            status_active: true
        };
    }
}

export const saeflAdapter = new SaeflAdapter();
