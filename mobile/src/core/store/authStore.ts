import { create } from 'zustand';
import { SaeflStudent } from '@/academic/types/saefl';

interface AuthState {
    status: 'idle' | 'loading' | 'authenticated' | 'error';
    token: string | null;
    user: SaeflStudent | null;
    error: string | null;

    signIn: (credentials: { ci: string; password: string }) => Promise<void>;
    signOut: () => void;
    loadSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    status: 'idle',
    token: null,
    user: null,
    error: null,

    signIn: async ({ ci, password }) => {
        set({ status: 'loading', error: null });
        try {
            // TODO: Replace with real OAuth/API call
            // MOCK IMPLEMENTATION
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate net latency

            if (ci === '12345' && password === 'admin') {
                const mockUser: SaeflStudent = {
                    id: 1,
                    ci_estudiant: '12345',
                    name: 'Estudiante',
                    lastname: 'Modelo',
                    grado_inicial_id: 1,
                    seccion_inicial: 'A',
                    representant_id: 1,
                    status_active: true
                };
                set({ status: 'authenticated', token: 'mock-jwt-token', user: mockUser });
            } else {
                throw new Error('Credenciales inválidas');
            }
        } catch (e: any) {
            set({ status: 'error', error: e.message || 'Error al iniciar sesión' });
        }
    },

    signOut: () => {
        set({ status: 'idle', token: null, user: null });
    },

    loadSession: async () => {
        // TODO: Check SecureStore for persisted token
        set({ status: 'idle' });
    }
}));
