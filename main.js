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

            // Display the result in the HTML
            resultDiv.innerHTML = "Carbon Intensity = " + result + " kgCO<sub>2</sub>e/m<sup>2</sup>";
        } else {
            // Display an error message if either field is empty or contains invalid input
            resultDiv.innerHTML = "ERROR - Fill both input fields with valid numbers!";
        }
    });
});
