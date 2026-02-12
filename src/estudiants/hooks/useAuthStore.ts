'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SaeflLapso, SaeflPensum, SaeflStudent } from '../types/saefl';
import { AcademicActivity } from '../types/academic';

interface AcademicContext {
  currentLapso: SaeflLapso | null;
  student: SaeflStudent | null;
  academicLoad: SaeflPensum[];
  activities: AcademicActivity[];
}

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: number;
    name: string;
    role: 'student' | 'teacher' | 'parent';
  } | null;
  academicContext: AcademicContext; // New field
  // Login/Logout will now be handled by NextAuth
  setSession: (user: any) => void;
  setAcademicContext: (context: AcademicContext) => void; // New action
  clearSession: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      academicContext: {
        currentLapso: null,
        student: null,
        academicLoad: [],
        activities: [],
      },
      setSession: (user) => set({ isAuthenticated: true, user }),
      setAcademicContext: (context) => set({ academicContext: context }),
      clearSession: () => set({ 
        isAuthenticated: false, 
        user: null, 
        academicContext: { currentLapso: null, student: null, academicLoad: [], activities: [] } // Clear context too
      }), 
    }),
    {
      name: 'auth-storage',
      version: 2, // Upgraded from default 0/1
      migrate: (persistedState: any, version: number) => {
        if (version < 2) {
          // If activities is missing, ensure it's initialized
          if (persistedState.academicContext && !persistedState.academicContext.activities) {
            persistedState.academicContext.activities = [];
          }
        }
        return persistedState;
      },
    }
  )
);
