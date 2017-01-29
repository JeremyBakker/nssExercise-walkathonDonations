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
var displayTableBody = document.getElementById("displayTableBody");
var donationForm = document.getElementById("donationForm");
var i = 0;


//When the user presses the submit button, check for valid 
// entries in all fields
donateButton.addEventListener("click", function(){
	var donorObject = {};
	console.log("Donate!");
	if (firstName.value === "" || lastName.value === "" || streetAddress.value === "" || city.value === "" || state.value === "default") {
		alert("Please complete all fields.");
		return;
	}
	if (oneTime.checked) {
		var donationCycle = "One Time";
	} else if (perLap.checked) {
		var donationCycle = "Per Lap"
	} else {
		alert("Please complete all fields");
		return;
	}
	donorObject.firstName = firstName.value;
	donorObject.lastName = lastName.value;
	donorObject.streetAddress = streetAddress.value;
	donorObject.city = city.value;
	donorObject.state = state.value;
	donorObject.zipCode = zipCode.value;
	donorObject.donationAmount = donationAmount.value;
	donorObject.donationCycle = donationCycle;
	Donate.addDonors(donorObject);
	displayTableBody.innerHTML += 
		`<tr>
			<td>${Donate.getDonors()[i].firstName}</td>
			<td>${Donate.getDonors()[i].lastName}</td>
			<td>${Donate.getDonors()[i].streetAddress}</td>
			<td>${Donate.getDonors()[i].city}</td>
			<td>${Donate.getDonors()[i].state}</td>
			<td>${Donate.getDonors()[i].zipCode}</td>
			<td>${Donate.getDonors()[i].donationAmount}</td>
			<td>${Donate.getDonors()[i].donationCycle}`;
	i++;
});

cancelButton.addEventListener("click", function(){
	donationForm.reset();
});