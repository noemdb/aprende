import { ApiClient, apiClient } from '@/core/api/ApiClient';
import { SaeflStudent, SaeflPensum, SaeflLapso, SaeflIncripcion } from '@/academic/types/saefl';

export class SaeflAdapter {
    private client: ApiClient;

    constructor(client: ApiClient = apiClient) {
        this.client = client;
    }

    async getStudentProfile(studentId: number): Promise<SaeflStudent> {
        // In a real implementation, this might look up by user ID from auth context
        return this.client.get<SaeflStudent>(`/students/${studentId}`);
    }

    async getAcademicLoad(studentId: number, lapsoId: number): Promise<{
        inscription: SaeflIncripcion;
        pensum: SaeflPensum[];
    }> {
        return this.client.get<{
            inscription: SaeflIncripcion;
            pensum: SaeflPensum[];
        }>(`/students/${studentId}/academic-load?lapso_id=${lapsoId}`);
    }

    async getCurrentLapso(): Promise<SaeflLapso> {
        return this.client.get<SaeflLapso>('/academic/lapsos/current');
    }
}

export const saeflAdapter = new SaeflAdapter();
