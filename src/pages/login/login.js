import React, { useEffect, useState, useContext } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'wouter'
import Loader from './../../components/loader/loader'
import sendUser from './../../services/getUsers'
// import UserContext from './../../context/userContext'

function Login() {
	const [location, setLocation] = useLocation(); //eslint-disable-line
	const [validateUser, setValidate] = useState(false)
	const [loader, setLoader] = useState(false)

	// const {usuario, setUsuario} = useContext(UserContext)

	const sumbitForm = (event) => {
		setLoader(true)
		const formData = new FormData(event.target)
		event.preventDefault();
		sendUser({ formData: formData, loader: loader })
			.then(({ validate, loader, user }) => {
				// console.log(user)
				setValidate(validate)
				setLoader(loader)
				localStorage.setItem("usuarioActual", JSON.stringify(user))
				// setUsuario(user)
				// debugger
				// console.log(usuario)
				localStorage.setItem("configActual",JSON.stringify({size: '16px', color: 'var(--cardTitle)'}))
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
				<div className="login">
					<h1>Iniciar Sesion</h1>
					<form id="form" action="POST" onSubmit={sumbitForm} encType="multipart/form-data">
						<div className="row100">
							<div className="col">
								<div className="inputBox">
									<input type="text" name="nombre" required="required" autoComplete="off" />
									<span className="text">
										<FontAwesomeIcon icon={faUser} /> Usuario
									</span>
									<span className="line"></span>
								</div>
							</div>
							<div className="col">
								<div className="inputBox">
									<input type="password" name="password" required="required" autoComplete="off" />
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
								<button className="sumbit">
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