# PrestaChain

**Yo Les Presto — “Tu puerta a la libertad financiera”**

Decentralised peer-to-peer lending for groups of people. A borrower asks for a loan together with co-borrowers from their own circle, the group approves it, and the loan is granted on-chain — without a bank in the middle.

Built with Vite, React, TypeScript and Tailwind CSS during Hack México 2024. Prototype, not a production lending product.

## How it works

1. **Sign in with email or Google.** Privy creates an embedded wallet for the user, no seed phrase to manage.
2. **Request a loan.** The borrower sets an amount, a term in months, an annual interest rate, and chooses co-borrowers from their contacts.
3. **The group approves.** Co-borrowers review the request (`solicitarPrestamo` on-chain, with approvals received vs. required tracked per request).
4. **The loan is granted.** Once approved, the loan is issued on-chain (`otorgarPrestamo`) in the MXN token.
5. **Track it.** Home shows the wallet balance and address; Loans, Requests, Contacts and Notifications keep the whole flow in one mobile-first PWA.

## On-chain

Network: **Base Sepolia (chain id 84532)**

| Contract | Address |
|---|---|
| PrestaChain | `0xA88B48a864FfE077046FEa4d0f6418D2Ed84981A` |
| PrestaChainRegistry | `0x9cd2A0BaA780998Ae6A5A55fdAC2ACADc34Bd25c` |
| Token (MXN) | `0x45D15FD01AC66E58dC804768b1c95F7144c9A8c4` |

The app reads the token `balanceOf` for the connected wallet and simulates each loan request before sending it, so a transaction is only submitted when the simulation succeeds.

## Technologies

TypeScript · React 18 · Vite · Tailwind CSS · daisyUI · React Router · React Query · Privy · wagmi · viem · Vite PWA · Node 20.12.2

## How to run

```bash
pnpm install
pnpm dev
```

Create a `.env` file with:

```bash
VITE_PRIVY_APP_ID=your_privy_app_id
VITE_ALCHEMY_KEY=your_alchemy_key
```

Then open the app, sign in, and use the Base Sepolia test network. `pnpm build` runs `tsc && vite build`.

## Structure

```
src/
├── abis/            # PrestaChain, PrestaChainRegistry and Token ABIs
├── components/      # LoanRequestForm, NavBar, BottomBar, Avatar, Alert
├── config/          # Privy and wagmi (Base Sepolia via Alchemy)
├── contexts/        # User data and notifications
├── data/            # Demo contacts
├── deployments/84532/  # Deployed contract addresses on Base Sepolia
├── layouts/         # MainLayout
├── types/           # Solicitud, ContactoInfo, NotificationItem
├── utils/           # Formatting and string helpers
└── views/           # Home, Solicitudes, Prestamos, Contactos, Notifications
```

## Status and limitations

This is a hackathon prototype, and the README says so on purpose:

- Contacts in the demo are hard-coded sample data.
- Some detail views are still placeholders.
- It runs on Base Sepolia with test funds, not on mainnet and not with real money.

What is real: the full request → group approval → on-chain loan flow, the deployed contracts on Base Sepolia, and the wallet, balance and notification experience around it.
