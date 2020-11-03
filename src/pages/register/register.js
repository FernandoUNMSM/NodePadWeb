import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'wouter'
import React from 'react'
import './register.css'


function Register() {
	return (
		<>
			<div className="containerConvenience">
				<div className="registerContainer">
					<div className="login">
						<h1>Registrate</h1>
						<form action="">
							<div class="row100">
								<div class="col">
									<div class="inputBox">
										<input type="text" name="Nombre" required="required" autocomplete="off" />
										<span class="text">
											<FontAwesomeIcon icon={faUser} /> Nombre
										</span>
										<span class="line"></span>
									</div>
								</div>
								<div class="col">
									<div class="inputBox">
										<input type="text" name="Nombre" required="required" autocomplete="off" />
										<span class="text">
											<FontAwesomeIcon icon={faUser} /> Apellido
										</span>
										<span class="line"></span>
									</div>
								</div>
								<div class="col">
									<div class="inputBox">
										<input type="text" name="Nombre" required="required" autocomplete="off" />
										<span class="text">
											<FontAwesomeIcon icon={faUser} /> Nombre de usuario
										</span>
										<span class="line"></span>
									</div>
								</div>
								<div class="col">
									<div class="inputBox">
										<input type="text" name="Nombre" required="required" autocomplete="off" />
										<span class="text">
											<FontAwesomeIcon icon={faEnvelope} /> E-mail
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
								</div>
								<div class="col">
									<div class="inputBox">
										<input type="password" name="password" required="required" autocomplete="off" />
										<span class="text">
											<FontAwesomeIcon icon={faLock} /> Confirmar Contraseña</span>
										<span class="line"></span>
									</div>
									<p className="register"><Link to='/login'>¿Ya tienes cuenta?</Link></p>
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
			</div>
		</>
	)
}

export default Register