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

var donorArray = [
	{	firstName: "Jeremy",
		lastName: "Bakker", 
		streetAddress: "4908 Nebraska Avenue",
		city: "Nashville",
		state: "Tennessee",
		zipCode: 37209,
		pledge: 75
	}
];

donate.addDonors(donorArray);

// You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.