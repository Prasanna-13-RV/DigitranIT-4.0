const bottomNav = document.querySelector('nav');
const body = document.querySelector('body');

if (window.innerWidth >= 764) {
    lastScroll = 0;
    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;
        if (currentScroll > lastScroll) {
            bottomNav.style.transform = `translateY(${-100}%)`;
            console.log('upp');
        } else {
            bottomNav.style.transform = `translateY(${0}%)`;
            console.log('down');
        }
        lastScroll = currentScroll;
    });
} else {
    bottomNav.style.height = window.innerHeight + 'px';
}
