function generate_warning(description) {
  parts = description.split('\n*').map(each => each.replace(/^(\.\.\.)/, "").replace(/(\.\.\.)$/, ""));

  var layout = `
  <h2>${parts.shift()}</h2>
  <div class='warning-table'>
  `;

  for (each of parts) {
    if (each.split('...').length > 1) {
      each = each.split('...');
      layout += `
      <div class="warning-item">
        <span>${each[0].replace(' ', '')}</span>
        <span>${each[1].replaceAll('\n', ' ')}</span>
      </div>`
    }
  }  
  return layout + '\n</div>';
}


function api(json_data){
  if ("alerts" in json_data) {
    document.querySelector('fieldset.alerts legend').textContent = "Weather Alerts";
    layout = "";
    json_data["alerts"].forEach(element => {
      layout += generate_warning(element["description"]);
    });
    document.querySelector('fieldset.alerts').innerHTML += layout;
  }
}

// uncomment to test weather alerts
/*
json_data = {'alerts': [
  {"description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible."},
  {"description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible."}
]};
api(json_data);
*/

// comment to test weather alerts
let LAT = '20.422983';
let LON = '-86.922340';
bind_fetch(api, `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&exclude=hourly,daily,minutely,current&appid=${APPID}`);