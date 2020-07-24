# Techstars Front-End Challenge

For this challenge, we want you to create a sign-up form for an event Techstars is promoting. The event can be named whatever you like, feel free to be creative. You will be creating a form, including input validations, that will take the user's information. Check below for the full requirements. 

## Requirements

- To complete the challenge, please create a single page with a form containing the following fields:

  - First Name
  - Last Name
  - Email
  - Company they represent
  - A dropdown requesting their role, -- "Investor", "Mentor", "Founder", "Network Member" 

- The form should be beautiful, responsive on all screen sizes, and checked for invalid input
- Your design should conform to our brand standards, which you can [view here](https://brandguide.brandfolder.com/techstars/introduction)
- You will need to modify the `validateForm()` helper function to check your inputs. Please perform all validations in the front-end only. There's no need to create a back-end service, everything you need to do can be done in this app
- Bonus points for interactive UI that gives user feedback based on form inputs and submission responses 
- Bonus points for tested code. To help with this, both `jest` and `@testing-library/react` are included

### Creating Your Submission

Please fork this repo, then begin working on your application. Make sure to create clear commits and track your work as you go. When you are ready to submit your work, please create a new pull request targeting this repo. 

### Tools Available

The challenge has been created using [Create React App](https://github.com/facebook/create-react-app). Out of the box, we have enabled `.css` styling. If you'd like to use `.scss` or JSS, please consult the CRA docs. You are more than welcome to take this approach, and we'd love to see how you implement it. 

**Provided Helper Functions**:
In `./src/helperFunctions` you'll find two functions that have been created for you. They are:

- `validateForm()`: Use this function to validate your fields. It has been imported automatically by `App.js`
- `submitForm()`:  You should not modify this function. This is the mock you should use to test your form submission. Unlike a real request, you do not need to worry about formatting the body of your input. It accepts a single object containing your fields, which it will return alongside a status `200`.

## Running the Code: 

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds a production-ready version of the application


### `Attributes for icons`
Mentor by irene hoffman from the Noun Project
Invest by Alice Design from the Noun Project
Idea Founder by Gan Khoon Lay from the Noun Project
Contact by Alice Design from the Noun Project
