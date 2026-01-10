import { useParams } from 'react-router-dom';
import { useNotifications } from '../contexts/NotificationsContext';
import { NotificationItem } from '../types';
import { useSimulateContract, useWriteContract } from 'wagmi';

import PRESTACHAIN_ADDRESS from '../deployments/84532/PrestaChain.json'
import { DeploymentValue } from '../types';
import { PRESTACHAIN_ABI } from '../abis/PrestaChainABI';
import MainLayout from '../layouts/MainLayout';

export default function NotificationDetailsView() {
    let { id } = useParams<"id">();
    const { notifications } = useNotifications();

    console.log("ID de la notificación:", id);
    if (!id) {
        return <p>Notificación no encontrada</p>;
    }

    // Encuentra la notificación específica usando el id de los parámetros
    const notification = notifications.find((notif: NotificationItem) => parseInt(notif.content.id) === parseInt(id));

    console.log("Notifications:", notifications);

    // Verifica si la notificación existe antes de intentar mostrar los detalles
    if (!notification) {
        return <p>Notificación no encontrada</p>;
    }

    const { data: simulatedContract, error } = useSimulateContract({
        address: PRESTACHAIN_ADDRESS.address as DeploymentValue,
        abi: PRESTACHAIN_ABI,
        functionName: 'otorgarPrestamo',
        args: [id],
    });

    const { data, isPending, isError, writeContract } = useWriteContract();

    const handleApprove = () => {
        console.log("Aprobación enviada para:", id);

        if (simulatedContract) {
            writeContract?.(simulatedContract.request)
        }
    };

    console.log("DATA", data);
    console.log("isPending", isPending);
    console.log("isError", isError);
    console.log("error", error);
    console.log("Content", notification.content)

    return (
        <MainLayout>
            <div className="mt-6 flex flex-col items-center justify-center w-full">
                <div className="w-full p-4 py-2">
                    <h2 className="text-xl font-semibold mb-4">Detalle de la Solicitud</h2>

                    <div className="form-control mb-4 text-center flex flex-col items-center">
                        <label className="label">
                            <span className="label-text">Creada por</span>
                        </label>
                        <p className='text-sm'>{notification.content.creadaPor}</p>
                    </div>

                    <div className="form-control mb-4 text-center flex flex-col items-center">
                        <label className="label">
                            <span className="label-text">Cantidad a solicitar</span>
                        </label>
                        <p>{notification.content.cantidad} MXN</p>
                    </div>

                    <div className="form-control mb-4 text-center flex flex-col items-center">
                        <label className="label">
                            <span className="label-text">Meses</span>
                        </label>
                        <p>6</p>
                    </div>

                    <div className="form-control mb-4 text-center flex flex-col items-center">
                        <label className="label">
                            <span className="label-text">Tasa de Interés Mensual</span>
                        </label>
                        <p>10 %</p>
                    </div>

                    <div className="text-center">
                        <button onClick={handleApprove} className="btn btn-primary w-full max-w-xs">
                            Aprobar Solicitud
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
