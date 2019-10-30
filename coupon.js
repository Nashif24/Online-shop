//this again creates a variable to get the item out of the local storage
var y = parseInt(localStorage.getItem("Amount"));
//this gets the element from the html
var a = document.getElementById("cop1")

//this gets the coupon for the user to use
a.addEventListener("click", function() {
	localStorage.setItem("Amount", y * 0.5);
	alert("You have recieved your discount the total of your items is now R" + y);
});
