export interface SaeflStudent {
    id: number;
    ci_estudiant: string;
    name: string;
    lastname: string;
    grado_inicial_id: number;
    seccion_inicial: string;
    representant_id: number;
    status_active: boolean;
}

export interface SaeflIncripcion {
    id: number;
    estudiant_id: number;
    seccion_id: number;
    tipo_id: number;
    programacion_id: number;
    grupo_estable_id: number | null;
}

export interface SaeflSeccion {
    id: number;
    grado_id: number;
    name: string;
    amount_student: number;
    status_active: boolean;
}

export interface SaeflGrado {
    id: number;
    pestudio_id: number;
    name: string;
    code: string;
    order: number;
    status_active: boolean;
}

export interface SaeflAsignatura {
    id: number;
    code: string;
    name: string;
    area_id: number;
    status_active: boolean;
}

export interface SaeflPensum {
    id: number;
    pestudio_id: number;
    grado_id: number;
    asignatura_id: number;
    status_active: boolean;
    status_active_diagnostic: boolean;
    asignatura?: SaeflAsignatura;
}

export interface SaeflLapso {
    id: number;
    periodo_escolar_id: number;
    name: string;
    finicial: string;
    ffinal: string;
    status_active: boolean;
}
