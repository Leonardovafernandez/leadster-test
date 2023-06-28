import "./styles.css";
import logo from "./../../assets/logo.png";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logomarca da empresa" />
        </header>
    )
}