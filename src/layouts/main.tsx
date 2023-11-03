
import { Header } from "@/components/Navigation/Header";
import { Footer } from "@/components/Navigation/Footer";
import { Outlet } from "react-router-dom";

export const Main = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}