import { NavLink } from "react-router-dom";
import "./style.scss";

export const NotFound = (): JSX.Element => {
    return (
        <div className="notFound">
            <div>
                <div className="code">404</div>
                <div className="text">Oups! La page que vous demandez n&apos;existe pas.</div>
                <div className="home-link"><NavLink className="home-nav-link" to="/">Retourner sur la page
                    d’accueil</NavLink></div>
            </div>
        </div>
    );
}