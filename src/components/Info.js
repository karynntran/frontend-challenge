import React from 'react';
import logo from '../assets/techstars-logo-white.svg';
import '../styles/info.scss';

const Info = () => {
	return (
		<section id="Info">
			<div className="Info-content">
				<h1>Pa<span className="copy-green">(i)</span>rent Programming</h1>
				<div className="Info-question">
					<div className="Info-qa-symbol">Q </div> 
					<div className="Info-question-answer">Why did the child component have such great self-esteem?</div>
				</div>
				<div className="Info-answer">
					<div className="Info-qa-symbol">A </div>
					<div className="Info-question-answer">Because its parent kept giving it props!</div>
				</div>
				<p className="Info-details">If you like dad/mom jokes like this one, you'll have a blast at our upcoming event, <b>Pa(i)rent Programming</b>. Parents and parent-figures in tech and their kids are invited to come together and go through some fun paired coding exercises and enjoy some fun swag and refreshments.</p>

				<p className="Info-instructions">Sign up below below to RSVP!</p>

			</div>
		</section>
	);
}

export default Info;
