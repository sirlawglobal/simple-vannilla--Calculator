
//selection of all the buttons
const buttonsEl = document.querySelectorAll("button");

//Handling the input from from the keyboard
const inputFieldEl = document.getElementById("result");

//looping through the buttons , then add eventlistener to each button to listen to "click",
// once clicked , the callback function is fired .
//the callback function contains if statement to check for which button is click
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    if (buttonValue === "C") {
      clearResult();
    } 
    
    else if (buttonValue === "=") {
      calculateResult();
    }
    
    else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}



function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}

 
