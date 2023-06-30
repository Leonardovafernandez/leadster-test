import "./styles.css";
import Image from "next/image";
import logo from "./../../assets/logo.png";
import linkedin from "./../../assets/linkedin.png";
import instagram from "./../../assets/instagram.svg";
import facebook from "./../../assets/facebook.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-header">
                <Image className="footer-header-img" src={logo} alt="Logomarca da empresa" />
                <span className="footer-header-text">Transformando visitantes em clientes.</span>
            </div>
            <div className="footer-content">
                <div className="footer-content-links">
                    <span><strong>Links Principais</strong></span>
                    <Link className="links" href='#'>Home</Link>
                    <Link className="links" href='#'>Ferramenta</Link>
                    <Link className="links" href='#'>Preços</Link>
                    <Link className="links" href='#'>Contato</Link>
                </div>
                <div className="footer-content-cases">
                    <span><strong>Cases</strong></span>
                    <Link className="links" href='#'>Geração de Leads B2B</Link>
                    <Link className="links" href='#'>Geração de Leads em Software</Link>
                    <Link className="links" href='#'>Geração de Leads em imobiliária</Link>
                    <Link className="links" href='#'>Cases de Sucesso</Link>
                </div>
                <div className="footer-content-materiais">
                    <span><strong>Materiais</strong></span>
                    <Link className="links" href='#'>Blog</Link>
                    <Link className="links" href='#'>Parceria com Agências</Link>
                    <Link className="links" href='#'>Guia Definitivo do Marketing</Link>
                    <Link className="links" href='#'>Materiais Gratuitos</Link>
                </div>
                <div className="footer-content-siga">
                    <span><strong>Siga a Leadster</strong></span>
                    <div className="footer-social-links">
                        <div className="footer-social">
                            <Image className="footer-social-img" src={linkedin} alt="Logomarca da empresa" />
                        </div>
                        <div className="footer-social">
                            <Image className="footer-social-img" src={facebook} alt="Logomarca da empresa" />
                        </div>
                        <div className="footer-social">
                            <Image className="footer-social-img" src={instagram} alt="Logomarca da empresa" />
                        </div>
                    </div>
                    <span>E-mail: contato@leadster.com.br</span>
                    <span>Telefone: (42) 98828-9851</span>
                </div>
            </div>
            <hr className="hr"></hr>
            <div className="footer-right">
                <span>Copyright © 2015 - 2022 Todos os direitos reservados | <Link className="link-oficial" href='#'>Leadster</Link></span>
                <span>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP 80010-000 | Termos de uso</span>
            </div>
        </footer>
    )
}