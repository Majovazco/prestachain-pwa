import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

export default function PrestamosView() {
    let navigate = useNavigate();

    const showSolicitarPrestamoView = () => {
        navigate('/prestamos/new')
    }

    return (
        <MainLayout>
            <div className="p-4 mt-6 flex flex-col items-center justify-center">
                <div className="bg-white p-4 shadow rounded-lg max-w-md w-full text-center space-y-8">
                    <h2 className="text-xl font-semibold">Mis prestamos</h2>
                    <p>No tienes prestamos</p>
                    <button className="btn btn-primary w-full max-w-xs" onClick={showSolicitarPrestamoView}>Solicitar Préstamo</button>
                </div>
            </div>
        </MainLayout>
    )
}