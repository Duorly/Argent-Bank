import { Transaction } from "@/components/Transaction";
import "./style.scss";

export const Profile = (): JSX.Element => {
    return (
        <main className="bg-dark">
            <h2 className="sr-only">Accounts</h2>
            <Transaction title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} />
            <Transaction title={"Argent Bank Savings (x6712)"} amount={"10,928.42"} />
            <Transaction title={"Argent Bank Credit Card (x8349)"} amount={"184.30"} />
        </main>
    );
}
