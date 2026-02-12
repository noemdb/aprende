import type { NextAuthConfig } from 'next-auth';

// Configuración de proveedores y estrategias
export const authConfig = {
  pages: {
    signIn: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/login`, // Redirigir a nuestra página de login personalizada
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      
      // En Middleware, nextUrl.pathname NO incluye el basePath configurado en next.config.js
      const isOnDashboard = nextUrl.pathname.startsWith('/estudiantes');
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // Si ya está logueado y va al login, redirigir al dashboard
        if (nextUrl.pathname === '/login') {
             // Para redirects, SÍ necesitamos incluir el basePath porque es una URL completa para el navegador
             return Response.redirect(new URL(`${basePath}/estudiantes/dashboard`, nextUrl));
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
        // Persistir datos del login inicial al token
        if (account && user) {
            token.id = user.id;
            // Aquí se podrían agregar roles desde la respuesta del provider
            // token.role = user.role; 
        }
        return token;
    },
    async session({ session, token }) {
        // Exponer el ID del usuario en la sesión
        if (session.user && token.id) {
            session.user.id = token.id as string;
        }
        return session;
    }
  },
  providers: [], // See auth.ts for providers
} satisfies NextAuthConfig;
