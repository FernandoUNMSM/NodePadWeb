import React, { useEffect } from 'react'
import './dates.css'
import { faGripHorizontal, faTimesCircle, faFileCode, faTrash, faFileDownload, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

function Dates({ dates, setDates, lenguaje }) {
    // var iconi = "Html5"

    // const mostrarIcono = () => {
    //     switch (lenguaje) {
    //         case 'HTML':
    //             iconi = "Html5"
    //             console.log(iconi)
    //             break;
    //         case 'CSS':
    //             iconi = "TimesCircle"
    //             console.log(iconi)
    //             break;
    //         case 'JS':
    //             iconi = "GripHorizontal"
    //             console.log(iconi)
    //             break;
    //     }
    // }

    // useEffect(() => {
    //     mostrarIcono()
    // }, [lenguaje])

    const mostrarDatos = () => {
        setDates(!dates)
    }

    return (
        <>
            {(dates)
                ?
                <div className="datesContainer">
                    <div className="datesLeft">
                        <div className="datesLeftSup">
                            <div className="datesLeftSup1">
                                <FontAwesomeIcon icon={faHtml5} className="datesIconS" />
                                <h1 className="datesH1">Documentos {lenguaje}</h1>
                            </div>
                            <div className="datesLeftSup2">
                                <FontAwesomeIcon icon={faTimesCircle} className="datesIconS2" onClick={mostrarDatos} />
                            </div>
                        </div>
                        <div className="datesLeftMed">
                            <div className="datesLeftMed1">
                                <h2 className="datesH2">Nombre del documento</h2>
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faFileCode} className="datesIconM" />
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faTrash} className="datesIconM" />
                            </div>
                        </div>
                        <div className="datesLeftMed">
                            <div className="datesLeftMed1">
                                <h2 className="datesH2">Nombre del documento</h2>
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faFileCode} className="datesIconM" />
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faTrash} className="datesIconM" />
                            </div>
                        </div>
                        <div className="datesLeftMed">
                            <div className="datesLeftMed1">
                                <h2 className="datesH2">Nombre del documento</h2>
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faFileCode} className="datesIconM" />
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faTrash} className="datesIconM" />
                            </div>
                        </div>
                        <div className="datesLeftMed">
                            <div className="datesLeftMed1">
                                <h2 className="datesH2">Nombre del documento</h2>
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faFileCode} className="datesIconM" />
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faTrash} className="datesIconM" />
                            </div>
                        </div>
                        <div className="datesLeftMed">
                            <div className="datesLeftMed1">
                                <h2 className="datesH2">Nombre del documento</h2>
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faFileCode} className="datesIconM" />
                            </div>
                            <div className="datesLeftMed2">
                                <FontAwesomeIcon icon={faTrash} className="datesIconM" />
                            </div>
                        </div>
                    </div>
                    <div className="datesRight">
                        <div className="datesRightS">
                            <FontAwesomeIcon icon={faHtml5} className="datesIconR" />
                        </div>
                        <div className="datesRightI">
                            <h3 className="datesH3">Documento Actual</h3>
                            <p className="datesP">Nombre:</p>
                            <br />
                            <input type="text" id="namedoc" className="datesField"></input>
                        </div>
                    </div>
                </div>
                : null
            }

        </>
    )
}
export default Dates