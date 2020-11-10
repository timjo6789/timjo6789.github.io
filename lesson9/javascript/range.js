var index = document.querySelector("span#storm-severity-index");

function update_storm_severity_index(range) {
  index.textContent = range.value;
}