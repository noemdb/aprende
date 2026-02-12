export interface SaeflPlanEvaluacion {
    id: number;
    profesor_id: number;
    pensum_id: number;
    lapso_id: number;
    seccion_id: number;
    nota_type: 'ACUMULATIVA' | 'PROMEDIADA';
    status_baremo: 'true' | 'false';
    status_official: boolean;
    escala_id: number;
    objetivo?: string;
    description?: string;
    observations?: string;
    category?: string;
}

export interface SaeflEvaluacion {
    id: number;
    pevaluacion_id: number;
    escala_id: number;
    objetivo?: string;
    description?: string;
    observations?: string;
    status_execution: boolean;
    fecha: string;
}

export interface SaeflNota {
    id: number;
    pensum_id: number;
    estudiant_id: number;
    tevaluacion_id?: number;
    valor?: number;
    literal?: string;
    tipo: 'F' | 'R' | 'P' | 'O';
    fecha?: string;
    description?: string;
    observations?: string;
}

export interface SaeflBoletin {
    id: number;
    estudiant_id: number;
    evaluacion_id: number;
    nota?: string;
    description?: string;
    observations?: string;
}

export interface SaeflDiagnosis {
    id: number;
    estudiant_id: number;
    diag_main_id: number;
    referent_id: number;
    lapso_id: number;
    status: 'draft' | 'validated' | string;
    global?: string;
    generated_at?: string;
    validated_at?: string;
}

export interface SaeflAiDraft {
    id: number;
    report_id: number;
    llm_provider: string;
    llm_model: string;
    output_text?: string;
    status: 'generated' | string;
    created_at: string;
}

export interface SaeflAuditLog {
    id: number;
    report_id: number;
    user_id: number;
    action: string;
    details?: string;
    created_at: string;
}

export interface SaeflTipoEvaluacion {
    id: number;
    code: string;
    name: string;
    description?: string;
}

/**
 * Composite view for the Student UI
 */
export interface AcademicActivity {
    plan: SaeflPlanEvaluacion;
    evaluacion: SaeflEvaluacion;
    boletin?: SaeflBoletin; // Per-activity result
    asignatura_name: string;
    is_ai_assisted?: boolean; // Flag for UI markers
}
