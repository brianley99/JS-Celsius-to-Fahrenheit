// Controller
function handleConversion() {

    // Get input from DOM
    let temperatureDegrees = document.getElementById('temperatureDegrees-input').value;
    let operation = document.getElementById('opertation-input').value;

    // Process inputs
    temperatureDegrees = parseFloat(temperatureDegrees);

    // Validate inputs
    if (Number.isNaN(temperatureDegrees)) {
        // Error message for invalid temperature input
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please enter a valid number for temperature.",
        });
    }

    if (operation != 'toCelsius' && operation != 'toFahrenheit') {
        // Error message for invalid operation
        Swal.fire({
            icon: "error",
            title: "Invalid Operation",
            text: "Please choose 'Celsius' or 'Fahrenheit'.",
        });
    }

    // Perfrom operation
    let convertedTempature = 0.00;

    if (operation == 'toCelsius') {
        convertedTempature = fahrenheitToCelsius(temperatureDegrees);

    } else if (operation == 'toFahrenheit') {
        convertedTempature = celsiusToFahrenheit(temperatureDegrees);
    }

    // Display tempature
    displayTempature(convertedTempature, operation);
}

// Logic
function celsiusToFahrenheit(celsius) {

    /*
        Calculate fahrenheit using the formula:
        °F = (°C × 9/5) + 32
        where °F is Fahrenheit, and °C is Celsius
    */
    let fahrenheit = ((celsius * (9 / 5)) + 32);
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {

    /*
        Calculate Celsius using the formula:
        °C = (°F − 32) × 5/9
        where °C is Celsius, and °F is Fahrenheit
    */
    let celsius = ((fahrenheit - 32) * (5 / 9));
    return celsius;
}

// View
function displayTempature(degrees, type) {

    // Format tempature to 2 decimal numbers
    degrees = parseFloat(degrees).toFixed(2);

    // Format type tempature
    if (type == 'toCelsius') {
        type = 'Celsius';

    } else if (type == 'toFahrenheit') {
        type = 'Fahrenheit';
    }

    // Format as HTML
    let results = `<span class="text-muted">${type}</span><br/>
                   <h1 class="text-primary">${degrees}</h1>`;

    // Display on document
    document.getElementById('results').innerHTML = results;
    document.getElementById('resultsContainer').classList.remove('d-none');
}

// Change label 
    // Get the select element by its ID
    var selectElement = document.getElementById("opertation-input");

    // Add event listener for the 'change' event
    selectElement.addEventListener("change", function () {

        // This function will be executed when the selected option changes

        // Get Selected option
        selectedOperation = selectElement.value;

        // Change label
        if (selectedOperation == 'toCelsius') {
            document.getElementById('temperatureDegrees-label').innerHTML = 'Fahrenheit';

        } else if (selectedOperation == 'toFahrenheit') {
            document.getElementById('temperatureDegrees-label').innerHTML = 'Celsius';
        }
    });