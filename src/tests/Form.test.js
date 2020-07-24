import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUpForm from '../components/SignUpForm';
import { submitForm } from '../helperFunctions'

describe('Signup form submissions', () => {
  it('should render validation for missing input', async () => {
	const { debug, getByLabelText, getByText } = render(<SignUpForm />);
	const firstNameInput = getByLabelText(/First Name/i);
	fireEvent.change(firstNameInput, { target: { value: "" } });
	fireEvent.click(getByText(/Sign Up!/i));
	const firstNameValidation = getByText(/First name is required/);
	expect(firstNameValidation).toBeInTheDocument();
  })


   it('should render successful submission', async () => {
	const { debug, getByLabelText, getByText } = render(<SignUpForm />);
	const firstNameInput = getByLabelText(/First Name/i);
	const lastNameInput = getByLabelText(/Last Name/i);
	const emailNameInput = getByLabelText(/Email/i);
	const companyInput = getByLabelText(/Company/i);
	fireEvent.change(firstNameInput, { target: { value: "TestFirst" } });
	fireEvent.change(lastNameInput, { target: { value: "TestLast" } });
	fireEvent.change(emailNameInput, { target: { value: "test@test.com" } });
	fireEvent.change(companyInput, { target: { value: "TestCompany" } });
	fireEvent.click(getByText("mentor"));
	fireEvent.click(getByText(/Sign Up!/i));
	const submissionText = getByText(/Thanks TestFirst! You've successfully RSVPed/);

	expect(submissionText).toBeInTheDocument();
  })
})
