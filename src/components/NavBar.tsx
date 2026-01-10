import { useNavigate } from "react-router-dom";
import { useAccount, useWatchContractEvent } from 'wagmi'
import { formatEther } from "viem";

import { useNotifications } from '../contexts/NotificationsContext';

import { PRESTACHAIN_ABI } from "../abis/PrestaChainABI";
import PRESTACHAIN_ADDRESS from '../deployments/84532/PrestaChain.json'
import { DeploymentValue } from "../types";

interface NavBarProps {
    showBackButton: boolean;
}

export default function NavBar({ showBackButton }: NavBarProps) {
    let navigate = useNavigate();
    const { notifications, addNotification, setAllAsViewed } = useNotifications();
    const { chain, address } = useAccount();

    useWatchContractEvent({
        address: PRESTACHAIN_ADDRESS.address as DeploymentValue,
        abi: PRESTACHAIN_ABI,
        eventName: 'SolicitudCreada',
        onLogs(logs) {
            console.log("Solicitud Creada!")
            console.log('New logs!', logs)

            const creadataPor = ((logs[0] as any).args as any).creadaPor;
            const solicitudId = ((logs[0] as any).args as any).solicitudId;
            const solicitud = ((logs[0] as any).args as any).solicitud;

            console.log('creadaPor:', creadataPor)
            console.log('solicitudId:', solicitudId)
            console.log('solicitud:', solicitud)

            console.log('address != creadaPor', address != creadataPor)

            if (address != creadataPor) {
                // setNotifications([...notifications, {
                //     content: {
                //         id: solicitudId,
                //         creadaPor: creadataPor,
                //         activa: solicitud.activa,
                //         approvalsReceived: solicitud.approvalsReceived,
                //         approvalsRequired: solicitud.approvalsRequired,
                //         cantidad: formatEther(solicitud.cantidad),
                //         coAcreditados: solicitud.coAcreditados,
                //         creditoOtorgado: solicitud.creditoOtorgado,
                //         lider: solicitud.lider,
                //         meses: solicitud.meses,
                //         tasaInteresMensual: solicitud.tasaInteresMensual
                //     },
                //     viewed: false
                // }])
                addNotification(
                    {
                        content: {
                            id: solicitudId,
                            creadaPor: creadataPor,
                            activa: solicitud.activa,
                            approvalsReceived: solicitud.approvalsReceived,
                            approvalsRequired: solicitud.approvalsRequired,
                            cantidad: formatEther(solicitud.cantidad),
                            coAcreditados: solicitud.coAcreditados,
                            creditoOtorgado: solicitud.creditoOtorgado,
                            lider: solicitud.lider,
                            meses: solicitud.meses,
                            tasaInteresMensual: solicitud.tasaInteresMensual
                        },
                        viewed: false
                    }
                )
            }
        },
    })

    if (!chain) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner w-8 h-8 text-primary"></span>
            </div>
        );
    }

    const unreadNotificationsCount = notifications.filter(notif => !notif.viewed).length;

    const handleNotificationsClick = () => {
        console.log('clicked ver notifications')
        setAllAsViewed()
        navigate('/notifications')
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {showBackButton && (
                    <button className="btn btn-ghost" onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">PrestaChain</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle" onClick={handleNotificationsClick}>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        {unreadNotificationsCount > 0 && (
                            <span className="badge badge-xs badge-primary indicator-item">
                                {unreadNotificationsCount}
                            </span>
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
}
