import "./styles.css";
import capa from "./../../assets/thumbnail.png";
import Image from "next/image";

export default function Card() {
    return (
        <div className="card">
            <Image className="card-img" src={capa} />
            <div className="card-tittle">
                <span><strong>Como aumentar sua Geração de Leads feat. Traktor</strong></span>
            </div>
        </div>
    )
}