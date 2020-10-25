if (new Date().getDay() == 6){
  let banner = document.querySelector('div#banner');
  banner.textContent = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";;
  banner.removeAttribute('class', 'hidden');  
}