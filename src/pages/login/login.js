import React, { useEffect, useState, useContext } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'wouter'
import Loader from './../../components/loader/loader'
import sendUser from './../../services/getUsers'
import Errormodal from './../../components/errormodal/errormodal'
import UserContext from './../../context/userContext'
// import UserContext from './../../context/userContext'

function Login() {
	const [location, setLocation] = useLocation(); //eslint-disable-line
	const [validateUser, setValidate] = useState(false)
	const [loader, setLoader] = useState(false)
	const [error, setError] = useState(false)
	const [message, setMessage] = useState('')
  const { setImageA } = useContext(UserContext)

	// const {usuario, setUsuario} = useContext(UserContext)

	const sumbitForm = (event) => {
		setLoader(true)
		const formData = new FormData(event.target)
		event.preventDefault();
		sendUser({ formData: formData, loader: loader })
			.then(({ validate, loader, user, mensaje }) => {
				setImageA(user.image)
				localStorage.setItem("usuarioActual", JSON.stringify(user))
				setMessage(mensaje)
				if (mensaje === 'Password incorrecto' || mensaje === 'Usuario no existe') {
					setError(true)
				}
				setValidate(validate)
				setLoader(loader)
				// localStorage.setItem("configActual",JSON.stringify({size: '16px', color: 'var(--cardTitle)'}))
			})
	}

	useEffect(() => {
		if (validateUser) {
			setLocation("/editor");
		}
	}, [validateUser])

	return (
		<>
			{
				(loader)
					? <Loader />
					: null
			}
			<div className="loginContainer">
				{
					(error)
						?
						<Errormodal setError={setError} message={message} />
						: null
				}
				<div className="login">
					<h1>Iniciar Sesion</h1>
					<form id="form" action="POST" onSubmit={sumbitForm} encType="multipart/form-data">
						<div className="row100">
							<div className="col">
								<div className="inputBox">
									<input type="text" name="nombre" required="required" autoComplete="off" alt="nombreLogin"/>
									<span className="text">
										<FontAwesomeIcon icon={faUser} /> Usuario
									</span>
									<span className="line"></span>
								</div>
							</div>
							<div className="col">
								<div className="inputBox">
									<input type="password" name="password" required="required" autoComplete="off" alt="passwordLogin"/>
									<span className="text">
										<FontAwesomeIcon icon={faLock} /> Contraseña
									</span>
									<span className="line"></span>
								</div>
								<p className="register"><Link to='/register'>¿No tienes cuenta?</Link></p>
							</div>
						</div>
						<div className="row100">
							<div className="col">
								<button className="sumbit" alt="botonLogin">
									Iniciar Sesion
							</button>
							</div>
						</div>
					</form>
					<p className="link"><Link to='/'>Regresar al Home</Link></p>
				</div>
			</div>
		</>
	)
}

export default Login