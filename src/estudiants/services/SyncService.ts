import { saeflAdapter } from './SaeflAdapter';
import { SaeflStudent, SaeflPensum, SaeflLapso } from '../types/saefl';

export class SyncService {
    async syncStudentData(studentId: number): Promise<{
        student: SaeflStudent;
        currentLapso: SaeflLapso;
        academicLoad: SaeflPensum[];
    }> {
        try {
            console.log('[Web] Starting synchronization for student:', studentId);

            const currentLapso = await saeflAdapter.getCurrentLapso();
            const student = await saeflAdapter.getStudentProfile(studentId);
            const { pensum } = await saeflAdapter.getAcademicLoad(student.id, currentLapso.id);

            // In a real Web App, we might cache this in IndexedDB or just rely on react-query / zustand persistence

            return {
                student,
                currentLapso,
                academicLoad: pensum
            };

        } catch (error) {
            console.error('[Web] Synchronization failed:', error);
            throw error;
        }
    }
}

export const syncService = new SyncService();
