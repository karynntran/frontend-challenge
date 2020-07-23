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
})
