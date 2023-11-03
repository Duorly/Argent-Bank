import { Routes, Route } from "react-router-dom";
import { Main } from "@/layouts/main";
import { Home } from "@/pages/Home";

export const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}