import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import Swal from 'sweetalert2'
import './eliminar.css'
function Eliminar() {
    Swal.fire({
        title: "Opciones de Cuenta",
        text: "Usted va a eliminar su cuenta",
        icon: 'warning',
		confirmButtonText:'Eliminar'
		footer: '<span className="rojo">Su cuenta se eliminara permanente </span>',
	// width:
	// padding:
	// background:
	// grow:
		backdrop: true,
		timer: 5000,
		timerProgressBar: true,
	// toast:
	// position:
		allowOutsideClick:false,
		allowEscapeKey:false,
		allowEnterKey:false,
		stopKeydownPropagation:false,

		input: 'text',
		inputPlaceholder: 'Connfirme contraseña',
		// inputValue:
		// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

		showConfirmButton: true,
		confirmButtonColor: 'FF2D00',
		confirmButtonAriaLabel:'eliminar',

		showCancelButton: true,
		cancelButtonText: 'Cancelar',
		// cancelButtonColor:
		cancelButtonAriaLabel: 'Cancelar',
	
		buttonsStyling: true,
		showCloseButton: true, 
		closeButtonAriaLabel: 'Cerrar alerta',


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:

    });

    
    return (
        <>





        </>

    )
    
}
  export default Eliminarcuenta