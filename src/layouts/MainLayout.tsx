import BottomBar from "../components/BottomBar";
import NavBar from "../components/NavBar";

interface MainLayoutProps {
    children: React.ReactNode
    showBackButton?: boolean
}

export default function MainLayout({ children, showBackButton = false }: MainLayoutProps) {
    return (
        <>
            <NavBar showBackButton={showBackButton} />
            {children}
            <BottomBar />
        </>
    )
}