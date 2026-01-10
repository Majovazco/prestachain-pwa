import { useParams } from "react-router-dom";

export default function SolicitudDetailsView() {
    let { id } = useParams<"id">();

    return (
        <div>
            <h1>Solicitud Details View {id}</h1>
        </div>
    )
}