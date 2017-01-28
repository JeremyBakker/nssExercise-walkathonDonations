var donate = (function(originalDonate){

	var donors = [
		{	firstName: "Jill",
			lastName: "Smith", 
			streetAddress: "5200 Nevada Avenue",
			city: "Nashville",
			state: "Tennessee",
			zipCode: 37209,
			pledge: 50
		},
		{	firstName: "Eve",
			lastName: "Jackson",
			streetAddress: "4603 Dakota Avenue",
			city: "Nashville",
			state: "Tennessee",
			zipCode: 37209,
			pledge: 100
		},
	];

	return {
		getDonors: function(){
			return donors;
		},
		addDonors: function(donorArray){
			donors.push(donorArray);
			console.log(donors);
		}
	}

	return originalDonate;

})(donate || {});