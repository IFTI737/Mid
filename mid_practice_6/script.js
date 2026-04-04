let output = document.createElement("div");
document.body.appendChild(output);
let count = 0;
let btn = document.getElementById("changeBackground");
function clickCounter() {
  count++;
}
function changeBackground() {
  count++;

 
    output.innerHTML += "<p>Clicked " + count + "</p>";

    
  if (count === 1) {
    document.body.style.backgroundColor = "lightblue";
  }

  if (count === 2) {
    document.body.style.backgroundColor = "#FFFFE0";
  }
  if (count === 3) {
    document.body.style.backgroundColor = "lavender";
    count = 0;
    output.innerHTML = "";
  }
  
}

btn.addEventListener("click", changeBackground);
