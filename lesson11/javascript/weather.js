function wind_chills(){
  let temperature = parseInt(document.querySelector("#temperature").textContent);
  let wind_speed = parseInt(document.querySelector("#wind_speed").textContent);
  if (temperature <= 50 && wind_speed > 3){
    let fahrenheit = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16);
    document.querySelector("#wind_chill").textContent = fahrenheit.toFixed(2) + " ℉";
  }
}

function wind_chill_calculate(temperature, wind_speed){
  let fahrenheit = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16);
  return temperature <= 50 && wind_speed > 3 ? fahrenheit.toFixed(2) + " ℉" : 'N/A';
}