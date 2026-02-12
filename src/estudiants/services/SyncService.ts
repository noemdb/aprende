import { saeflAdapter } from './SaeflAdapter';
import { SaeflStudent, SaeflPensum, SaeflLapso } from '../types/saefl';
import { pedagogyService } from './PedagogyService';
import { AcademicActivity } from '../types/academic';

export class SyncService {
    async syncStudentData(studentId: number): Promise<{
        student: SaeflStudent | null;
        currentLapso: SaeflLapso | null;
        academicLoad: SaeflPensum[];
        activities: AcademicActivity[];
    }> {
        try {
            // 1. Intentar obtener el lapso actual (Global)
            const currentLapso = await saeflAdapter.getCurrentLapso().catch(() => null);
            
            // 2. Intentar obtener el perfil de estudiante
            let student: SaeflStudent | null = null;
            let academicLoad: SaeflPensum[] = [];
            let activities: AcademicActivity[] = [];

            try {
                student = await saeflAdapter.getStudentProfile(studentId);
                
                // 3. Si hay estudiante y lapso, obtener carga académica y actividades
                if (student && currentLapso) {
                    const { pensum } = await saeflAdapter.getAcademicLoad(student.id, currentLapso.id);
                    academicLoad = pensum;

                    // Fetch pedagogical facts (Fase 2)
                    activities = await pedagogyService.getActivities(student.id, currentLapso.id);
                }
            } catch (error: any) {
                // Si es un 404, es un comportamiento esperado para no-estudiantes
                if (error.message?.includes('Not Found') || error.message?.includes('404')) {
                    console.warn(`[SyncService] No student record found for user ${studentId}. Continuing as non-student user.`);
                } else {
                    throw error;
                }
            }

            return {
                student,
                currentLapso,
                academicLoad,
                activities
            };
        } catch (error) {
            console.error('[Web] Synchronization failed:', error);
            throw error;
        }
    }
}

export const syncService = new SyncService();
