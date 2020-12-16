function triggerChange() {
  if (small_media.matches && !medium_media.matches && !large_media.matches) {
    small();
  } else if (small_media.matches && medium_media.matches && !large_media.matches) {
    medium();
  } else {
    large();
  }
}

function small() {
  small_medium();

  document.querySelectorAll("span.small-detail").forEach(element => {
    element.style.display = 'unset';
  });
  
  document.querySelectorAll("span.median-large-detail").forEach(element => {
    element.style.display = 'none';
  });
}

function small_medium() {
  document.querySelectorAll("span.small-medium-detail").forEach(element => {
    element.style.display = 'unset';
  });
  
  document.querySelectorAll("span.large-detail").forEach(element => {
    element.style.display = 'none';
  });
}

function medium() {
  small_medium();
  medium_large();

  document.querySelector('nav').classList.add('hidden');
}

function medium_large() {
  document.querySelectorAll("span.small-detail").forEach(element => {
    element.style.display = 'none';
  });
  
  document.querySelectorAll("span.median-large-detail").forEach(element => {
    element.style.display = 'unset';
  });
}

function large() {
  medium_large();

  document.querySelectorAll("span.small-medium-detail").forEach(element => {
    element.style.display = 'none';
  });
  
  document.querySelectorAll("span.large-detail").forEach(element => {
    element.style.display = 'unset';
  });

  document.querySelector('nav').classList.remove('hidden');
}



var small_media = window.matchMedia("only screen and (min-width: 0rem)");
var medium_media = window.matchMedia("only screen and (min-width: 27.78rem)");
var large_media = window.matchMedia("only screen and (min-width: 74rem)");

small_media.addEventListener("change", (query) => triggerChange());
medium_media.addEventListener("change", (query) => triggerChange());
large_media.addEventListener("change", (query) => triggerChange());

triggerChange();