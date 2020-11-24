function wind_chill_calculate(temperature, wind_speed){
  // 35.74 + 0.6215 * t - 35.75 * s^0.16 + 0.4275 * t * s^0.16
  let fahrenheit = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16) + 0.4275 * t * Math.pow(wind_speed, 0.16);
  return temperature <= 50 && wind_speed > 3 ? fahrenheit.toFixed(2) + " ℉" : 'N/A';
}