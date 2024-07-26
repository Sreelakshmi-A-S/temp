document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let outputUnit;

    switch (inputUnit) {
        case 'celsius':
            convertedTemperature = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            outputUnit = `Fahrenheit: ${convertedTemperature.fahrenheit.toFixed(2)} °F, Kelvin: ${convertedTemperature.kelvin.toFixed(2)} K`;
            break;
        case 'fahrenheit':
            convertedTemperature = {
                celsius: (temperature - 32) * 5/9,
                kelvin: ((temperature - 32) * 5/9) + 273.15
            };
            outputUnit = `Celsius: ${convertedTemperature.celsius.toFixed(2)} °C, Kelvin: ${convertedTemperature.kelvin.toFixed(2)} K`;
            break;
        case 'kelvin':
            convertedTemperature = {
                celsius: temperature - 273.15,
                fahrenheit: ((temperature - 273.15) * 9/5) + 32
            };
            outputUnit = `Celsius: ${convertedTemperature.celsius.toFixed(2)} °C, Fahrenheit: ${convertedTemperature.fahrenheit.toFixed(2)} °F`;
            break;
        default:
            outputUnit = 'Invalid input unit';
    }

    resultDiv.textContent = outputUnit;
});
