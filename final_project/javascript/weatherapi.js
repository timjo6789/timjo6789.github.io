const APPID = "25ade7342d9ba6641eee96d1d854f3b1";

setText = (querySelector, text) => document.querySelector(querySelector).textContent = text;

day_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function weather(json_data){
  let weather_section = document.querySelector('.weather');
  let current_day = new Date();
  weather_section.innerHTML += 
    `<div class="weather-card">
    ${api_image(json_data)}
    <span>${day_of_week[current_day.getDay()]}</span>
    <span>${json_data['weather'][0]['description']}</span>
    <span>Temperature: ${json_data['main']['temp']}°F</span>
    <span>Humidity: ${json_data['main']['humidity']}</span>
    </div>`;
}

function forecast(json_data) {
  let weather_section = document.querySelector('.weather');
  let forcasts = json_data['list'].filter(each => each['dt_txt'].split(' ')[1] == '18:00:00');
  let current_day = new Date();

  for (let i = 0; i < 3; i++) {
    current_day.setTime(forcasts[i]['dt'] * 1000);
    weather_section.innerHTML += 
      `<div class="weather-card">
      ${api_image(forcasts[i])}
      <span>${day_of_week[current_day.getDay()]}</span>
      <span>${forcasts[i]['weather'][0]['description']}</span>
      <span>Temperature: ${forcasts[i]['main']['temp']}°F</span>
      <span>Humidity: ${forcasts[i]['main']['humidity']}</span>
      </div>`;
  }
}



function api_image(json_data){
  json_data = json_data['weather'][0];
  source = `https://api.openweathermap.org/img/w/${json_data['icon']}.png`;
  return `<img src="${source}" alt="${json_data['description']}">`;
}

bind_fetch = (function_call, link) => fetch(link).then((response) => response.json()).then((json_data) => function_call(json_data));
template = (type, id) => `https://api.openweathermap.org/data/2.5/${type}?q=${id}&appid=${APPID}&units=imperial`;

// if using this file, provide TOWN_NAME from another js file or from script tag prior to this
bind_fetch(weather, template('weather', TOWN_NAME));
bind_fetch(forecast, template('forecast', TOWN_NAME));