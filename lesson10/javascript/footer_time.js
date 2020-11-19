const month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function convert_24_to_12(hour){
  if (hour == 0){
    return [12, 'am']
  } else if (hour < 12) {
    return [hour, 'am']
  } else if (hour == 12){
    return [hour, 'pm']
  } else if (hour < 24){
    return [hour - 12, 'pm']
  }
}

function lpad(number, paddings){
  var difference = paddings - number.toString().length;
  return difference >= 0 ? new Array(difference).fill('0').join("") + number : number.toString();
}

var today = new Date(document.lastModified);
var month = today.getMonth(), day = today.getDate(), year = today.getFullYear(), hour = today.getHours(), minute = today.getMinutes(), second = today.getSeconds();

var day_of_week = week_day[today.getDay()];

// dayOfWeek, dayOfMonth monthFullName fullYear

var parts = convert_24_to_12(today.getHours());
var hour = parts[0], ampm = parts[1];
document.getElementById('time').textContent = `${day_of_week}, ${day} ${month_names[month]} ${year}`;
document.getElementById('year').textContent = new Date(Date.now()).getFullYear();