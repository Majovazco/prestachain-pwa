// import { http } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { createConfig } from '@privy-io/wagmi';
import { http } from 'wagmi'

export const wagmiConfig = createConfig({
    chains: [baseSepolia],
    transports: {
        [baseSepolia.id]: http(`https://base-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_KEY || ""}`),
        // [baseSepolia.id]: webSocket(`wss://base-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_KEY || ""}`)
    },
})

