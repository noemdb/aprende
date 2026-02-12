// Scripts de Firebase para Service Worker
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js",
);

// Configuración de Firebase (REEMPLAZAR CON VALORES REALES O INYECTAR DINÁMICAMENTE)
// Nota: En un SW real, esto suele hardcodearse o inyectarse durante el build
// ya que los SW no tienen acceso a process.env en runtime del navegador offline
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
});

const messaging = firebase.messaging();

// Manejador de notificaciones en background
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./icons/icon-192x192.png",
    badge: "./icons/icon-96x96.png",
    data: payload.data,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
