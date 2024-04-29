function checkTemp() {
    var inputValue = document.getElementById("monthInput").value;
    var number = parseInt(inputValue); 
    var result = number * 9 / 5 + 32;

    if (isNaN(number)) { 
        alert("That's not a number!");
    } else {
        alert(result);
    } 
}