import React, { useState } from 'react';
import { parseEther } from 'viem'

import { PRESTACHAIN_ABI } from '../abis/PrestaChainABI';
import PRESTACHAIN_ADDRESS from '../deployments/84532/PrestaChain.json'
import { DeploymentValue } from "../types";
import { useSimulateContract, useWriteContract } from 'wagmi';
import { useUserData } from '../contexts/UserDataContext';

const LoanRequestForm: React.FC = () => {
    const { contactos } = useUserData();
    const [cantidad, setCantidad] = useState('');
    const [meses, setMeses] = useState('');
    const [interesAnual, setInteresAnual] = useState('');
    const [coacreditados, setCoacreditados] = useState<string[]>([]);

    const { data: simulatedContract, error } = useSimulateContract({
        address: PRESTACHAIN_ADDRESS.address as DeploymentValue,
        abi: PRESTACHAIN_ABI,
        functionName: 'solicitarPrestamo',
        args: [parseEther(cantidad), meses, interesAnual, coacreditados],
    });

    const { data, isPending, isError, writeContract } = useWriteContract();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log('Formulario enviado');
        console.log('Cantidad', cantidad);
        console.log('Meses', meses);
        console.log('Co Acreditados', coacreditados);
        console.log('Interest Anual', interesAnual);

        if (simulatedContract) {
            writeContract?.(simulatedContract.request)
        }
    };

    console.log("DATA", data);
    console.log("isPending", isPending);
    console.log("isError", isError);
    console.log("Simulate Error", error);

    const handleCheckboxChange = (coacreditado: string, isChecked: boolean) => {
        setCoacreditados((prev: any) => {
            if (isChecked) {
                // Agregar a la lista si está marcado y aún no está en la lista
                return [...prev, coacreditado];
            } else {
                // Remover de la lista si está desmarcado
                return prev.filter((item: any) => item !== coacreditado);
            }
        });
    };
    console.log("CONTACTOS", contactos)
    console.log("COACREDITADOS", coacreditados)
    return (
        <div className="w-full p-4 py-2">
            <form onSubmit={handleSubmit} className="card p-4 py-2 w-full">

                <h2 className="text-xl font-semibold mb-4">Nueva Solicitud</h2>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Cantidad a solicitar</span>
                    </label>
                    <input
                        type="text"
                        placeholder="30,000 MXN"
                        className="input input-bordered w-full"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Co Acreditados</span>
                    </label>
                    <div className="flex justify-between">
                        <ul className="list-inside list-disc flex flex-col">
                            {contactos.length > 0 && contactos.map((contacto, index) => (
                                <label key={index} className="label cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-accent"
                                        checked={coacreditados.includes(contacto.address as string)}
                                        onChange={(e) => handleCheckboxChange(contacto.address, e.target.checked)}
                                    />
                                    <span className="label-text text-left flex-1 ml-2">{contacto.username}</span>
                                </label>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Meses</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        value={meses}
                        placeholder='3 meses'
                        onChange={(e) => setMeses(e.target.value)}
                    />
                </div>

                <div className="form-control mb-6">
                    <label className="label">
                        <span className="label-text">Interes a pagar</span>
                    </label>
                    <input
                        type="text"
                        placeholder='4 %'
                        className="input input-bordered w-full"
                        value={interesAnual}
                        onChange={(e) => {
                            setInteresAnual(e.target.value)
                        }}
                    />
                </div>

                <div className="form-control">
                    {simulatedContract && (<button type="submit" className="btn btn-primary">Solicitar Aprobacion</button>)}
                </div>
            </form>
        </div>
    );
};

export default LoanRequestForm;
