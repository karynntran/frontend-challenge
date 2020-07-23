import React from 'react';
import logo from '../assets/techstars-logo-white.svg';
import '../styles/header.scss';

function Header() {
	return (
		<section id="Header">
			<img src={logo} className="Header-logo" alt="logo" />
		</section>
	);
}

export default Header;
