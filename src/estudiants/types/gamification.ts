/**
 * Gamification domain is isolated from Academic facts as per Decision 2 of Blueprint Phase 2.
 */

export interface GamificationProfile {
    student_id: number; // Foreign reference to Academic Student ID
    xp: number;
    level: number;
    streak: number;
    last_activity_at?: string;
}

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: 'academic' | 'social' | 'special';
}

export interface StudentBadge {
    student_id: number;
    badge_id: string;
    earned_at: string;
}

export interface XPRecord {
    id: string;
    student_id: number;
    amount: number;
    reason: string;
    metadata?: Record<string, any>; // e.g. { evaluacion_id: 123 }
    created_at: string;
}
