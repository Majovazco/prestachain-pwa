import { usePrivy } from '@privy-io/react-auth';

export default function CreateWalletView() {
    const { ready, authenticated, createWallet } = usePrivy();

    return (<button disabled={!(ready && authenticated)} onClick={createWallet}>
        Create a wallet
    </button>
    )
}