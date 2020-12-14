const town_json = 'https://byui-cit230.github.io/weather/data/towndata.json';

function events(json_data) {
  output = '';
  for (const element of json_data['towns'][CURRENT_TOWN_POSITION]['events']) {
    output += `<div class="town_event">${element}</div>`;    
  }
  document.querySelector('#events').innerHTML = output;
}

bind_fetch(events, town_json);
