import { usePrivy } from '@privy-io/react-auth';
import { useAccount, useReadContract } from 'wagmi';
import { useState, type SVGProps } from 'react';

import MainLayout from "../layouts/MainLayout";
import Avatar from "../components/Avatar";
import { APP_NAME, SLOGAN } from '../constants';
import { formatAddress } from '../utils';
import { getUserDataBy } from '../data';
import { DeploymentValue } from '../types';
import { MXNTokenABI } from '../abis/TokenABI';
import MXNTOKEN_ADDRESS from '../deployments/84532/Token.json'
import { formatEther } from 'viem';

export default function HomeView() {
    const { authenticated, ready } = usePrivy();

    if (!ready) {
        return <LoadingView />
    }

    if (!authenticated) {
        return (<SignInView />)
    }

    return (<LoggedInView />)
}

const LoadingView = () => (
    <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner w-8 h-8 text-primary"></span>
    </div>
);

const SignInView = () => {
    const { login } = usePrivy();

    return (
        <div className="flex flex-col items-center justify-center h-screen px-8">
            <h5 className="text-xl font-semibold mb-2">{APP_NAME}</h5>
            <p className="text-center text-sm mb-4">{SLOGAN}</p>
            <button onClick={login} className="btn btn-primary w-full">Log in</button>
        </div>
    )
};

const LoggedInView = () => {
    const { logout, exportWallet } = usePrivy();
    const { address } = useAccount();
    console.log("Address", address);

    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
    };

    // isLoading, isPending, error
    const { data } = useReadContract({
        abi: MXNTokenABI,
        address: MXNTOKEN_ADDRESS.address as DeploymentValue,
        functionName: 'balanceOf',
        args: [address]
    });

    console.log("DATA", data);

    return (
        <MainLayout>
            <div className="p-4 mt-6 flex flex-col items-center justify-center">
                <div className="bg-white p-4 shadow rounded-lg max-w-md w-full text-center space-y-4">
                    {address && <Avatar imageUrl={getUserDataBy(address).img} />}
                    {address && <h1 className="text-2xl font-bold">{getUserDataBy(address).username}</h1>}
                    <div className="card w-full max-w-md text-center">
                        <div className="card-body flex flex-col items-center">
                            <h3 className="card-title">Balance</h3>
                            {(data as any) && <p className="text-1xl font-bold text-indigo-500">{formatEther(data as any)}</p>}
                            <h3 className="card-title">Address</h3>
                            {address && (
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm font-bold text-indigo-500">{formatAddress(address)}</p>
                                    <div className="relative">
                                        <button onClick={() => copyToClipboard(address)} className="text-indigo-500 hover:text-indigo-600">
                                            <CopyIcon />
                                        </button>
                                        {copied && (
                                            <div className="tooltip tooltip-open tooltip-primary" data-tip="Copied!" style={{ top: '-1rem', left: '-45%', transform: 'translateX(-50%)' }}>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={logout} className="btn btn-sm btn-link btn-block no-underline">Sign out</button>

                <button onClick={exportWallet} className="btn btn-sm btn-link btn-block no-underline text-red-500">Export wallet</button>
            </div>
        </MainLayout>
    )
}


export function CopyIcon(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"></path></svg>);
}