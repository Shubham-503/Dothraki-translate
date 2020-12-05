let txtarea = document.querySelector("#textarea");
let btnTranslate = document.querySelector("#btn-translate");
let dothrakiText = document.querySelector("#dothraki-text");

const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 500);
}

function fetchUrl(text) {
  return "https://api.funtranslations.com/translate/dothraki.json?text=" + text;
}

function errorHandler(error) {
  console.log("Error Occured", error);
  alert("Something went wrong", error);
}

function handleTranslate() {
  //   console.log("translated");
  text = txtarea.value;
  showSpinner();
  fetch(fetchUrl(text))
    .then((response) => response.json())
    .then((json) => (dothrakiText.innerText = json.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", handleTranslate);
