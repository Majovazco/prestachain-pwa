import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import { useUserData } from "../contexts/UserDataContext";
import { ContactoInfo } from "../types";
import { formatAddressCustom } from "../utils";

export default function ContactosView() {
    const { contactos } = useUserData();

    return (
        <MainLayout>
            <div className="p-4 mt-6 flex flex-col items-center justify-center">
                {!contactos && <EmptyView />}
                {contactos && <ContactsList contactos={contactos} />}
            </div>
        </MainLayout>
    )
}

const ContactsList = ({ contactos }: { contactos: ContactoInfo[] }) => {

    return (
        <>
            <h2 className="text-xl font-semibold">Mis contactos</h2>
            {
                contactos.map((contacto, index) => {
                    return (
                        <div key={index} className="card w-full m-2 bg-base-100 shadow-xl">
                            <div className="card-body flex p-4">
                                <div className="flex">
                                    <div className="avatar mr-2">
                                        <div className="w-8 rounded-full">
                                            <img src={contacto.img} />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="card-title text-md" style={{ fontSize: "1rem" }}>{contacto.username}</h2>
                                        {contacto.address && <p className="text-sm">{formatAddressCustom(contacto.address, 14)}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

const EmptyView = () => {
    let navigate = useNavigate();

    const agregarContacto = () => {
        navigate('/contactos/new')
    }

    return (
        <div className="bg-white p-4 shadow rounded-lg max-w-md w-full text-center space-y-8">
            <h2 className="text-xl font-semibold">Mis contactos</h2>
            <p>No tienes contactos</p>
            <button className="btn btn-primary w-full max-w-xs" disabled={true} onClick={agregarContacto}>Agregar contacto</button> {/* No se usara, por lo tanto disabled  */}
        </div>
    )
}