import "./styles.css";
import capa from "./../../assets/thumbnail.png";
import Image from "next/image";

export default function Card() {
    return (
        <div className="card">
            <Image className="card-img" src={capa} />
            <div className="card-tittle">
                <span><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quibusdam?</strong></span>
            </div>
        </div>
    )
}