import { SaeflBoletin, AcademicActivity } from '../types/academic';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const API_BASE = `${BASE_PATH}/api/evaluacion`;

class EvaluationService {
    /**
     * Get the student result/feedback for a specific evaluation.
     * Maps to SAEFL 'boletins' table.
     */
    async getEvaluationResult(studentId: number, evaluacionId: number): Promise<SaeflBoletin | null> {
        try {
            const response = await fetch(`${API_BASE}/resultado/${studentId}/${evaluacionId}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error(`Error fetching evaluation result: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('[EvaluationService] Error fetching result:', error);
            throw error;
        }
    }

    /**
     * Submit evidence for an activity. 
     * In Phase 2, this is modeled as an academic fact.
     */
    async submitEvidence(activityId: number, content: string, fileUrl?: string): Promise<void> {
        try {
            const response = await fetch(`${API_BASE}/evidencia`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ activityId, content, fileUrl })
            });
            if (!response.ok) {
                throw new Error(`Error submitting evidence: ${response.statusText}`);
            }
        } catch (error) {
            console.error('[EvaluationService] Error submitting evidence:', error);
            throw error;
        }
    }
}

export const evaluationService = new EvaluationService();
