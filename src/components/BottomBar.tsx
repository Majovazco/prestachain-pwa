import { NavLink } from "react-router-dom";

export default function BottomBar() {
    return (
        <div className="btm-nav">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
                Home
            </NavLink>
            <NavLink to="/solicitudes" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
                Solicitudes
            </NavLink>
            <NavLink to="/prestamos" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
                Prestamos
            </NavLink>
            <NavLink to="/contactos" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>
                Contactos
            </NavLink>
        </div>
    )
}