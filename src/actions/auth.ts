'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  formData: FormData
): Promise<{ error?: string; success?: boolean }> {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Basic validation
    if (!email || !password) {
      return { error: 'Por favor, ingresa tu email y contraseña' };
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: 'Por favor, ingresa un email válido' };
    }

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    await signIn('credentials', {
      email,
      password,
      redirectTo: `${basePath}/estudiantes/dashboard`
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Email o contraseña incorrectos' };
        default:
          return { error: 'Error al iniciar sesión. Intenta nuevamente.' };
      }
    }
    throw error;
  }
}
