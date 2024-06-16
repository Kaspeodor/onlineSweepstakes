const button = document.querySelector(".generateButton")
function generateNumber() {
  const min = Math.ceil(document.querySelector (".inputEntre").value);
  const max = Math.floor(document.querySelector (".inputE").value);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  const displayResult = document.querySelector(".randomResult")
  displayResult.style.visibility = "visible"
  displayResult.innerHTML = result
}

button.addEventListener ('click', generateNumber)