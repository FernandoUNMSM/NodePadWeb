import React from 'react'
import Header from './../../components/header/header'
import InfoHome from './../../components/infoHome/infoHome'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import './home.css'

function Home() {
	return (
		<>
			{/* <div className="homeContainer"> */}
				<PerfectScrollbar>
					<Header />
					<InfoHome />
				 
				</PerfectScrollbar>
			{/* </div> */}
		</>
	)
}
export default Home