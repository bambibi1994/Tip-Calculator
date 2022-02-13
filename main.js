let billTotal = 0.00;
let guestNumber = 0;
let buttonClicked = 0;
let billTotalR = document.getElementById('billTotalR');
let guestNumberR = document.getElementById('guestNumberR');
let serviceQuality = document.getElementById('serviceQualityR');
let tipAmountR = document.getElementById('tipAmountR');

//Check for which radio button is checked.
function display() {
    let checkRadio = document.querySelector(
        'input[name="serviceQuality"]:checked');

    if (checkRadio != null) {
        this.buttonClicked = checkRadio.value;
    }
    else {
        console.log("nothing selected");
    }
}

function calculatedTip(total, guest, service) {
    this.total = total;
    this.guest = guest;
    this.service = service;
    //calculate by 4% per service star + 1% for each guest.
    return parseFloat(this.total * ((this.service * 0.04) + (guest * 0.01))).toFixed(2);

}

//Loop to make file run in real-time with 1s interval.
setInterval(function () {
    display();
    billTotal = parseFloat(document.getElementById('billTotal').value).toFixed(2);
    guestNumber = document.getElementById('guestNumber').value;
    billTotalR.innerHTML = billTotal;
    guestNumberR.innerHTML = guestNumber;
    serviceQuality.innerHTML = this.buttonClicked;
    tipAmountR.innerHTML = calculatedTip(billTotal, guestNumber, this.buttonClicked);
}, 1000); 
