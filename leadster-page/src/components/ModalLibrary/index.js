import Image from "next/image";
import CloseIcon from '../../assets/close-icon.svg';
import DownloadGreen from '../../assets/download-green.svg';
import DownloadBlue from '../../assets/download-blue.svg';
import DownloadYellow from '../../assets/download-yellow.svg';
import "./styles.css";

export default function ModalLibrary({show, setShow}) {   
    return (
    <div className="modal">
        <div className="modal_video">
            <Image className="close" src={CloseIcon}  alt="" onClick={()=>setShow(!show)}/>
            <span className="title"><strong><span className="blue">Webinar: </span>Como aumentar sua Geração de Leads feat. Traktor</strong></span>
            <div className="video">
                <iframe
                    src="https://www.youtube.com/embed/8EKTUhF7yA8"
                    title="Como aumentar sua Geração de Leads"
                    allowFullScreen
                    width="100%" height="350"
                />
            </div>
            <div className="description">
                <span><strong>Descrição</strong></span>
                <hr></hr>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            </div>
            <div className="download">
                <span><strong>Downloads</strong></span>
                <hr></hr>
                <div className="download-buttons">
                    <button className="buttons-modal">
                        <div className="xls">
                            <div className="xls-img">
                                <Image src={DownloadGreen}  alt=""/>
                            </div>
                            <div  className="xls-txt">
                                <span>Spreadsheet.xls</span>
                            </div>
                        </div>
                    </button>
                    <button className="buttons-modal">
                        <div className="doc">
                            <div className="doc-img">
                                <Image src={DownloadBlue}  alt=""/>
                            </div>
                            <div className="doc-txt">
                                <span>Document.doc</span>
                            </div>
                        </div>
                    </button>
                    <button className="buttons-modal">
                        <div className="ppt">
                            <div className="ppt-img">
                                <Image src={DownloadYellow}  alt=""/>
                            </div>
                            <div className="ppt-txt">
                                <span>Presentation.ppt</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}