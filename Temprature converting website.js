function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let output = '';

    if (isNaN(inputTemperature)) {
        output = 'Please enter a valid temperature.';
    } else {
        switch (inputUnit) {
            case 'celsius':
                output = `${inputTemperature}°C = ${(inputTemperature * 9/5 + 32).toFixed(2)}°F = ${(inputTemperature + 273.15).toFixed(2)}K`;
                break;
            case 'fahrenheit':
                output = `${inputTemperature}°F = ${((inputTemperature - 32) * 5/9).toFixed(2)}°C = ${(((inputTemperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
                break;
            case 'kelvin':
                output = `${inputTemperature}K = ${(inputTemperature - 273.15).toFixed(2)}°C = ${((inputTemperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                break;
        }
    }

    document.getElementById('output').innerText = output;
}
