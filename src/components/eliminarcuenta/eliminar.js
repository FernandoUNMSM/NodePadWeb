import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import Swal from 'sweetalert2'
import './eliminar.css'

import validPassword from './../../services/validPassword'
import deleteUser from './../../services/deleteUser'
import { Link, useLocation } from 'wouter'

function Eliminarcuenta() {
	const [location, setLocation] = useLocation(); //eslint-disable-line

	var mal = document.getElementById("mal");
	const eliminar = () => {
	var contra = document.querySelector("#contraseña");
		// var contrados = document.querySelector("#confirmar");
		// if (contrados.value.length == 0 || contra.value.length == 0) {
		// 	mal.innerHTML = "falta completar"
		// 	return;
		// }
		// if (contra.value != contrados.value) {
		// 	mal.innerHTML = "contraseñas diferentes";
		// 	return;
		// }

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
						.then((res) => {console.log(res);})
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

	const enviarPassword = (evt) => {
		evt.preventDefault()
		const formData = new FormData(evt.target);
		validPassword({ formData })
			.then(result => {
				if (result === "password correcto") {
					eliminar()
				} else {
					console.log(result)
					mal.innerHTML = `<p>${result}</p>`
				}
			})
	}

	return (
		<>
			<h1>Opciones de Cuenta</h1>
			<h2>Eliminacion de cuenta</h2>
			<div>
				<form encType="multipart/form-data" onSubmit={enviarPassword}>
					{/* <br></br> */}
					<input type="password" name="password" placeholder="contraseña" id="contraseña"></input>
					<br></br>
					{/* 
					<input type="password" placeholder="repetir contraseña" id="confirmar"></input> */}
					<button>Eliminar</button>
				</form>
			</div>
			<div className="malp" id="mal">

			</div>
			<br></br>
			{/* <div >
				<img className="imgeli" src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" alt="usuario" />
			</div> */}
		</>

	)
}

export default Eliminarcuenta