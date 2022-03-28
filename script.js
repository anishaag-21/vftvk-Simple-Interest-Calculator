var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * year * rate / 100


// function that validates the principal input box
function principal_validation() {
    var alphaExp = /^[a-zA-Z]+$/;
    pr = document.getElementById("principal").value;
    if (pr <= 0 || pr == "" || (alphaExp.test(pr) == true)) {
        alert("Enter a positive number");
        setTimeout("document.getElementById('principal').focus();", 2);
        document.getElementById('principal').value = "";
        document.getElementById("result").innerHTML = "";

        return false;
    }
}


// function that reads the value of the range slider
// and displays it the <span>adjacent to the slider
function range() {
    r = document.getElementById("rate").value;
    document.getElementById('spanRate').innerHTML = r + "%";
}

function compute() {

    // Get principal from principal validation function
    principal_validation();
    principal = pr;

    // Get rate from range function
    range();
    rate = r;

    // Get years from dropdown menu
    var y = document.getElementById("years");
    years = y.options[y.selectedIndex].value;

    // Calculate interest
    interest = principal * rate * years / 100;

    // Logic to convert the 'No of Years' into the actual
    // year in the future.
    const currentYear = new Date().getFullYear();
    finalYear = (parseInt(currentYear) + parseInt(years));


    // Write result message
    var res = "<br>" + "If you deposit " + "<span class='highlight'>" +
        principal + "</span>" + "," + "<br>" + "at an interest rate of " +
        "<span class='highlight'>" + rate + "%" + "</span>" + "." + "<br>" +
        "You will receive an amount of " + "<span class='highlight'>" +
        interest + "</span>" + "," + "<br>" +
        "in the year " + "<span class='highlight'>" + finalYear + "</span>" +
        "." + "<br>";

    result = "";
    result = document.getElementById("result");

    result.innerHTML = res;



}
