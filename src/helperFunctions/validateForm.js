// use this function to validate your form

export default (formValues) => {
	let errors = {};
	for (let value in formValues) {
		if (formValues[value] == "") {
			switch (value) {
				case 'firstname':
					errors[value] = "First name is required."
					break;
				case 'lastname':
					errors[value] = "Last name is required."
					break;
				case 'email':
					errors[value] = "Email name is required."
					break;
				case 'company':
					errors[value] = "Company name is required."
					break;
				case 'role':
					errors[value] = "Please select your role."
					break;
			}
		}
	}

	console.log(errors)
	if (Object.keys(errors).length === 0) {
		return 'valid';
	}

	return errors;
}
