import { usePrivy } from '@privy-io/react-auth';

import {
    Route,
    Routes
} from "react-router-dom";

import HomeView from './views/HomeView';
import SolicitudesView from './views/SolicitudesView';
import PrestamosView from './views/PrestamosView';
import SolicitarPrestamoView from './views/SolicitarPrestamoView';
import ContactosView from './views/ContactosView';
import NewContactosView from './views/NewContactosView';
import PrestamoDetailsView from './views/PrestamoDetailsView';
import SolicitudDetailsView from './views/SolicitudDetailsView';
import NotificationsView from './views/NotificationsView';
import NotificationDetailsView from './views/NotificationDetailsView';

export default function App() {
    const { } = usePrivy()

    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/solicitudes" element={<SolicitudesView />} />
            <Route path="/solicitudes/new" element={<SolicitarPrestamoView />} />
            <Route path="/solicitudes/:id" element={<SolicitudDetailsView />} />
            <Route path="/prestamos" element={<PrestamosView />} />
            <Route path="/prestamos/new" element={<SolicitarPrestamoView />} />
            <Route path="/prestamos/:id" element={<PrestamoDetailsView />} />
            <Route path="/contactos" element={<ContactosView />} />
            <Route path="/contactos/new" element={<NewContactosView />} />
            <Route path="/notifications" element={<NotificationsView />} />
            <Route path="/notifications/:id" element={<NotificationDetailsView />} />
        </Routes>
    )
}