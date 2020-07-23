import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';



describe('App renders header, info and form', () => {

	test('should render info component', () => {
	  const { getByText } = render(<App />);
	  const infoElement = getByText(/Sign up below below to RSVP!/);
	  expect(infoElement).toBeInTheDocument();
	});

	test('should render form', () => {
	  const { getByText } = render(<App />);
	  const formElement = getByText(/Sign Up!/);
	  expect(formElement).toBeInTheDocument();
	});
})


