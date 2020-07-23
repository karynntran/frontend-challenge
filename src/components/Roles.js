import React, { useState } from 'react';
import founder from '../assets/founder.png';
import investor from '../assets/investor.png';
import mentor from '../assets/mentor.png';
import member from '../assets/network.png';
import '../styles/roles.scss';



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
			<li onClick={(e) => setActiveRole("investor")} className={setClass("investor")} id="Role-investor">
				<div>
					<span>Investor</span>
					<img src={investor} alt="investor" />
				</div>
			</li>
			<li onClick={() => setActiveRole("mentor")} className={setClass("mentor")} id="Role-mentor">
				<div>
					<span>Mentor</span>
					<img src={mentor} alt="mentor" />
				</div>
			</li>
			<li onClick={() => setActiveRole("founder")} className={setClass("founder")} id="Role-founder">
				<div>
					<span>Founder</span>
					<img src={founder} alt="founder" />
				</div>
			</li>
			<li onClick={() => setActiveRole("member")} className={setClass("member")} id="Role-member">
				<div>
					<span>Member</span>
					<img src={member} alt="member" />
				</div>
			</li>
		</ul>
	)
}
