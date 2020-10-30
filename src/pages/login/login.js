import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'wouter'
import React from 'react'
import './login.css'


function Login() {
	return (
		<>
			<div className="loginContainer">
				<div className="login">
					<h1>Iniciar Sesion</h1>
					<form action="">
						<div class="row100">
							<div class="col">
								<div class="inputBox">
									<input type="text" name="Nombre" required="required" autocomplete="off" />
									<span class="text">
										<FontAwesomeIcon icon={faUser} /> Usuario
									</span>
									<span class="line"></span>
								</div>
							</div>
							<div class="col">
								<div class="inputBox">
									<input type="password" name="password" required="required" autocomplete="off" />
									<span class="text">
										<FontAwesomeIcon icon={faLock} /> Contraseña</span>
									<span class="line"></span>
								</div>
								<p className="register"><Link to='/register'>¿No tienes cuenta?</Link></p>
							</div>
						</div>
						<div class="row100">
							<div class="col">
								<input type="submit" value="Iniciar Sesion" onsumbit="return false" />
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