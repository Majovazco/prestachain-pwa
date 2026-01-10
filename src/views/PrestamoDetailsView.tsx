import { useParams } from "react-router-dom";

export default function PrestamoDetailsView() {
    let { id } = useParams<"id">();

    return (
        <div>
            <h1>Prestamo Details View {id}</h1>
        </div>
    )
}