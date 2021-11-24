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
// t1.fromTo('.d-effect', { x: 0 }, { x: '-5000rem' });
t1.fromTo('.d', { fontSize: '15rem' }, { fontSize: '1000rem', duration: 0.5 });
