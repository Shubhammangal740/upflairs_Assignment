function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C is equal to ${fahrenheit}°F.`;
}


const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
const result = celsiusToFahrenheit(celsius);
console.log(result);
