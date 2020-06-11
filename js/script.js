const footer = document.querySelector('.footer');
const body = document.body;
let footerHeight = footer.offsetHeight;

document.addEventListener('DOMContentLoaded', function() {
	footerHeight = footer.offsetHeight;
	body.style.paddingBottom = footerHeight + 'px';
});

window.addEventListener('resize', function() {
	footerHeight = footer.offsetHeight;
	body.style.paddingBottom = footerHeight + 'px';
});