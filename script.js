function handleSelectChange() {
    var selectOption = document.getElementById("selectOption");
    var checkboxContainer = document.getElementById("checkboxContainer");

    // Clear previous checkboxes and text fields
    checkboxContainer.innerHTML = "";

    // Show or hide the checkbox and add corresponding text fields based on the selected option
    if (selectOption.value === "option1") {
        createCheckbox("Veg", "enableCheckbox1", "textField");
        createCheckbox("Non-Veg", "enableCheckbox2", "textField");
        createTextField("textField", "textFieldLabel");

    }
    else if (selectOption.value === "option2") {
        createCheckbox("Tea", "enableCheckbox1", "textField");
        createCheckbox("Coffee", "enableCheckbox2", "textField");
        createTextField("textField", "textFieldLabel");
    }
    else if (selectOption.value === "option3") {
        createCheckbox("IceCream", "enableCheckbox1", "textField");
        createCheckbox("ColdDrink", "enableCheckbox2", "textField");
        createTextField("textField", "textFieldLabel");
    }
}

function createCheckbox(labelText, checkboxId, textFieldId) {
    var checkboxContainer = document.getElementById("checkboxContainer");

    // Create a label for the checkbox
    var label = document.createElement("label");
    label.htmlFor = checkboxId;
    label.appendChild(document.createTextNode(labelText));

    // Create the checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = checkboxId;
    checkbox.id = checkboxId;


    console.log("before toggle")
    checkbox.addEventListener("change",toggleTextField(checkboxId,textFieldId));
    console.log("after toggle")

    // Create a line break
    var lineBreak = document.createElement("br");

    // Append elements to the container
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(lineBreak);
    checkboxContainer.style.display ="";
}

function createTextField(textFieldId, textFieldLabelId){
    var checkboxContainer = document.getElementById("checkboxContainer");
    // Create a label for the text field
    var textFieldLabel = document.createElement("label");
    textFieldLabel.htmlFor = textFieldId;
    textFieldLabel.id = textFieldLabelId;
    textFieldLabel.innerHTML = "Food Preference"
    textFieldLabel.style.display = "none"; // Initially hide the label

    // Create the text field
    var textField = document.createElement("input");
    textField.type = "text";
    textField.name = textFieldId;
    textField.id = textFieldId;
    textField.placeholder = "Text Field";
    textField.style.display = "none"; // Initially hide the text field
    textField.required = true; // Make the text field required

    checkboxContainer.appendChild(textFieldLabel);
    checkboxContainer.appendChild(textField);
    textField.style.display = "inline";
    textFieldLabel.style.display = "inline";
    // Create a line break
    var lineBreak = document.createElement("br");
    checkboxContainer.appendChild(lineBreak);
}

function toggleTextField(checkboxId, textFieldId) {
    var enableCheckbox = document.getElementById(checkboxId);
    var textField = document.getElementById(textFieldId);
    var textFieldLabel = document.getElementById(textFieldId + "Label");

    console.log(enableCheckbox)
    if (enableCheckbox === !null){
        if (enableCheckbox.checked) {
        textField.style.display = "";
        textFieldLabel.style.display = "";
    } else {
        textField.style.display = "none";
        textFieldLabel.style.display = "none";
    }
    }
}

function resetForm() {
    var selectOption = document.getElementById("selectOption");
    selectOption.selectedIndex = 0;

    var checkboxContainer = document.getElementById("checkboxContainer");
    checkboxContainer.innerHTML = "";
    var form = document.querySelector("form");
}

var firstName = document.getElementById("firstName");
firstName.addEventListener("input",function validate(){
    console.log("outside if")
    var divtext = document.getElementById("firstNameStatus");
    if(firstName.value.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
    }
    else if(firstName.value.trim().length === 1  ){
        divtext.innerHTML ="Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
    }
    else{
        divtext.style.display ="none";
    }
})


var lastName = document.getElementById("lastName");
lastName.addEventListener("input",function validate(){
    var divtext = document.getElementById("lastNameStatus");
    if(lastName.value.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(lastName.value.trim().length <= 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

var emailId = document.getElementById("emailId");
emailId.addEventListener("input",function validate(){
    var divtext = document.getElementById("emailIdStatus");
    var regex = /[A-Za-z]+@northeastern\.edu/i;
    if (!regex.test(emailId.value)){
        divtext.innerHTML = "Incorrect Email";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input",function validate(){
    var divtext = document.getElementById("phoneNumberStatus");
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
        divtext.innerHTML = "Invalid Phone Number format (10 digits without hyphens).";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

var streetAddress1 = document.getElementById("streetaddress1");
streetAddress1.addEventListener("input",function validate(){
    var divtext = document.getElementById("streetAddress1Status");
    if(streetAddress1.value.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(streetAddress1.value.trim().length === 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

var city = document.getElementById("city");
city.addEventListener("input",function validate(){
    var divtext = document.getElementById("cityStatus");
    if(city.value.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(city.value.trim().length === 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

var state = document.getElementById("state");
state.addEventListener("input",function validate(){
    var divtext = document.getElementById("stateStatus");
    if(state.value.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(state.value.trim().length === 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input",function validate(){
    var divtext = document.getElementById("zipcodeStatus");
    var zipRegex = /[0-9]+/i;
    if (!zipRegex.test(zipcode.value)) {
        divtext.innerHTML = "Invalid ZipCode format (e.g., xxxxxx).";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

var comments = document.getElementById("comments");
comments.addEventListener("input",function validate(){
    var divtext = document.getElementById("commentsStatus");
    if(comments.value.trim().length > 30  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(comments.value.trim().length < 3  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
    }
})

function insertFormDataIntoTable() {
    console.log("inside insert")
    var formData = {
        "Title": document.querySelector('input[name="title"]:checked').value,
        "First Name": document.getElementById("firstName").value,
        "Last Name": document.getElementById("lastName").value,
        "Email Id": document.getElementById("emailId").value,
        "Phone Number": document.getElementById("phoneNumber").value,
        "Street Address 1": document.getElementById("streetaddress1").value,
        "Street Address 2": document.getElementById("streetaddress2").value,
        "City": document.getElementById("city").value,
        "State": document.getElementById("state").value,
        "ZipCode": document.getElementById("zipcode").value,
        "Weather Preference": document.getElementById("selectOption").value,
        "Favorite Places": document.getElementById("textField").value,
        "How did you hear": getHowDidYouHear(),
        "Comments": document.getElementById("comments").value
    };

    // Create a new row in the table and populate it with form data
    var table = document.getElementById("formDataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    for (var key in formData) {
        if (formData.hasOwnProperty(key)) {
            var cell = newRow.insertCell();
            cell.appendChild(document.createTextNode(formData[key]));
        }
    }
    console.log("after insert")
}

function getHowDidYouHear() {
    var sources = document.querySelectorAll('input[name="source"]:checked');
    var sourceValues = [];

    for (var i = 0; i < sources.length; i++) {
        sourceValues.push(sources[i].value);
    }

    return sourceValues.join(", ");
}