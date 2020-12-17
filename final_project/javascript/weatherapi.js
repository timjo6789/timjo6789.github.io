day_of_week_list = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function weather(json_data){
  let weather_section = select('.weather-grid');
  weather_section.innerHTML += 
    `<div class="weather-card today">
      ${api_image(json_data)}
      <div class="weather-details">
        <span class="day">Today</span>
        <span>${json_data['weather'][0]['description']}</span>
        <span><span class="small-detail">Temperature: </span>${json_data['main']['temp']}°F</span>
        <span>Humidity: ${json_data['main']['humidity']}</span>
      </div>
    </div>
    `;
    triggerChange();
}

function forecast(json_data) {
  let weather_section = select('.weather-grid');
  let forcasts = json_data['list'].filter(each => each['dt_txt'].split(' ')[1] == '18:00:00');
  let current_day = new Date();

  for (let forcast of forcasts.slice(0, 3)) {
    current_day.setTime(forcast['dt'] * 1000);
    weather_section.innerHTML += 
      `<div class="weather-card forecast">
        ${api_image(forcast)}
        <div class="weather-details">
          <span class="day">${day_of_week_list[current_day.getDay()]}</span>
          <span>${forcast['weather'][0]['description']}</span>
          <span><span class='small-detail'>Temperature: </span>${forcast['main']['temp']}°F</span>
          <span>Humidity: ${forcast['main']['humidity']}</span>
        </div>
      </div>
      `;
  }
  triggerChange();
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