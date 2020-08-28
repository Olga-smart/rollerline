
// Fix footer on the bottom of the page
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
// End Fix footer on the bottom of the page

// Fill enroll form textarea
window.addEventListener('click', function(event) {
	let target = event.target;
	if (target.tagName != 'BUTTON') return;
	if (target.closest('.schedule-item')) {
		enrollModal.querySelector('textarea').value = target.closest('.schedule-item').querySelector('h3').textContent + ' ' + target.closest('.row').querySelector('.start').textContent.toLowerCase();
	}
	if (target.closest('.lessons')) {
		enrollModal.querySelector('textarea').value = target.closest('.lessons').querySelector('.section-heading').textContent.toLowerCase();
	}
});

// Autoplay video in instructors cards
//video = document.getElementById("shamblerVideo");
//video.addEventListener('mouseover', function() {
//	this.play();
//});
//video.addEventListener('mouseleave', function() {
//	this.pause();
//});

// Autoplay video in instructors cards
instructors.addEventListener('mouseover', function(event) {
	let video = event.target.closest('video');
	if (!video) return;
	video.play();
});

instructors.addEventListener('mouseleave', function(event) {
	let video = event.target.closest('video');
	if (!video) return;
	video.pause();
});