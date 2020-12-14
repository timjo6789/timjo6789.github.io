api_call = "https://api.openweathermap.org/data/2.5/onecall?lat=20.422983&lon=-86.922340&exclude=hourly,daily,minutely,current&appid=25ade7342d9ba6641eee96d1d854f3b1";
sample_call = "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.";
b = sample_call.split('\n*');

// replace beginning/ending of "..." from each string
for (let i = 0; i < b.length; i++){
  b[i] = b[i].replace(/^(\.\.\.)/, "").replace(/(\.\.\.)$/, "");
  if (b[i].split('...') > 1) {
    b[i] = b[i].split('...');
  }
}

for (let i = 0; i < b.length; i++){
  if (Array.isArray(b[i]) && b[i].length == 2){
    console.log('double message');
  } else if (Array.isArray(b[i]) && b[i].length == 1){
    console.log("single message");
  }
}