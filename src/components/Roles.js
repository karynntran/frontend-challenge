import React, { useState } from 'react';
import founder from '../assets/founder.png';
import investor from '../assets/investor.png';
import mentor from '../assets/mentor.png';
import member from '../assets/network.png';
import '../styles/roles.scss';

const imageMap = {
	founder: founder,
	investor: investor,
	mentor: mentor,
	member: member
}

const renderRolesList = (roles, setActiveRole, setClass) => {
	return roles.map(role => {
		return (
			<li onClick={(e) => setActiveRole(role)} className={setClass(role)} id={`Role-${role}`}>
				<div>
					<span style={{ textTransform: 'capitalize'}}>{role}</span>
					<img src={imageMap[role]} alt={role} />
				</div>
			</li>
		)
	})
}


export const Roles = ({setRole}) => {
  	const [active, setActive] = useState('');

  	const setActiveRole = (role) => {
  		setActive(role);
  		setRole(role);
  	}

  	const setClass = (role) => {
  		return active == role ? "Role-button active" : "Role-button"
  	}

	return (
		<ul id="Role-buttons">
			{renderRolesList(["investor", "mentor", "founder", "member"], setActiveRole, setClass)}
		</ul>
	)
}
