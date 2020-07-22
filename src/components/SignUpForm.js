import React from 'react';
import { validateForm, submitForm } from '../helperFunctions';
 
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstname: null,
    	lastname: null,
    	email: null,
    	company: null,
    	role: null
    };
  }

  handleChange = e => {
  	let name = e.target.name;
    this.setState({
    	[name]: e.target.value}
    );
  }

  handleSubmit = e => {
  	validateForm();
    alert('A name was submitted: ' + this.state.name);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input name="firstname" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input name="lastname" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input name="email" type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Company:
          <input name="company" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Your Role:
          <select name="role" onChange={this.handleChange}>
          	<option>Investor</option>
          	<option>Mentor</option>
          	<option>Founder</option>
          	<option>Network Member</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUpForm;