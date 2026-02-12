import { useState, useEffect } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from '@/lib/firebase';

export function useNotifications() {
    const [token, setToken] = useState<string | null>(null);
    const [permission, setPermission] = useState<NotificationPermission>('default');

    useEffect(() => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            setPermission(Notification.permission);
        }
    }, []);

    const requestPermission = async () => {
        if (!messaging) return null;

        try {
            const permission = await Notification.requestPermission();
            setPermission(permission);

            if (permission === 'granted') {
                // Obtener token FCM
                const currentToken = await getToken(messaging, {
                    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
                });

                if (currentToken) {
                    console.log('FCM Token:', currentToken);
                    setToken(currentToken);
                    return currentToken;
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }
        } catch (error) {
            console.error('An error occurred while retrieving token. ', error);
        }
        return null;
    };

    // Escuchar mensajes en primer plano
    useEffect(() => {
        if (messaging) {
            const unsubscribe = onMessage(messaging, (payload) => {
                console.log('Message received. ', payload);
                // Aquí puedes mostrar un toast o actualizar el estado de notificaciones
                new Notification(payload.notification?.title || 'Nueva notificación', {
                    body: payload.notification?.body,
                    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icons/icon-192x192.png`
                });
            });

            return () => unsubscribe();
        }
    }, []);

    return { token, permission, requestPermission };
}
