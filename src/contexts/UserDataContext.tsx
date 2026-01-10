import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useAccount, useReadContract } from "wagmi";

import { REGISTRY_ABI } from "../abis/PrestaChainRegistry";
import REGISTRY_ADDRESS from '../deployments/84532/PrestaChainRegistry.json'
import { ContactoInfo, DeploymentValue } from "../types";

import { getUserDataBy } from '../data';


interface UserDataContextState {
    contactos: ContactoInfo[];
}

// Inicializa el contexto con valores por defecto
const UserDataContext = createContext<UserDataContextState>({} as UserDataContextState);

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [contactos, setContactos] = useState<ContactoInfo[]>([])
    const { address } = useAccount();

    const { data, isLoading, isPending, error } = useReadContract({
        abi: REGISTRY_ABI,
        address: REGISTRY_ADDRESS.address as DeploymentValue,
        functionName: 'getMisContactos',
        args: [address]
    });

    useEffect(() => {
        if (data) {
            const newContacts: ContactoInfo[] = (data as string[]).map((currentAddress: string) => {
                return ({
                    username: getUserDataBy(currentAddress).username,
                    address: currentAddress,
                    img: getUserDataBy(currentAddress).img
                }
                )
            });
            setContactos(newContacts);
        }
    }, [data, isLoading, isPending]);

    useEffect(() => {
        if (error) {
            console.error("Error while fetching contacts:", error);
        }
    }, [error]);

    return (
        <UserDataContext.Provider value={{ contactos }}>
            {children}
        </UserDataContext.Provider>
    );
};
