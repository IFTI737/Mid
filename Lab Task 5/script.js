function analyzeText() {
  let text = document.getElementById("textInput").value;

  let resultDiv = document.getElementById("result");

  if (text.trim() === "") {
    resultDiv.innerHTML = "Please enter some text.";
    return;
  }

  let charCount = text.length;

  let parts = text.trim().split(" ");
  let words = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] !== "") {
      words.push(parts[i]);
    }
  }

  let wordCount = words.length;

  let reversedText = text.split("").reverse().join("");

  resultDiv.innerHTML =
    "<p>Total Characters: " + charCount + "</p>" +
    "<p>Total Words: " + wordCount + "</p>" +
    "<p>Reversed Text: " + reversedText + "</p>";
}
