"use strict"

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var streetAddress = document.getElementById("streetAddress");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zipCode = document.getElementById("zipCode");
var donationAmount = document.getElementById("donationAmount");
var oneTime = document.getElementById("oneTime");
var perLap = document.getElementById("perLap");
var donateButton = document.getElementById("donateButton");
var cancelButton = document.getElementById("cancelButton");
var displayTable = document.getElementById("displayTable");
var donorArray = [
	{	firstName: "default", 
		lastName: "default", 
		streetAddress: "default",
		city: "default",
		state: "default",
		zipCode: "default",
		donationAmount: "default",
		oneTime: "default",
		perLap: "default"
	}
];
var donorCounter = 0;
var donationForm = document.getElementById("donationForm");

//When the user presses the submit button, check for valid 
// entries in all fields
donateButton.addEventListener("click", function(){
	console.log("Donate!");
	if (firstName.value === "" || lastName.value === "" || streetAddress.value === "" || city.value === "" || state.value === "default") {
		alert("Please complete all fields.")
	}
	donorArray[donorCounter]["firstName"] = firstName.value;
	donorArray[donorCounter]["lastName"] = lastName.value;
	donorArray[donorCounter]["streetAddress"] = streetAddress.value;
	donorArray[donorCounter]["city"] = city.value;
	donorArray[donorCounter]["state"] = state.value;
	donorArray[donorCounter]["zipCode"] = zipCode.value;
	donorArray[donorCounter]["donationAmount"] = donationAmount.value;
	donate.addDonors(donorArray[donorCounter]);
	displayTable.innerHTML += 
		`<tr>
			<td>${donate.getDonors()[donorCounter].firstName}</td>
			<td>${donate.getDonors()[donorCounter].lastName}</td>
			<td>${donate.getDonors()[donorCounter].donationAmount}</td>`
	donorCounter++;
});

cancelButton.addEventListener("click", function(){
	donationForm.reset();
});