import "./styles.css";
import capa from "./../../assets/thumbnail.png";
import Image from "next/image";

export default function Card({show, setShow}) {
    return (
        <div className="card" onClick={()=>setShow(!show)}>
            <Image className="card-img" src={capa}  alt=""/>
            <div className="card-tittle">
                <span><strong>Como aumentar sua Geração de Leads feat. Traktor</strong></span>
            </div>
        </div>
    )
}