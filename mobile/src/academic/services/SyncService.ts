import { saeflAdapter } from './SaeflAdapter';
import { SaeflStudent, SaeflPensum, SaeflLapso } from '@/academic/types/saefl';

export class SyncService {
    async syncStudentData(studentId: number): Promise<{
        student: SaeflStudent;
        currentLapso: SaeflLapso;
        academicLoad: SaeflPensum[];
    }> {
        try {
            console.log('Starting synchronization for student:', studentId);

            // 1. Get fundamental master data
            const currentLapso = await saeflAdapter.getCurrentLapso();
            console.log('Current Lapso synced:', currentLapso.id);

            // 2. Get Student Profile (Source of Truth)
            const student = await saeflAdapter.getStudentProfile(studentId);
            console.log('Student Profile synced:', student.ci_estudiant);

            // 3. Get Academic Load for the current context
            const { pensum } = await saeflAdapter.getAcademicLoad(student.id, currentLapso.id);
            console.log(`Academic Load synced: ${pensum.length} subjects`);

            // TODO: Persist to local storage (Zustand/MMKV)

            return {
                student,
                currentLapso,
                academicLoad: pensum
            };

        } catch (error) {
            console.error('Synchronization failed:', error);
            throw error;
        }
    }
}

export const syncService = new SyncService();
