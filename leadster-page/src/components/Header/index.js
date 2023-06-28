import "./styles.css";
import logo from "./../../assets/logo.png";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <Image className="logo-img" src={logo} alt="Logomarca da empresa" />
        </header>
    )
}