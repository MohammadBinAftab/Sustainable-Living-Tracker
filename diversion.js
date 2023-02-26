const form = document.getElementById('carbon-form');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

const CARBON_PER_GALLON = 19.6; // pounds of CO2 per gallon of gas
const CARBON_PER_KWH = 1.6; // pounds of CO2 per kWh of electricity
const CARBON_PER_GRAM_OF_MEAT = 3.3; // pounds of CO2 per gram of meat

function calculateCarbonFootprint() {
  const carMileage = parseFloat(document.getElementById('car-mileage').value);
  const electricityUsage = parseFloat(document.getElementById('electricity-usage').value);
  const meatConsumption = parseFloat(document.getElementById('meat-consumption').value);

  if (isNaN(carMileage) || isNaN(electricityUsage) || isNaN(meatConsumption)) {
    resultDiv.innerHTML = '<p>Please enter valid numbers for all fields.</p>';
    return;
  }

  const carCarbon = (10000 / carMileage) * CARBON_PER_GALLON;
  const electricityCarbon = electricityUsage * CARBON_PER_KWH;
  const meatCarbon = meatConsumption / 1000 * CARBON_PER_GRAM_OF_MEAT;
  const totalCarbon = carCarbon + electricityCarbon + meatCarbon;

  resultDiv.innerHTML = `
    <p>Your carbon footprint is:</p>
    <ul>
      <li>${carCarbon.toFixed(2)} pounds from driving</li>
      <li>${electricityCarbon.toFixed(2)} pounds from home energy use</li>
      <li>${meatCarbon.toFixed(2)} pounds from your diet</li>
    </ul>
    <p>Total: ${totalCarbon.toFixed(2)} pounds of CO2 per year</p>
  `;
   resultDiv.innerHTML = resultString;
   form.innerHTML = resultString;
}

calculateBtn.addEventListener('click', calculateCarbonFootprint);
