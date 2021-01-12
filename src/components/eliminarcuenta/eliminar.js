import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import Swal from 'sweetalert2'
import './eliminar.css'

function Eliminarcuenta() {
	const eliminar = () => {
		var contra=document.querySelector("#contraseña");
		var contrados=document.querySelector("#confirmar");
		var mal=document.getElementById("mal");
			if(contrados.value.length == 0 || contra.value.length == 0 ){
				mal.innerHTML= "falta completar"
				return;
			}
			
			if(contra.value != contrados.value ){
				mal.innerHTML= "contraseñas diferentes";
				return;
			}	
			
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
				<form>
					<br></br>
					<input type="password" placeholder="cotraseña" id="contraseña"></input>
					<br></br>	
					<input type="password" placeholder="repetir contraseña" id="confirmar"></input>
				</form>
			</div>
			<div className="malp"   id="mal">

			</div>
			<br></br>
			<button onClick={eliminar}>Eliminar</button>
			<div >
				<img className="imgeli" src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" alt="usuario" />
			</div>
		</>

	)
}

export default Eliminarcuenta