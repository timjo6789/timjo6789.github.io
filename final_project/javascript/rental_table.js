function load_table(json_data) {
  Object.keys(json_data).forEach(key => {
    each_data = json_data[key];
    half_day = each_data['Half_day'];
    full_day = each_data['Full_day'];

    select('#rental tbody').insertRow().innerHTML = `
      <td>${key}</td>
      <td>${each_data["Max persons"]}</td>
      <td>$${half_day["Reservation"]}</td>
      <td>$${full_day["Reservation"]}</td>
      <td>$${half_day["Walk_in"]}</td>
      <td>$${full_day["Walk_in"]}</td>
    `;
  });
}

bind_fetch(load_table, "data/pricing.json");