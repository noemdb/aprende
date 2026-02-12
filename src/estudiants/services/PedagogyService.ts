import { AcademicActivity } from '../types/academic';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const API_BASE = `${BASE_PATH}/api/actividades`;

class PedagogyService {
    /**
     * Fetch activities for a specific student and lapso.
     */
    async getActivities(studentId: number, lapsoId: number): Promise<AcademicActivity[]> {
        try {
            const response = await fetch(`${API_BASE}/${studentId}/${lapsoId}`);
            if (!response.ok) {
                if (response.status === 401) throw new Error('No autorizado');
                
                let errorMessage = `Error fetching activities: ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } catch (e) {
                    // Not JSON, use statusText
                }
                throw new Error(errorMessage);
            }
            const data = await response.json();
            return data.activities || [];
        } catch (error) {
            console.error('[PedagogyService] Error fetching activities:', error);
            throw error;
        }
    }

    /**
     * Logic for evidence submission (UI part of Phase 2)
     * Placeholder for now as per blueprint rules.
     */
    async submitEvidence(activityId: number, evidence: any): Promise<void> {
        console.log(`[PedagogyService] Submitting evidence for activity ${activityId}`, evidence);
        // Implementation will follow once evidence domain is finalized.
    }
}

export const pedagogyService = new PedagogyService();
