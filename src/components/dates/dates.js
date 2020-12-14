import React, { useEffect } from 'react'
import './dates.css'
import { faGripHorizontal, faTimesCircle, faFileCode, faTrash, faFileDownload, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

function Dates({ dates }) {
    useEffect(() => {
        console.log("Mostrar")
    }, [dates])

    return (
        <>
            {(dates)
                ?
                <div className="datesContainer">
                    <div className="datesLeft">
                        <div className="datesLeftSup">
                            <div className="datesLeftSup1">
                                <FontAwesomeIcon icon={faHtml5} className="datesIconS" />
                                <h1 className="datesH1">Documentos HTML5</h1>
                            </div>
                            <div className="datesLeftSup2">
                                <FontAwesomeIcon icon={faTimesCircle} className="datesIconS2" />
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