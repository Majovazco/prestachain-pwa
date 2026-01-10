import type { PrivyClientConfig } from '@privy-io/react-auth';
import { baseSepolia } from 'wagmi/chains'

export const privyConfig: PrivyClientConfig = {
    embeddedWallets: {
        createOnLogin: 'all-users',
        requireUserPasswordOnCreate: true,
        noPromptOnSignature: false,
    },
    defaultChain: baseSepolia,
    supportedChains: [baseSepolia],
    loginMethods: ['email', 'google'],
    appearance: {
        theme: 'light',
        accentColor: '#676FFF'
    },
};