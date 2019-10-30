//this creates a constructor for the items in the catalogue
function item(name, priceEle) {
	this.name = name
	this.price = priceEle;
};
//this creates 2 objects using the constructor method, which passes all tyhe values that we want to assign to the properties through the constuctor method as arguments//
let ps4 = new item ("Playstion 4", 6400);
let ps4cont = new item ("Playstion 4 controller", 1000);
let ACodyssey = new item ("Assassin's Creed Odyssey", 1000);
let gamingPC = new item ("Gaming Laptop", 8500);
let tele = new item ("Telescope", 12000);

//this stores the items of the catalogue in the session of the page
sessionStorage.setItem("Catalogue", JSON.stringify([ps4, ps4cont, ACodyssey, gamingPC, tele]));

//this makes the price and items of the catalogue be set in the local storage which means
//that even if the page is closed the items will still be stored
var amount = parseInt(localStorage.getItem("Amount"));
if (!amount) {
	amount = 0;
	var items = [];
	localStorage.setItem("Items", JSON.stringify(items));
} else {
	var items = JSON.parse(localStorage.getItem("Items"));
};

localStorage.setItem("Amount", amount);

if (!items) {
}

//these functions(line 33 to 115) are to create alerts for the user to show how much items are totaling up to
function addtocart1() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[0]];
	} else {
		b.push(a[0]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[0].price);
	alert("The current total of the items is R" + c);
};

function addtocart2() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[1]];
	} else {
		b.push(a[1]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[1].price);
	alert("The current total of the items is R" + c);
};

function addtocart3() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[2]];
	} else {
		b.push(a[2]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[2].price);
	alert("The current total of the items is R" + c);
};

function addtocart4() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[3]];
	} else {
		b.push(a[3]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[3].price);
	alert("The current total of the items is R" + c);
};

function addtocart5() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[4]];
	} else {
		b.push(a[4]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[4].price);
	alert("The current total of the items is R" + c);
};


