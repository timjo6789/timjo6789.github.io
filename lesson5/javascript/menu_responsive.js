/*
const menu_button = document.querySelector('header img:nth-of-type(2)');
const links = document.querySelector('ul');

menu_button.addEventListener('click', () => {links.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
*/

function toggleMenu(){
  document.getElementById("navigation").classList.toggle('hide');
}