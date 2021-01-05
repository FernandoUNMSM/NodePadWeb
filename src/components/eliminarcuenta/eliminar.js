import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import Swal from 'sweetalert2'
import './eliminar.css'

const Eliminar = () => {
	const swalWithBootstrapButtons = Swal.mixin({ 
		customClass: {
			confirmButton: 'btn btn-success',
			cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	})
	swalWithBootstrapButtons.fire ({
		title: 'Opciones de Cuenta',
  		text: "Usted va a eliminar su cuenta",
  		icon: 'warning',
  		showCancelButton: true,
  		confirmButtonText: 'Eliminar',
		cancelButtonText: 'Cancelar',
		reverseButtons: true,
		footer: '<span class="rojo">Su cuenta se eliminara permanente </span>',
		backdrop: false,
		// timer: 8000,
		// timerProgressBar: true,  
		buttonsStyling: true,
		showCloseButton: true, 
		closeButtonAriaLabel: 'Cerrar alerta'

	}).then((result) => {
		if (result.isConfirmed){
			swalWithBootstrapButtons.fire(
				'Eliminado',
				'Se elimino exitosamente',
				'success'
			)
		} else if (
			result.dismiss === Swal.DismissReason.cancel
		) {
			swalWithBootstrapButtons.fire(
				'Cancelado',
				'Cuenta no eliminada',
				'error'
			)
		}
	})

    return (
        <>
			<h1>Opciones de Cuenta</h1>
			<h2>Eliminacion de cuenta</h2>
			<div>
				<h3>Confirmar contraseña</h3>
				<input type="password"></input>	
			</div>
		
			<input type= "button" onClick={Eliminar} value= "Eliminar" > </input> 
        </>

    )
    
}

export default Eliminar