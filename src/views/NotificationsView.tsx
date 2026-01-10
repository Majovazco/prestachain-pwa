import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { useNotifications } from "../contexts/NotificationsContext";
import { NotificationItem } from "../types";

export default function NotificationsView() {

    const { notifications } = useNotifications();

    return (
        <MainLayout showBackButton={true}>
            <div className="p-4 mt-6 flex flex-col items-center justify-center">
                <div className="bg-white p-4 shadow rounded-lg max-w-md w-full text-center space-y-8">
                    <h2 className="text-xl font-semibold">Notificaciones</h2>

                    {notifications.length === 0 && <EmptyView />}

                    {notifications.length > 0 && <NotificationsList notifications={notifications} />}
                </div>
            </div>
        </MainLayout>
    )
}

const NotificationsList = ({ notifications }: { notifications: NotificationItem[] }) => {
    return (
        <div className="space-y-4">
            {notifications.map((notif, index) => (
                <NotificationItemControl key={index} notification={notif} />
            ))}
        </div>
    )
}

const NotificationItemControl = ({ notification }: { notification: NotificationItem }) => {
    let navigate = useNavigate();

    const verNotificacionView = (id: string) => {
        navigate(`/notifications/${id}`)
    }

    return (
        <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
            <div className="flex flex-col text-left">
                <h3 className="text-lg font-semibold mb-1">Nueva solicitud de crédito</h3>
                <p className="text-gray-600">Creada por:</p>
                <p className="mt-2 font-mono text-sm text-gray-500 mb-1 break-all">{notification.content.creadaPor}</p>
            </div>
            <button
                onClick={() => verNotificacionView(notification.content.id)}
                className="text-blue-600 hover:text-blue-700 text-right"
            >
                Ver
            </button>
        </div>
    )
}

const EmptyView = () => {
    return (
        <p>No tienes notificaciones</p>

    )
}