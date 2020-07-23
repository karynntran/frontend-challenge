import React from 'react';
import { validateForm, submitForm } from '../helperFunctions';
import { Roles } from './Roles';

import '../styles/signupform.scss';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	formValues: {
	    	firstname: "",
	    	lastname: "",
	    	email: "",
	    	company: "",
	    	role: ""
    	},
    	errors: {
    		firstname: "",
	    	lastname: "",
	    	email: "",
	    	company: "",
	    	role: ""
    	},
    	submitted: false
    };
  }

  handleChange = e => {
  	let { name, value } = e.target;
	this.setState(prevState => ({
	    formValues: {
	        ...prevState.formValues,
	        [name]: value
	    }
	}))
  }

  handleErrors = (errorType) => {
	if (this.state.errors[errorType]) {
		return <span className="SignUpForm-error">{this.state.errors[errorType]}</span>
	}
  }

  handleSubmit = e => {
    e.preventDefault();
  	let errorsList = validateForm(this.state.formValues);

  	if (errorsList === 'valid') {
  		this.renderSuccessfulSubmission(this.state.formValues);
  		this.setState({
  			submitted: true
  		})
		submitForm(this.state.formValues)
  	} else {
	   	this.setState({
		    errors: errorsList
		})
  	}
  }

  onFocus = e => {
  	let {name} = e.target;
	this.setState(prevState => ({
	    errors: {
	        ...prevState.errors,
	        [name]: ''
	    }
	}))
  }

  setRole = (role) => {
	this.setState(prevState => ({
	    formValues: {
	        ...prevState.formValues,
	        role: role
	    },
	   	errors: {
	        ...prevState.errors,
	        role: ''
	    } 
	}))
  }

  renderSuccessfulSubmission = ({firstname}) => {
  	return (
  		<div className="SignUpForm-form-submit">{`Thanks ${firstname}! You've successfully RSVPed. Stay tuned for more details!`}</div>
  	)
  }

  renderInput = (labelName, nameAttr, type) => {
	return (
		<label>
			{labelName}
			<input onFocus={this.onFocus} name={nameAttr} type={type} value={this.state.value} onChange={this.handleChange} />
			{this.handleErrors(nameAttr)}
		</label>
	) 	
  }


  renderSignUpForm = () => {
  	return (
    	<form onSubmit={this.handleSubmit} data-testid="form">
	    	<div className="SignUpForm-input-group">
		    	{this.renderInput("First Name", "firstname", "text")}
		    	{this.renderInput("Last Name", "lastname", "text")}
	    	</div>
	    	{this.renderInput("Email", "email", "email")}
	    	{this.renderInput("Company", "company", "text")}
	    	<label>
		    	Your Role:
		    	<Roles setRole={this.setRole}/>
	    		{this.handleErrors("role")}
	    	</label>
	    	<input id="submit" type="submit" value="Sign Up!" />
    	</form>
  	)
  }


  render() {
  	if (this.state.submitted) {
  		return (
  			<section id="SignUpForm">
				{this.renderSuccessfulSubmission(this.state.formValues)}
			</section>)
  	} else {
  		return  (
  			<section id="SignUpForm">
  				{this.renderSignUpForm()}
  			</section>
  		) 			
  	}
  	}
}

export default SignUpForm;