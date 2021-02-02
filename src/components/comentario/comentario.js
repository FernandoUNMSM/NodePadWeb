import React, { Component } from 'react'
import './comentario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import "bootstrap/dist/css/bootstrap.min.css";

import qualifiCation from './../../services/qualifiCation'
function Comentario({comentario, setComentario}) {  

    var contador;
    function calificar(evt) {
        var item;
        // console.log(evt.target.localName);
        if(evt.target.localName == "path"){
            item=evt.target.parentNode;
        } else{
            item=evt.target;
        }
        console.log(item);
        contador = item.id[0]; // nos captura el caracter
        let nombre = item.id.substring(1);

        for (let i = 0; i < 5; i++) {
            if (i < contador) {
                document.getElementById((i+1)+nombre).style.color = "orange";
            } else {
                document.getElementById((i+1)+nombre).style.color = "black";
            }
        }

    }
    function Mensaje (){
        alert("Enviado: " +contador+  "   Estrellas y su comentario");
    }
    const closeComentario = () => {
        setComentario(!comentario)
      }
    return (
        <>
        {
            (comentario)
                ?
             
                <div className="grayContainer">
                <div className="contenedor-comentario">
                <div className="contener-caja"> <br></br>
                    <div className="contenedor-general">
                        <div className="card-header">
                            <h2>Calificacion</h2>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Dejanos tu Calificacion</h5><br></br>

                            <FontAwesomeIcon icon={faStar} className="iconstar" onClick={calificar} id="1estrella" />
                            <FontAwesomeIcon icon={faStar} className="iconstar" onClick={calificar} id="2estrella" />
                            <FontAwesomeIcon icon={faStar} className="iconstar" onClick={calificar} id="3estrella" />
                            <FontAwesomeIcon icon={faStar} className="iconstar" onClick={calificar} id="4estrella" />
                            <FontAwesomeIcon icon={faStar} className="iconstar" onClick={calificar} id="5estrella" />
                            <br></br><br></br>
                            <textarea className="txtvaloracion"placeholder="Escribe una opinion" id="txtvaloracion"></textarea>
                            <button className="btn-gen" onClick={Mensaje}>calificar</button>
                        </div>
                        <FontAwesomeIcon icon={faTimes} className="closeComentario" onClick={closeComentario} />
                    </div>

                </div>
            </div>
            </div>
            : null   
            }
    
    </>
)

}
export default Comentario
