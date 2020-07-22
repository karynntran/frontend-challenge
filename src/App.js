import React from 'react';
import SignUpForm from './components/SignUpForm';
import { validateForm, submitForm } from './helperFunctions';
// import logo from './assets/techstars-logo-white.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}

export default App;
