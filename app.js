console.log('It\'s loaded!!!');
// replace the "no-js" class on the root element with "js".
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + 'js';

// Define runtime constants.
const elMenuToggle = document.querySelector('.menu-toggle');
// console.log(elMenuToggle);
const elNavWrap = document.querySelector('nav');

const elMenuItems = document.querySelector('.nav_links');
//console.log(elMenuItems);

function handleClick(e) {
	console.log('You Clicked');
	//console.log(e);

	let myAction = '';
	if(e.target.innerText === 'Menu' || e.target.alt === "Open menu.") {
		myAction = 'links-show';
	} else {
		myAction = 'links-hide';
	}

	switch(myAction) {

		case 'links-show':
			elMenuItems.style.display='flex';
			elMenuItems.style.flexDirection='column';
			elMenuToggle.firstElementChild.alt='Close menu.';
			elMenuToggle.lastElementChild.innerText='Close';
			break;

		case 'links-hide':
			elMenuItems.style.display='none';
			elMenuItems.style.flexDirection='row';
			elMenuToggle.firstElementChild.alt='Open menu.';
			elMenuToggle.lastElementChild.innerText='Menu';			
			break;

		default:	
	}

}

elMenuToggle.addEventListener("click", handleClick);