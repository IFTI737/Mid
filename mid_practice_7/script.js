const unitPrice=1000;
let display = document.getElementById("screen")
let quantity=document.getElementById("quantity")
let totalPrice=0;

quantity.addEventListener("input",function(){
    if (quantity.value<0){
        alert("Quantity cannot be negative");
        quantity.value=0;
    }

    totalPrice=unitPrice*quantity.value;

    display.value=totalPrice;

    if (totalPrice>1000){
        alert("You are eligible for a discount of");    
    }
})