function small() {
  small_medium();

  setDisplayNoneUnset("span.median-large-detail", "span.small-detail");
}

function medium() {
  small_medium();
  medium_large();

  addHidden('nav');
}

function large() {
  medium_large();

  setDisplayNoneUnset("span.small-medium-detail", "span.large-detail");
  removeHidden('nav');
}

function small_medium() {
  setDisplayNoneUnset("span.large-detail", "span.small-medium-detail");
}

function medium_large() {
  setDisplayNoneUnset("span.small-detail", "span.median-large-detail");
}

mediaQuery = size => window.matchMedia(`only screen and (min-width: ${size})`);
triggerChange = () => media[2] ? large() : media[1] ? medium() : small();

var media = [mediaQuery('0rem'), mediaQuery('27.78rem'), mediaQuery('74rem')];
media.forEach(item => item.addEventListener("change", triggerChange));

triggerChange();