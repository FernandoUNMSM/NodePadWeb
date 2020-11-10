import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, useLocation} from 'wouter'
import React, {useState} from 'react'
import Loader from './../../components/loader/loader'
import aadUser from './../../services/addUser'
import './register.css'

function Register() {
	const [location, setLocation] = useLocation(); //eslint-disable-line
	const [loader, setLoader] = useState(false)

	const sumbitForm = (event) => {
		setLoader(true)
		const formData = new FormData(event.target)
		event.preventDefault();
		aadUser({formData: formData})
			.then(response => {
				setLoader(false)
				if(response === 'user created'){
					setLocation('/editor')
				}
			})
	}
	// const validatePassword = (event) => {
	// 	event.preventDefault()
	// 	console.log(event.target)
	// }
	// 	useEffect(()=> {
	// 		if(validateUser){
	// 			setLocation("/editor");
	// 		}
	// },[validateUser])


	return (
		<>
			{
				(loader)
				? <Loader/>
				: null
			}
			<div className="containerConvenience">
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
										<input type="password" name="password" required="required" autoComplete="off" />
										<span className="text">
											<FontAwesomeIcon icon={faLock} /> Contraseña</span>
										<span className="line"></span>
									</div>
								</div>
								<div className="col">
									<div className="inputBox">
										<input type="password" required="required" autoComplete="off" />
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