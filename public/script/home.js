const t1 = gsap.timeline({
	scrollTrigger: {
		trigger: '.d-effect',
		start: 'top',
		end: '100%',
		scrub: 'true',
		pin: true,
		markers: true
	}
});
t1.fromTo(
	'.d',
	{ width: '20rem', rotate: '0deg' },
	{ width: '35rem', rotate: '180deg' }
);
t1.fromTo(
	'.d',
	{ width: '35rem', rotate: '180deg' },
	{ width: '20rem', rotate: '360deg' }
);
