import React from 'react'
import './selectLayout.css'

function SelectLayout({setLayout, layout}) {
	const cambiar = (layout) => {
		// layout= !layout
		setLayout(layout)
	}
	const layoutVertical = ()=>{
		cambiar('vertical')
	}
	const layoutHorizontal = ()=>{
		cambiar('horizontal')
	}
	const layoutVerticalInverso = ()=>{
		cambiar('verticalInverso')
	}
	const layoutHorizontalInverso = ()=>{
		cambiar('horizontalInverso')
	}
	return (
		<>
			<div className="layoutOptions" title="layout">
				<img src="https://www.flaticon.es/svg/static/icons/svg/43/43801.svg" alt="" onClick={layoutVerticalInverso}/>
				<img src="https://www.flaticon.es/svg/static/icons/svg/43/43420.svg" alt="" onClick={layoutVertical}/>
				<img src="https://www.flaticon.es/svg/static/icons/svg/43/43447.svg" alt="" onClick={layoutHorizontalInverso}/>
				<img src="https://www.flaticon.es/svg/static/icons/svg/43/43374.svg" alt="" onClick={layoutHorizontal}/>
			</div>
		</>
	)
}

export default SelectLayout