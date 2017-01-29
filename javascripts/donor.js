"use strict"

var Donate = (function(originalDonate){

	var donors = [];

	return {
		getDonors: function(){
			return donors;
		},
		addDonors: function(donorObject){
			donors.push(donorObject);
			console.log(donors);
		}
	}

	return originalDonate;

})(Donate || {});