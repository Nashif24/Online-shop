//this calls the amount of the item from the catalogue in a variable
var a = parseInt(localStorage.getItem("Amount"));
//this append the total of all the items selected
document.getElementById("itemTotal").append(a);

//this gets the item name from the local storage
var a = JSON.parse(localStorage.getItem("Items"));
//this get the element by the id
var b = document.getElementById("Stuff");

    $( "button" ).click(function() {
  $("#Stuff").prev().remove();
});


//this lets all the amount and the items of the catalogue to be stored in a list
a.forEach(function(z) {
    var c = document.createElement("ul");
    b.appendChild(c);

    var n = document.createElement("li");
    n.innerHTML = z.name + " " +z.price;
    c.appendChild(n);
});







