const APPID = "25ade7342d9ba6641eee96d1d854f3b1";

bind_fetch = (function_call, link) => fetch(link).then((response) => response.json()).then((json_data) => function_call(json_data));
template = (type, id) => `https://api.openweathermap.org/data/2.5/${type}?q=${id}&appid=${APPID}&units=imperial`;