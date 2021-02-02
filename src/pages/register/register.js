import React, { useState, useRef, useContext } from 'react'
import './register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'wouter'
import Loader from './../../components/loader/loader'
import aadUser from './../../services/addUser'
import Errormodal from './../../components/errormodal/errormodal'
// import UserContext from './../../context/userContext'

function Register() {
	const [location, setLocation] = useLocation(); //eslint-disable-line
	const [loader, setLoader] = useState(false)
	const [error, setError] = useState(false)
	const password = useRef(null)
	const password2 = useRef(null)
	const [message, setMessage] = useState('')

	// const {setUsuario} = useContext(UserContext)

	const sumbitForm = (event) => {
		event.preventDefault();
		if (validatePassword()) {
			setMessage('Las contraseñas no coinciden')
			setError(true)
			return
		}

		setLoader(true)
		const formData = new FormData(event.target)

		aadUser({ formData: formData })
			.then(({mensaje, user}) => {
				setMessage(mensaje)
				setLoader(false)

				// setUsuario(user)

				localStorage.setItem("usuarioActual", JSON.stringify(user))
				// localStorage.setItem("configActual", JSON.stringify({ size: '16px', color: 'var(--cardTitle)' }))

				if (mensaje === 'user created') {
					setLocation('/editor')
				} else if (mensaje === 'Usuario no valido' || mensaje === 'Email no valido') {
					setError(true)
				}
			})

	}
	const validatePassword = () => {
		return (password.current.value !== password2.current.value) ? true : false
	}

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
						<h1>Registrate</h1>
						<form id="form" action="" onSubmit={sumbitForm} encType="multipart/form-data">
							<div className="row100">
								<div className="col">
									<div className="inputBox">
										<input type="text" name="nombre" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faUser} /> Nombre
										</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="text" name="apellido" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faUser} /> Apellido
										</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="text" name="usuario" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faUser} /> Nombre de usuario
										</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="text" name="email" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faEnvelope} /> E-mail
										</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="password" name="password" required="required" autoComplete="off" ref={password} />
										<span className="text">
											<FontAwesomeIcon icon={faLock} /> Contraseña</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="password" required="required" autoComplete="off" ref={password2} />
										<span className="text">
											<FontAwesomeIcon icon={faLock} /> Confirmar Contraseña</span>
										<span className="line"></span>
									</div>
									<p className="register"><Link to='/login'>¿Ya tienes cuenta?</Link></p>
								</div>
							</div>
							<div className="row100">
								<div className="col">
									<button className="sumbit">
										Registrarme
									</button>
								</div>
							</div>
						</form>
						<p className="link"><Link to='/'>Regresar al Home</Link></p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register