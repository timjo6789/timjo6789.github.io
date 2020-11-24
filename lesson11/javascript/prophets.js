const prophets_URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(prophets_URL)
  .then((response) => { return response.json() })
  .then((json_object) => {
    // console.table(json_object); // temporary checking for valid response and data parsing
    const prophets = json_object['prophets'];
    for (const each of prophets) {
      let card = document.createElement('section');
      card.innerHTML = `
        <h2>${each.name} ${each.lastname}</h2>
        <div>Date of Birth: ${each.birthdate}</div>
        <div>Place of Birth: ${each.birthplace}</div>
        <img src="images/placeholder/300x400.jpg" data-src="${each.imageurl}" alt="${each.name} ${each.lastname} - prophet #${each.order}">
      `;

      document.querySelector('div.cards').appendChild(card);
    }
    
    let script = document.createElement('script');
    script.src = "javascript/observe.js";
    document.querySelector('head').appendChild(script);
  });
