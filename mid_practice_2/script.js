let input=document.getElementById("uname");

function makeUpper()
{
    input.value=input.value.toUpperCase();
}

input.addEventListener("input",makeUpper);