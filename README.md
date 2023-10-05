# Web-Design-Assignment-4
Feedback Form with Dynamic Elements
This project consists of an HTML form designed for collecting user feedback and a JavaScript script to handle dynamic form elements and insert user data into a table. Below is an overview of the key components and functionality of this project:

HTML Form (index.html)
The HTML form is designed to collect feedback from users.
It includes fields for personal information such as title, first name, last name, email, phone number, address, weather preference, favorite places, how the user heard about the service, and comments.
The form also contains dynamic elements:
A dropdown menu (selectOption) allows users to select their weather preference, which dynamically generates checkboxes and a text input field based on the selected option.
Checkboxes (enableCheckbox1 and enableCheckbox2) determine which favorite places are selected.
A text input field (textField) appears when certain checkboxes are selected.
Input validation is implemented for several fields to ensure data correctness.
Upon submission of the form, the JavaScript code collects the user's data and inserts it into a table.
JavaScript Script (script.js)
The JavaScript script provides dynamic functionality to the form.
It handles the visibility of checkboxes and text input fields based on the selected weather preference.
Checkbox state changes trigger the display of the associated text input field.
Input validation functions ensure data entered in various fields meets specified criteria (e.g., length, format).
Data collected from the form is organized into a JavaScript object and inserted as a new row in an HTML table.
The getHowDidYouHear function processes the checkboxes for how the user heard about the service and formats them into a comma-separated list.
A reset button allows users to clear the form fields and start over.
How to Use
Open the index.html file in a web browser.
Fill out the feedback form with your information and preferences.
Select your weather preference to see dynamic elements appear.
Check the checkboxes to indicate your favorite places, which may reveal text input fields.
Submit the form to insert your feedback into the table below the form.
You can reset the form using the "Reset" button to clear all fields.
