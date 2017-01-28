"use strict"

var donate = (function(originalDonate){

	var donors = [];

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