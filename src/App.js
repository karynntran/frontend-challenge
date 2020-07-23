import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import SignUpForm from './components/SignUpForm';
import { validateForm, submitForm } from './helperFunctions';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Info />
			<SignUpForm />
		</div>
	);
}

export default App;
