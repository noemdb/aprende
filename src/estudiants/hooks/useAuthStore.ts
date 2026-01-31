import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SaeflStudent } from '../types/saefl';

interface AuthState {
    status: 'idle' | 'loading' | 'authenticated' | 'error';
    user: SaeflStudent | null;
    token: string | null;
    error: string | null;

    login: (ci: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            status: 'idle',
            user: null,
            token: null,
            error: null,

            login: async (ci, password) => {
                set({ status: 'loading', error: null });
                try {
                    // MOCK LOGIN
                    await new Promise((resolve) => setTimeout(resolve, 800));

                    if (ci === '12345' && password === 'admin') {
                        const mockUser: SaeflStudent = {
                            id: 1,
                            ci_estudiant: '12345',
                            name: 'Estudiante',
                            lastname: 'Web',
                            grado_inicial_id: 1,
                            seccion_inicial: 'A',
                            representant_id: 1,
                            status_active: true,
                        };
                        set({ status: 'authenticated', user: mockUser, token: 'mock-web-token' });
                        return true;
                    } else {
                        throw new Error('Credenciales inválidas');
                    }
                } catch (e: any) {
                    set({ status: 'error', error: e.message });
                    return false;
                }
            },

            logout: () => {
                set({ status: 'idle', user: null, token: null });
            },
        }),
        {
            name: 'estudiante-auth-storage',
            storage: createJSONStorage(() => localStorage), // Persist to localStorage
        }
    )
);
