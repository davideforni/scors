document.addEventListener("DOMContentLoaded", function() {
    // Get references to input elements
    var carbonInput = document.getElementById("carbonInput");
    var areaInput = document.getElementById("areaInput");
    var calculateButton = document.getElementById("calculateButton");
    var resultDiv = document.getElementById("result");
    var qualityClassOutput = document.querySelector(".quality-class .classX");
	var resultOutput = document.getElementById("resultOutput");

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
            resultDiv.innerHTML = "Carbon Intensity: " + "<b>" + result + " kgCO<sub>2</sub>e/m<sup>2</sup></b> &rarr; Class " + "<b>" + qualityClass + "</b>";

			// Update the bottom position based on qualityClass
			var qualityClassBox = document.querySelector(".quality-class .classX");
            switch (qualityClass) {
                case "A<sup>++</sup>":
                    qualityClassBox.style.top = "-360px";
					resultOutput.style.bottom = "355px";
                    break;
                case "A<sup>+</sup>":
                    qualityClassBox.style.top = "-320px";
					resultOutput.style.bottom = "315px";
                    break;
                case "A":
                    qualityClassBox.style.top = "-280px";
					resultOutput.style.bottom = "275px";
                    break;
                case "B":
                    qualityClassBox.style.top = "-240px";
					resultOutput.style.bottom = "235px";
                    break;
                case "C":
                    qualityClassBox.style.top = "-200px";
                    resultOutput.style.bottom = "195px";
					break;
                case "D":
                    qualityClassBox.style.top = "-160px";
					resultOutput.style.bottom = "155px";
                    break;
                case "E":
                    qualityClassBox.style.top = "-120px";
					resultOutput.style.bottom = "115px";
                    break;
                case "F":
                    qualityClassBox.style.top = "-80px";
					resultOutput.style.bottom = "75px";
                    break;
                case "G":
                    qualityClassBox.style.top = "-40px";
					resultOutput.style.bottom = "35px";
                    break;
            }

            // Display the quality class in the separate output
            qualityClassOutput.innerHTML = qualityClass;
			
			// Show the result output
            resultOutput.innerHTML = result + " kgCO<sub>2</sub>e/m<sup>2</sup>"; // Set the content of the resultOutput element with the result value
            resultOutput.style.display = "block"; // Make the result output visible
        } else {
            // Display an error message if either field is empty or contains invalid input
            resultDiv.innerHTML = "<b>WARNING!</b> Fill both input fields with valid numbers!";
            // Clear the quality class output if there's an error
            qualityClassOutput.innerHTML = "";
			// Hide the result output if there's an error
            resultOutput.style.display = "none";
        }
    });
});
