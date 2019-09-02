import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
	    return(
	   
		<nav className="navigasi">
			<ul className="header">
				<li><Link to='/'>Home</Link> </li>
				<li><Link to='/makanan/'>Makanan</Link> </li>
				<li><Link to='/minuman/'>Minuman</Link> </li>
				<li><Link to='/kontak/'>Kontak</Link> </li>
			</ul>
		</nav>
		
	)
}

export default Navbar