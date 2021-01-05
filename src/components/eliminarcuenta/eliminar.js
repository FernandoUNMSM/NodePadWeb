import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import Swal from 'sweetalert2'
import './eliminar.css'

function Eliminarcuenta() {

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
			footer: '<span className="rojo">Su cuenta se eliminara permanente </span>',
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
				)
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

	return (
		<>
			<h1>Opciones de Cuenta</h1>
			<h2>Eliminacion de cuenta</h2>
			<div>
				<h3>Confirmar contraseña</h3>
				<input type="password"></input>
			</div>

			<button onClick={eliminar}>Eliminar</button>
		</>

	)
}

export default Eliminarcuenta