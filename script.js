function factorial() {
    let getInput = document.querySelector("input");
    let getfactorialOutput = document.getElementsByClassName("factorialOutput")[0];
    let getWorkShown = document.getElementsByClassName("workShown")[0];
    let getValue = getInput.value;
    let castInput = parseInt(getInput.value.trim());
    let entries = "";

    if (!getValue) {
        getfactorialOutput.innerHTML = "Please enter a number";
        getWorkShown.innerHTML = null;
    } else {
        let total = 1;
        for (let i = castInput; i > 0; i--) {
            total = total * i;
            if (i > 1) {
                entries += i + " • ";
            }
            console.log(i);
        }
        getfactorialOutput.innerHTML = getInput.value + "!" + " = " + total;
        getWorkShown.innerHTML = "<i>" + entries + " 1" + " = " + total + "</i>";
    }
}

let getCalculateFactorialButton = document.getElementsByClassName("calculateFactorial")[0];
getCalculateFactorialButton.addEventListener("click", calculateFactorial);
let getfactorialOutput = document.getElementsByClassName("factorialOutput")[0];
let getWorkShown = document.getElementsByClassName("workShown")[0];


function calculateFactorial(getInputValue) {
    getInputValue = parseInt(document.querySelector("input").value);
    let entries = "";
    if (getInputValue == 0) {
        getfactorialOutput.innerHTML = "1";
    } else if (!getInputValue) {
        getfactorialOutput.innerHTML = "Please enter a number";
    } else {
        getfactorialOutput.innerHTML = "!" + getInputValue + " = " + calculateFact(getInputValue);
    }
    for (let i = getInputValue; i > 0; i--) {
        // console.log(i);
        if (i > 1) {
            entries += i + " • ";
        }
        getWorkShown.innerHTML = "<i>" + entries + " 1 " + " = " + calculateFact(getInputValue) + "</i>";

    }
}

let calculateFact = function(x) {
    if (x == 0) {
        return 1;
    } else {
        return x *= calculateFact(x - 1);
    }
}