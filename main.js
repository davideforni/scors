document.addEventListener("DOMContentLoaded", function() {
    // Get references to input elements
    var carbonInput = document.getElementById("carbonInput");
    var areaInput = document.getElementById("areaInput");
    var calculateButton = document.getElementById("calculateButton");
    var resultDiv = document.getElementById("result");

    // Add click event listener to the Calculate button
    calculateButton.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from the input fields
        var carbonValue = parseFloat(carbonInput.value);
        var areaValue = parseFloat(areaInput.value);

        // Check if both fields are filled
        if (!isNaN(carbonValue) && !isNaN(areaValue)) {
            // Perform the calculation and round up the result
            var result = Math.ceil(carbonValue / areaValue);

            // Define quality class based on result
            var qualityClass;
            if (result < 50) {
                qualityClass = "A<sup>++</sup>";
            } else if (result < 100) {
                qualityClass = "A<sup>+</sup>";
            } else if (result < 150) {
                qualityClass = "A";
            } else if (result < 200) {
                qualityClass = "B";
            } else if (result < 250) {
                qualityClass = "C";
            } else if (result < 300) {
                qualityClass = "D";
            } else if (result < 350) {
                qualityClass = "E";
            } else if (result < 400) {
                qualityClass = "F";
            } else {
                qualityClass = "G";
            }

            // Display the result in the HTML
            resultDiv.innerHTML = "Carbon Intensity: " + "<b>" + result + "</b>" + " kgCO<sub>2</sub>e/m<sup>2</sup> &rarr; Class " + "<b>" + qualityClass + "</b>";
        } else {
            // Display an error message if either field is empty or contains invalid input
            resultDiv.innerHTML = "<b>ERROR</b> - Fill both input fields with valid numbers!";
        }
    });
});
