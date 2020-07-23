import React from 'react';
import { validateForm, submitForm } from '../helperFunctions';
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
    	}
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
		return <span className="error">{this.state.errors[errorType]}</span>
	}
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.formValues)
  	let errorsList = validateForm(this.state.formValues);
   	this.setState({
	    errors: errorsList
	})
  }

  onFocus = e => {
  	console.log('hit')
  	let {name} = e.target;
	this.setState(prevState => ({
	    errors: {
	        ...prevState.errors,
	        [name]: ''
	    }
	}))
  }

  render() {
    return (
    	<div id="signup-form">
    	<form onSubmit={this.handleSubmit}>
	    	<div className="input-group-name">
		    	<label>
		    		First Name:
		    		<input onFocus={this.onFocus} name="firstname" type="text" value={this.state.value} onChange={this.handleChange} />
		    		{this.handleErrors("firstname")}
		    	</label>
		    	<label>
			    	Last Name:
			    	<input onFocus={this.onFocus} name="lastname" type="text" value={this.state.value} onChange={this.handleChange} />
		    		{this.handleErrors("lastname")}
		    	</label>
	    	</div>
	    	<label>
		    	Email:
		    	<input onFocus={this.onFocus} name="email" type="email" value={this.state.value} onChange={this.handleChange} />
	    		{this.handleErrors("email")}

	    	</label>
	    	<label>
		    	Company:
		    	<input onFocus={this.onFocus} name="company" type="text" value={this.state.value} onChange={this.handleChange} />
	    		{this.handleErrors("email")}
	    	</label>
	    	<label>
		    	Your Role:
		    	<select onFocus={this.onFocus} name="role" onChange={this.handleChange}>
		    		<option value="">Select your role</option>    
			    	<option value="investor">Investor</option>
			    	<option value="mentor">Mentor</option>
			    	<option value="founder">Founder</option>
			    	<option value="member">Network Member</option>
	    		</select>
	    		{this.handleErrors("role")}
	    	</label>
	    	<input type="submit" value="Submit" />
    	</form>


    	</div>
    );
  }
}

export default SignUpForm;