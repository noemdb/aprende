# Configuración Firebase Cloud Messaging - Kainos Academy

## Estado: Por Configurar

Firebase Cloud Messaging (FCM) permite enviar notificaciones push a los estudiantes sobre:

- Nuevas prácticas disponibles
- Logros desbloqueados
- Rachas en peligro
- Recordatorios de estudio

## Prerrequisitos

Antes de implementar FCM, se necesita:

1. **Crear proyecto en Firebase Console**
   - Ir a https://console.firebase.google.com
   - Crear proyecto "Kainos Academy"
   - Habilitar Cloud Messaging

2. **Obtener credenciales**
   - API Key
   - Auth Domain
   - Project ID
   - Messaging Sender ID
   - App ID
   - VAPID Key (para web push)

## Instalación (Cuando credenciales estén disponibles)

```bash
npm install firebase
```

## Archivos a Crear

### 1. src/lib/firebase.ts

Configuración base de Firebase con variables de entorno.

### 2. src/estudiants/hooks/useNotifications.ts

Hook para solicitar permisos y obtener token de dispositivo.

### 3. public/firebase-messaging-sw.js

Service Worker para manejar notificaciones en background.

### 4. .env.local

Variables de entorno con credenciales Firebase.

## Limitaciones

> [!WARNING]
> **iOS**: Safari en iOS tiene soporte muy limitado para notificaciones push:
>
> - Solo funciona en iOS 16.4+
> - Requiere PWA instalada en Home Screen
> - API menos robusta que Android

> [!NOTE]
> **Android**: Soporte completo para notificaciones push en Chrome.

## Siguiente Paso

1. Contactar con TI/Admin para crear proyecto Firebase
2. Obtener credenciales
3. Implementar según plan en `/home/nuser/.gemini/antigravity/brain/67efec59-ff9f-4ae7-a9ce-c1b3dc8c5271/implementation_plan.md`

## Estado Actual

- [ ] Proyecto Firebase creado
- [ ] Credenciales obtenidas -[x] PWA base configurado y listo para FCM
- [ ] Firebase SDK instalado
- [ ] Servicio de notificaciones implementado
