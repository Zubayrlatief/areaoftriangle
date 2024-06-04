document.getElementById("calculateBtn").addEventListener("click", function() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!isNaN(base) && !isNaN(height)) {
        var area = 0.5 * base * height;
        document.getElementById("result").innerHTML = "The area of the triangle is: " + area.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers for base and height.";
    }
});