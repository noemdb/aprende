import { SaeflStudent, SaeflPensum, SaeflLapso, SaeflIncripcion } from '../types/saefl';

// Al usar API Routes en el mismo dominio, la URL base es relativa
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const API_URL = `${BASE_PATH}/api`;

export class SaeflAdapter {

    async getStudentProfile(studentId: number): Promise<SaeflStudent> {
        try {
            const response = await fetch(`${API_URL}/estudiante/${studentId}`);
            if (!response.ok) {
                 if (response.status === 401) throw new Error('No autorizado');
                 throw new Error(`Error fetching student profile: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('SaeflAdapter.getStudentProfile error:', error);
            throw error;
        }
    }

    async getAcademicLoad(studentId: number, lapsoId: number): Promise<{
        inscription: SaeflIncripcion;
        pensum: SaeflPensum[];
    }> {
        try {
            const response = await fetch(`${API_URL}/carga-academica/${studentId}/${lapsoId}`);
            if (!response.ok) {
                if (response.status === 401) throw new Error('No autorizado');
                throw new Error(`Error fetching academic load: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('SaeflAdapter.getAcademicLoad error:', error);
            throw error;
        }
    }

    async getCurrentLapso(): Promise<SaeflLapso> {
        try {
            const response = await fetch(`${API_URL}/lapso/actual`);
            if (!response.ok) {
                if (response.status === 401) throw new Error('No autorizado');
                throw new Error(`Error fetching current lapso: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('SaeflAdapter.getCurrentLapso error:', error);
            throw error;
        }
    }
}

export const saeflAdapter = new SaeflAdapter();
