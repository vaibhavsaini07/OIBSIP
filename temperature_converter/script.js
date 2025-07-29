const temperatureInput = document.getElementById('temperatureInput');
const celsiusRadio = document.getElementById('celsius');
const fahrenheitRadio = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convertBtn');
const resultArea = document.getElementById('resultArea');

function convertTemperature() {
    const tempValue = parseFloat(temperatureInput.value);
    if (isNaN(tempValue)) {
        resultArea.textContent = 'Please enter a valid number.';
        resultArea.classList.add('text-red-500');
        return;
    }
    resultArea.classList.remove('text-red-500');
    if (celsiusRadio.checked) {
        const fahrenheit = (tempValue * 9 / 5) + 32;
        resultArea.innerHTML = `${tempValue}°C is <span class="font-bold text-blue-600">${fahrenheit.toFixed(2)}°F</span>`;
    } else if (fahrenheitRadio.checked) {
        const celsius = (tempValue - 32) * 5 / 9;
        resultArea.innerHTML = `${tempValue}°F is <span class="font-bold text-blue-600">${celsius.toFixed(2)}°C</span>`;
    }
}
convertBtn.addEventListener('click', convertTemperature);
temperatureInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        convertBtn.click();
    }
});
