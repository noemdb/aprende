import { SaeflDiagnosis, SaeflAiDraft } from '../types/academic';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const API_BASE = `${BASE_PATH}/api/diagnostico`;

class DiagnosisService {
    /**
     * Get diagnostic reports for a student in a specific lapso.
     */
    async getStudentDiagnostics(studentId: number, lapsoId: number): Promise<SaeflDiagnosis[]> {
        try {
            const response = await fetch(`${API_BASE}/${studentId}/${lapsoId}`);
            if (!response.ok) {
                throw new Error(`Error fetching diagnostics: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('[DiagnosisService] Error fetching diagnostics:', error);
            throw error;
        }
    }

    /**
     * Check if a report was assisted by AI.
     */
    async checkAiAssistance(reportId: number): Promise<SaeflAiDraft | null> {
        try {
            const response = await fetch(`${API_BASE}/ai-check/${reportId}`);
            if (!response.ok) return null;
            return await response.json();
        } catch (error) {
            console.error('[DiagnosisService] Error checking AI assistance:', error);
            return null;
        }
    }
}

export const diagnosisService = new DiagnosisService();
