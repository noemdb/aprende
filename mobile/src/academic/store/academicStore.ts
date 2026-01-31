import { create } from 'zustand';
import { SaeflLapso, SaeflPensum } from '@/academic/types/saefl';
import { syncService } from '@/academic/services/SyncService';

interface AcademicState {
    currentLapso: SaeflLapso | null;
    academicLoad: SaeflPensum[];
    syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
    lastSyncDetails: string | null;

    syncData: (studentId: number) => Promise<void>;
}

export const useAcademicStore = create<AcademicState>((set) => ({
    currentLapso: null,
    academicLoad: [],
    syncStatus: 'idle',
    lastSyncDetails: null,

    syncData: async (studentId: number) => {
        set({ syncStatus: 'syncing' });
        try {
            const { currentLapso, academicLoad } = await syncService.syncStudentData(studentId);
            set({
                currentLapso,
                academicLoad,
                syncStatus: 'synced',
                lastSyncDetails: new Date().toISOString()
            });
        } catch (e) {
            console.error(e);
            set({ syncStatus: 'error' });
        }
    }
}));
