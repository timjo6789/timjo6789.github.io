const APPID = "25ade7342d9ba6641eee96d1d854f3b1";
const PRESTION_ID = 5604473;

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${PRESTION_ID}&appid=${APPID}&units=imperial`)
  .then((response) => response.json())
  .then((json_data) => {
    document.querySelector('span#temperature').textContent = json_data["main"]["temp"] + '°F';

    let image = document.querySelector('img#icon');
    image_source = `https://api.openweathermap.org/img/w/${json_data['weather'][0]['icon']}.png`;
    image.setAttribute('src', image_source);
    image.setAttribute('alt', json_data['weather'][0]['description']);
    document.querySelector('span#image_source').textContent = image_source;
  });