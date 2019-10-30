var x = parseInt(localStorage.getItem("Amount"));//this gets items amount from the other page

//this creates a function that adds the amount of the drone delivery to the total
let pick = null;
$("#drone").click(function() {
    if (pick != null) {
        if (pick == false) {
            localStorage.setItem("Amount", x += 50);
            alert("The total amount of your order is now R" + x)
            pick = true;
        };
    } else if (pick == null) {
        localStorage.setItem("Amount", x += 70)
        alert("The total amount of your order is now R" + x)
        pick = true;
    };
});
//this creates a function which adds the amount of the truck delivery to the total
$("#truck").click(function() {
    if (pick != null) {
        if (pick == true) {
            localStorage.setItem("Amount", x -= 50);
            alert("The total amount of your order is now R" + x)
            pick = false;
        };
    } else if (pick == null) {
        localStorage.setItem("Amount", x += 60)
        alert("The total amount of your order is now R" + x)
        pick = false;
    };
});

//this is the purchase function which gets all the items of the 
//catalogue and resets it to zero after the purchase button has been pressed
//then creates a reference number for the user
function purchase1() {
    var h = parseInt(localStorage.getItem("Amount"));
    var k = JSON.parse(localStorage.getItem("Items"));

    localStorage.setItem("Amount", 0)
    localStorage.setItem("Items", JSON.stringify([]));

    var l = (Math.random() * 0xFFFFFF << 2).toString(16)
    alert("The reference number for your order is " + l)
}

//this functions hides the elements inside the form
$("#pick1").hide();
$("#pick2").hide();

//these(line 52 to 60) function creates the dropdown for the items in the form when clicked on
$(function(){
    $("#ch1").click(function(){
        $("#pick1").slideToggle(1000)
    })
});

$(function(){
    $("#ch2").click(function(){
        $("#pick2").slideToggle(1000)
    })
});







