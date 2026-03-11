function appendValue(value){

    let display = document.getElementById("display");

    display.value = display.value + value;

}

function calculateResult(){

    let display = document.getElementById("display");

    try{
        display.value = eval(display.value);
    }
    catch{
        alert("Invalid expression");
    }

}

function clearEntry(){

    let display = document.getElementById("display");

    if(display.value.length > 0){
        display.value = display.value.slice(0, -1);
    }

}