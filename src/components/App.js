import React, { useState, useEffect } from 'react';
import Header from './Header';
import Info from './Info';
import SignUpForm from './SignUpForm';
import { validateForm, submitForm } from '../helperFunctions';
import '../styles/App.scss';

const App = () => {
	const [loaded, setLoaded] = useState('');

	useEffect(() => {
		setLoaded('loaded')
	});

	let className = `App ${loaded}`
	console.log(className)
	return (
		<div className={className}>
			<Header />
			<Info />
			<SignUpForm />
		</div>
	);
}

export default App;
