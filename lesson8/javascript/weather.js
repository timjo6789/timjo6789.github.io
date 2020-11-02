function wind_chill(){
  let temperature = parseInt(document.querySelector("#temperature").textContent);
  let wind_speed = parseInt(document.querySelector("#wind_speed").textContent);
  if (temperature <= 50 && wind_speed > 3){
    let fahrenheit = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16);
    document.querySelector("#wind_chill").textContent = fahrenheit.toFixed(2) + " ℉";
  }
}

wind_chill();