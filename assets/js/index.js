'use strict';

const main = document.querySelector('main');
const background = 'https://images.unsplash.com/photo-1584949091598' +
					'-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8' +
					'MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&f' +
					'it=crop&w=1170&q=80';
function setBackground() {
	main.style.background = `#fff url(${background}) center center / cover no-repeat`;
}

setBackground();