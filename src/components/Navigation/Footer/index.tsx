import "./style.scss";

export const Footer = (): JSX.Element => {
    const year: number = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright {year} Argent Bank</p>
        </footer>
    );

}