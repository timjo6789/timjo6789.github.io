const town_json = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(town_json)
  .then((response) => { return response.json() })
  .then((json_object) => {
    // console.table(json_object); // temporary checking for valid response and data parsing
    const towns = json_object['towns'];
    let i = 0;
    for (const town of towns) {
      if (i == 3){
        break; // temporary stop at three towns.
      }
      let card = document.createElement('section');
      card.innerHTML = `
      <span>
        <h2>${town.name}</h2>
        <span>${town.motto}</span>
        <span>Year Founded: ${town.yearFounded}</span>
        <span>Population: ${town.currentPopulation}</span>
        <span>Annual Rain Fall: ${town.averageRainfall}</span>
      </span>
      <img src="images/300x400.jpg" data-src="images/town/${town.photo}" alt="${town.name} hero photo">
      `;

      document.querySelector('div#cards').appendChild(card);
      i++;
    }
    
    let script = document.createElement('script');
    script.src = "javascript/observe.js";
    document.querySelector('head').appendChild(script);
  });
