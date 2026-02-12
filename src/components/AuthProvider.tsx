'use client';

import { useAuthStore } from '@/estudiants/hooks/useAuthStore';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const setSession = useAuthStore((state) => state.setSession);
  const clearSession = useAuthStore((state) => state.clearSession);

  useEffect(() => {
    const syncData = async () => {
      if (status === 'authenticated' && session?.user) {
        setSession({
          id: session.user.id,
          name: session.user.name,
          role: (session.user as any).role || 'student',
        });

        try {
          // Fetch academic context
          const { syncService } = await import('@/estudiants/services/SyncService');
          const data = await syncService.syncStudentData(Number(session.user.id));
          
          useAuthStore.getState().setAcademicContext({
            currentLapso: data.currentLapso,
            student: data.student,
            academicLoad: data.academicLoad ?? [],
          });
          
          if (data.student) {
            console.log('[AuthProvider] Student context synced:', data.student.name);
          } else {
            console.log('[AuthProvider] Non-student user. Only global context synced.');
          }
        } catch (error) {
          console.error('[AuthProvider] Failed to sync academic context:', error);
          // Optional: handle error state or show notification
        }

      } else if (status === 'unauthenticated') {
        clearSession();
      }
    };

    syncData();
  }, [session, status, setSession, clearSession]);

  return <>{children}</>;
}
