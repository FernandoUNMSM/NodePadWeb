import React, { useState, useRef, useContext } from 'react'
import './contacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'wouter'
import Loader from './../../components/loader/loader'
import Errormodal from './../../components/errormodal/errormodal'
// import UserContext from './../../context/userContext'

function Register() {
	const [location, setLocation] = useLocation(); //eslint-disable-line
	const [loader, setLoader] = useState(false)
	const [error, setError] = useState(false)
	const [message, setMessage] = useState('')

	// const {setUsuario} = useContext(UserContext)

	
	return (
		<>
			{
				(loader)
					? <Loader />
					: null
			}
			<div className="containerConvenience">
				{
					(error)
						?
						<Errormodal setError={setError} message={message} />
						: null
				}
				<div className="registerContainer">
					<div className="login">
						<h1>Contacto NodePadWeb</h1>
						<h1>Trabajemos Juntos!</h1>
						<form id="form" action="" encType="multipart/form-data">
							<div className="row100">
								<div className="col">
									<div className="inputBox">
										<input type="text" name="nombre" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faUser} /> Nombres y Apellidos
										</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="text" name="apellido" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faUser} /> Grado de Instruccion
										</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="text" name="usuario" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faUser} /> Empresa a la que pertenece
										</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="text" name="email" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faEnvelope} /> E-mail empresarial
										</span>
										<span className="line"></span>
									</div>
								</div>
								
									<p className="register"><Link to='/login'>¿Desea iniciar sesion?</Link></p>
								</div>
							
							<div className="row100">
								<div className="col">
									<button className="sumbit">
										Enviar informacion
									</button>
								</div>
							</div>
						</form>
						<p className="link"><Link to='/'>Home</Link></p>
					</div>
				</div>
			</div>
		
			</>
	)
	 
}

export default Register