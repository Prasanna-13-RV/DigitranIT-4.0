const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
});