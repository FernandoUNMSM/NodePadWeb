import React, { useRef } from 'react'
import './eliminar.css'
import Swal from 'sweetalert2'
import { Link, useLocation } from 'wouter'

import validPassword from './../../services/validPassword'
import deleteUser from './../../services/deleteUser'
import updatePassword from './../../services/updatePassword'

function Eliminarcuenta() {
	const [location, setLocation] = useLocation(); //eslint-disable-line

	var mal = useRef(null);
	var mal2 = useRef(null);
	const contra = useRef(null);

	const eliminar = () => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		})
		swalWithBootstrapButtons.fire({
			title: 'Opciones de Cuenta',
			text: "Usted va a eliminar su cuenta",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar',
			footer: '<span class="rojo">Su cuenta se eliminara permanente </span>',
			reverseButtons: true,
			backdrop: true,
			timer: 5000,
			timerProgressBar: true,
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'Cerrar alerta'
		}).then((result) => {
			if (result.isConfirmed) {
				swalWithBootstrapButtons.fire(
					'Eliminado',
					'Se elimino exitoxamente',
					'success'
				).then(() => {
					deleteUser()
						.then((res) => { console.log(res); })
					localStorage.setItem("usuarioActual", "{}")
					setLocation("/")
				})
			} else if (
				result.dismiss === Swal.DismissReason.cancel
			) {
				swalWithBootstrapButtons.fire(
					'Cancelado',
					'Se cancelo el proceso',
					'error'
				)
			}
		})
	}

	const enviarPassword = async (evt) => {
		evt.preventDefault()
		let nyan = await valid(evt)
		if(nyan.value){
			eliminar()
		}else{
			mal.current.innerHTML = `<p>${nyan.result}</p>`
		}
	}

	const changePassword = async (evt) => {
		evt.preventDefault();
		let nyan2 = await valid(evt)
		if(nyan2.value){
			updatear(evt)
		}else{
			mal2.current.innerHTML = `<p>${nyan2.result}</p>`
		}
	}

	const valid = async (evt) => {
		let katia = {}
		const formData = new FormData(evt.target);
		await validPassword({ formData })
			.then(result => {
				if (result === "password correcto") {
					katia =  {value: true}
				} else {
					katia =  {value: false, result:result}
				}
			})
		return katia
	}

	const updatear = (evt) => {
		const formData = new FormData(evt.target);
		updatePassword({formData})
			.then(res => mal2.current.innerHTML = `<p>Password cambiado</p>`)
	}

	return (
		<>
			<div className="formatoContainer">
				<div className="containerRes">
					<div className="formatoTitulo">
						<h1>Preferencias de Cuenta</h1>
					</div>
					<div className="formatoItem">
						<p>Eliminacion de cuenta</p>
						<p className="formatoP">Escribe tu contraseña para poder acceder a la opcion</p>
						<form encType="multipart/form-data" onSubmit={enviarPassword} className="formDelete">
							<input type="password" name="password" placeholder="Contraseña" id="contraseña" defaultValue=""></input>
							<button className="btn-delete">Eliminar</button>
						</form>
						<div className="malp" ref={mal}></div>
					</div>
					<div className="formatoItem">
						<p>Cambiar contraseña</p>
						<p className="formatoP">Escribe tu contraseña para poder acceder a la opcion</p>
						<form encType="multipart/form-data" onSubmit={changePassword} className="formDelete">
							<div className="changeContainer">
								<input type="password" name="password" placeholder="Contraseña" id="newcontraseña" defaultValue=""></input>
								<div className="malp" ref={mal2}></div>
								<input type="password" name="newpassword" placeholder="Nueva contraseña" id="newcontraseña" defaultValue=""></input>
							</div>
							<button className="btn-delete">Cambiar</button>
						</form>
					</div>
				</div>
			</div>
		</>

	)
}

export default Eliminarcuenta