import React from 'react'
import './header.css'

import MenuHeader from './../menuHeader/MenuHeader'
import InfoHeader from './../infoHeader/InfoHeader'

function Header() {
	return (
		<>
			<div className="header">
				<MenuHeader />
				<InfoHeader/>
			</div>
		</>
	)
}
export default Header