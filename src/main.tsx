import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { PrivyProvider } from '@privy-io/react-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from '@privy-io/wagmi';
import { NotificationsProvider } from './contexts/NotificationsContext';
import { UserDataProvider } from './contexts/UserDataContext';

import { wagmiConfig } from './config/wagmiConfig';
import { privyConfig } from "./config/privyConfig";

import App from './App';

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="content">
      <BrowserRouter>
        <PrivyProvider
          appId={import.meta.env.VITE_PRIVY_APP_ID || ""}
          config={privyConfig}>
          <QueryClientProvider client={queryClient}>
            <WagmiProvider config={wagmiConfig}>
              <NotificationsProvider>
                <UserDataProvider>
                  <App />
                </UserDataProvider>
              </NotificationsProvider>
            </WagmiProvider>
          </QueryClientProvider>
        </PrivyProvider>
      </BrowserRouter>
    </div>
  </React.StrictMode >,
)
