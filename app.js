var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! Try after sometime")
}

function clickHandler() {
    // Input
    var inputText = txtInput.value;
    //  Processing - calling server
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        // Output
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)