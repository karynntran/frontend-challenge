import React from 'react';
import logo from '../assets/techstars-logo-white.svg';
import '../styles/info.scss';

function Info() {
	return (
		<section id="Info">
			<div className="Info-content">
				<h1>Pa<span className="copy-orange">(i)</span>rent Programming</h1>
				<p className="Info-question"><span className="copy-yellow">Q.</span> Why did the child component have such great self-esteem?</p>
				<p className="Info-answer"><span className="copy-yellow">A.</span> Because its parent kept giving it props!</p>
				<p className="Info-details">If you like dad/mom jokes like this one, you'll have a blast at our upcoming event, Pa(i)rent Programming. Parents and parent-figures in tech and their kids are invited to come together and go through some fun paired coding exercises and enjoy some fun swag and refreshments.</p>

				<p className="Info-instructions">Sign up below below to RSVP!</p>

			</div>
		</section>
	);
}

export default Info;
