# Directorio Mobile - Preparación para v2.0

## ⚠️ Estado Actual: NO EN SCOPE DEL MVP

Este directorio contiene la estructura inicial para una **futura versión móvil nativa** (v2.0) de la plataforma Kainos Academy.

## 🎯 Estrategia Actual (v1.0)

La versión actual del sistema se enfoca en:

- ✅ **Aplicación Web con Next.js 16**
- ✅ **Diseño Mobile First** (responsivo 320px - 1920px)
- ✅ **Progressive Web App (PWA)**
  - Instalable desde navegador móvil
  - Trabajo offline básico
  - Notificaciones push (Android)

## 🚀 Roadmap Futuro (v2.0)

La infraestructura móvil nativa se desarrollará una vez validado el engagement con la versión web PWA.

**Tecnologías consideradas**:

- React Native con Expo
- Flutter
- Capacitor (wrapper de PWA)

**Funcionalidades nativas planeadas**:

- Acceso a cámara para escaneo de códigos QR
- Notificaciones push completas en iOS
- Sincronización en segundo plano
- Experiencia completamente nativa

## 📋 Contenido Actual

La estructura presente es **preparatoria** y contiene:

- Configuración base de Expo
- Estructura modular inicial
- Tipos TypeScript compartidos

**NO está integrada con el backend actual ni debe ejecutarse en producción.**

## 🔗 Para Desarrollo Web Actual

Trabaja con:

- `/app/estudiantes/` - Aplicación web Next.js
- `/src/estudiants/` - Servicios y tipos compartidos

---

**Última actualización**: 2026-02-10  
**Versión objetivo**: v2.0 (TBD)
