const APPID = "25ade7342d9ba6641eee96d1d854f3b1";
const PRESTON_ID = 5604473;

setText = (querySelector, text) => document.querySelector(querySelector).textContent = text;

function preston_weather(json_data){
  wind_speed = json_data['wind']['speed'];
  temperature = json_data['main']['temp'];

  setText('span#wind_speed', wind_speed);
  setText('span#temperature', temperature);
  setText('span#wind_chill', wind_chill_calculate(temperature, wind_speed));
  setText('span#humidity', json_data['main']['humidity']);
}

day_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function preston_forecast(json_data){
  weather_top = document.querySelectorAll(`span.weather-top`);
  weather_bottom = document.querySelectorAll(`span.weather-bottom`);

  forcasts = json_data['list'].filter(each => each['dt_txt'].split(' ')[1] == '18:00:00');
  current_day = new Date();
  for (let i = 0; i < 5; i++) {
    current_day.setTime(forcasts[i]['dt']* 1000);
    weather_top[i].innerHTML = day_of_week[current_day.getDay()];
    weather_bottom[i].innerHTML = `${api_image(forcasts[i])} ${forcasts[i]['main']['temp']}°F <span>${forcasts[i]['weather'][0]['description']}</span>`;
  }
}

function api_image(json_data){
  json_data = json_data['weather'][0];
  source = `https://api.openweathermap.org/img/w/${json_data['icon']}.png`;
  return `<img src="${source}" alt="${json_data['description']}">`;
}

bind_fetch = (function_call, link) => fetch(link).then((response) => response.json()).then((json_data) => function_call(json_data));
template = (type, id) => `https://api.openweathermap.org/data/2.5/${type}?id=${id}&appid=${APPID}&units=imperial`;

bind_fetch(preston_weather, template('weather', PRESTON_ID));
bind_fetch(preston_forecast, template('forecast', PRESTON_ID));