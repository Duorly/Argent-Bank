import { Routes, Route } from "react-router-dom";
import { Main } from "@/layouts/main";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import {pathLogin, pathProfile } from "@/utils/routes";
import { Login } from "@/pages/Login";
import { Profile } from "@/pages/Profile";

export const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path={`${pathLogin}`} element={<Login />} />
                <Route path={`${pathProfile}`} element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}