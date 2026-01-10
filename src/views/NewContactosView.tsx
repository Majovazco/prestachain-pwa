import MainLayout from "../layouts/MainLayout";

export default function () {
    return (
        <MainLayout showBackButton={true}>
            <div className="bg-gray-100 p-4 mt-6 flex flex-col items-center justify-center">
                <div className="bg-white p-4 shadow rounded-lg max-w-md w-full text-center space-y-8">
                    <h2 className="text-xl font-semibold">Agregar contacto</h2>
                    <button className="btn btn-primary w-full max-w-xs">Agregar contacto</button>
                </div>
            </div>
        </MainLayout>
    )
}