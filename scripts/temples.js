//Copyright
const date = new Date().getFullYear();
document.querySelector("#copyrightYear").innerHTML = date;

//Last Modified
let modified = document.lastModified;
document.querySelector("#modified").innerHTML = modified


// HAMBURGER MENU
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});