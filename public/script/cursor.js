const cursor = document.querySelector('.cursor');
const cardDivImage = document.querySelectorAll('.card-div-image');

const first_image_section = (card_image, cursor_div) => {
    card_image.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            cursor_div.classList.add('cursor-active');
            x = e.pageX;
            y = e.pageY;
            cursor.style.top = y + 'px';
            cursor.style.left = x + 'px';
        });
        element.addEventListener('mouseleave', (e) => {
            cursor.classList.remove('cursor-active');
        });
    });
}
first_image_section(cardDivImage, cursor);

document.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
});