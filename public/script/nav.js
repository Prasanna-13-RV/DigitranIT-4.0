const bottomNav = document.querySelector('.navbar');
const body = document.querySelector('body');

if (window.innerWidth >= 764) {
	lastScroll = 0;
	window.addEventListener('scroll', () => {
		let currentScroll = window.scrollY;
		if (currentScroll > lastScroll) {
			bottomNav.style.top = `-100%`;
		} else {
			bottomNav.style.top = `0`;
		}
		lastScroll = currentScroll;
	});
} else {
	bottomNav.style.height = window.innerHeight + 'px';
}
