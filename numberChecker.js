let number = 0;
let result1 = document.getElementById("displayNumber");
let result2 = document.getElementById("displayValue");
//Submit the number
function submitMyNumber() {
    number = document.getElementById("inputNumber1").value;
    //callback Function
    evenFilter(number);
}
//Reset the number
function resetMyNumber() {
    result1.innerHTML = "You Number is: ";
    result2.innerHTML = "It is:"
}

function evenFilter(value) {
    if ((value % 2) == 0) {
        result1.innerHTML = "You Number is: " + value;
        result2.innerHTML = "It is: Even Number"
    } else {
        result1.innerHTML = "You Number is: " + value;
        result2.innerHTML = "It is: Not Even Number"
    }
}