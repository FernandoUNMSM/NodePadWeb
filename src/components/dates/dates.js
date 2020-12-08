import React, { useEffect } from 'react'
import './dates.css'
import { faGripHorizontal, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dates({ dates }) {
    useEffect(() => {
        console.log("Hola")
    }, [dates])
    return (
        <>
            {(dates)
                ?
                <div className="fondo">
                    <div className="margeni">
                        <div className="margenis">
                            <div className="margenis1">
                                <h1 className="claseh1">Documentos</h1>
                            </div>
                            <div className="margenis2">
                                <a className="clasea" href="/index-2.html">
                                    {/* Para los iconos */}
                                    <FontAwesomeIcon icon={faGripHorizontal} />
                                </a>
                            </div>
                            <div className="margenis2">
                                <a className="clasea" href="/index-1.html">
                                    <i className="fas fa-list"></i>
                                </a>
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <i className="far fa-file"></i>
                            </div>
                            <div className="margenim2">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim3">
                                <i className="fas fa-trash"></i>
                            </div>
                            <div className="margenim3">
                                <i className="far fa-file"></i>
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <i className="far fa-file"></i>
                            </div>
                            <div className="margenim2">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim3">
                                <i className="fas fa-trash"></i>
                            </div>
                            <div className="margenim3">
                                <i className="far fa-file"></i>
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <i className="far fa-file"></i>
                            </div>
                            <div className="margenim2">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim3">
                                <i className="fas fa-trash"></i>
                            </div>
                            <div className="margenim3">
                                <i className="far fa-file"></i>
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <i className="far fa-file"></i>
                            </div>
                            <div className="margenim2">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim3">
                                <i className="fas fa-trash"></i>
                            </div>
                            <div className="margenim3">
                                <i className="far fa-file"></i>
                            </div>
                        </div>
                        <div className="margenim">
                            <div className="margenim1">
                                <i className="far fa-file"></i>
                            </div>
                            <div className="margenim2">
                                <h2 className="claseh2">Nombre del documento</h2>
                            </div>
                            <div className="margenim3">
                                <i className="fas fa-trash"></i>
                            </div>
                            <div className="margenim3">
                                <i className="far fa-file"></i>
                            </div>
                        </div>
                    </div>
                    <div className="margend">
                        <i className="fas fa-file-upload"></i>
                        <i className="fas fa-file-download"></i>
                    </div>
                </div>
                : null
            }

        </>
    )
}
export default Dates