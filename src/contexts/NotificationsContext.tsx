import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NotificationItem } from '../types'; // Asegúrate de que esta es la definición correcta de tu tipo

interface NotificationsContextState {
    notifications: NotificationItem[];
    addNotification: (notification: NotificationItem) => void;
    setAllAsViewed: () => void;
}

// Inicializa el contexto con valores por defecto
const NotificationsContext = createContext<NotificationsContextState>({} as NotificationsContextState);

export const useNotifications = () => useContext(NotificationsContext);

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);

    const addNotification = (notification: NotificationItem) => {
        console.log('Adding notification:', notification);
        setNotifications(prevNotifications => [...prevNotifications, notification]);
    };

    const setAllAsViewed = () => {
        setNotifications(prevNotifications =>
            prevNotifications.map(notif => ({ ...notif, viewed: true }))
        );
    };

    return (
        <NotificationsContext.Provider value={{ notifications, addNotification, setAllAsViewed }}>
            {children}
        </NotificationsContext.Provider>
    );
};
