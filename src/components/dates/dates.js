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
                <div className="fondo">
                    <div className="margeni">
                        <div className="margenis">
                            <div className="margenis1">
                                <FontAwesomeIcon icon={faHtml5} className="iconsi" />
                                <h1 className="claseh1">Documentos HTML5</h1>
                            </div>
                            <div className="margenis2">
                                <FontAwesomeIcon icon={faTimesCircle} className="iconsi" />
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faFileCode} className="iconii" />
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faTrash} className="iconii" />
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faFileCode} className="iconii" />
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faTrash} className="iconii" />
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faFileCode} className="iconii" />
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faTrash} className="iconii" />
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faFileCode} className="iconii" />
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faTrash} className="iconii" />
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faFileCode} className="iconii" />
                            </div>
                            <div className="margenim2">
                                <FontAwesomeIcon icon={faTrash} className="iconii" />
                            </div>
                        </div>
                    </div>
                    <div className="margend">
                    </div>
                </div>
                : null
            }

        </>
    )
}
export default Dates