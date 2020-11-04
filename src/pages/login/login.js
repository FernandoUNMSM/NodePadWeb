import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import Loader from './../../components/loader/loader'
import sendUser from './../../services/getUsers'
import './login.css'

function Login() {
	const [location, setLocation] = useLocation(); //eslint-disable-line
	const [validateUser, setValidate] = useState(false)
	const [loader, setLoader] = useState(false)

	const sumbitForm = (event) => {
		setLoader(true)
		const formData = new FormData(event.target)
		event.preventDefault();
		sendUser({formData: formData, loader: loader})
			.then(({validate, loader}) => {
				console.log(validate)
				setValidate(validate)
				setLoader(loader)
			})
		}
		useEffect(()=> {
			if(validateUser){
				setLocation("/editor");
			}
	},[validateUser])

	return (
		<>
			{
				(loader)
				? <Loader/>
				: null
			}
			<div className="loginContainer">
				<div className="login">
					<h1>Iniciar Sesion</h1>
					<form id="form" action="POST" onSubmit={sumbitForm} encType="multipart/form-data">
						<div className="row100">
							<div className="col">
								<div className="inputBox">
									<input type="text" name="nombre" required="required" autoComplete="off"/>
									<span className="text">
										<FontAwesomeIcon icon={faUser} /> Usuario
									</span>
									<span className="line"></span>
								</div>
							</div>
							<div className="col">
								<div className="inputBox">
									<input type="password" name="password" required="required" autoComplete="off"/>
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