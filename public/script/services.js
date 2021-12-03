const readMore1 = document.querySelectorAll('.readmore11');
const readMore2 = document.querySelectorAll('.readmore12');
const readMore3 = document.querySelectorAll('.readmore13');
const readMore4 = document.querySelectorAll('.readmore14');
const readMore5 = document.querySelectorAll('.readmore15');
const readMore6 = document.querySelectorAll('.readmore16');

const buttonTag11 = document.querySelectorAll('.button-tag11');
const buttonTag12 = document.querySelectorAll('.button-tag12');
const buttonTag13 = document.querySelectorAll('.button-tag13');
const buttonTag14 = document.querySelectorAll('.button-tag14');
const buttonTag15 = document.querySelectorAll('.button-tag15');
const buttonTag16 = document.querySelectorAll('.button-tag16');

const servicesDiv1 = document.querySelector('.services-div1');
const servicesDiv2 = document.querySelector('.services-div2');
const servicesDiv3 = document.querySelector('.services-div3');
const servicesDiv4 = document.querySelector('.services-div4');
const servicesDiv5 = document.querySelector('.services-div5');
const servicesDiv6 = document.querySelector('.services-div6');

const servicesDivContent1 = document.querySelector('.services-div-content1');
const servicesDivContent2 = document.querySelector('.services-div-content2');
const servicesDivContent3 = document.querySelector('.services-div-content3');
const servicesDivContent4 = document.querySelector('.services-div-content4');
const servicesDivContent5 = document.querySelector('.services-div-content5');
const servicesDivContent6 = document.querySelector('.services-div-content6');

const servicesParentDiv1 = document.querySelector('.services-parent-div1');
const servicesParentDiv2 = document.querySelector('.services-parent-div2');
const servicesParentDiv3 = document.querySelector('.services-parent-div3');
const servicesParentDiv4 = document.querySelector('.services-parent-div4');
const servicesParentDiv5 = document.querySelector('.services-parent-div5');
const servicesParentDiv6 = document.querySelector('.services-parent-div6');

const animatecard = (readmore, button, servicesDiv, servicesDivContent, servicesParentDiv) => {
    readmore.forEach(element => {
        element.addEventListener('click', () => {
            servicesDiv.classList.add('show-div');
            servicesDivContent.classList.add('show-content');
            servicesParentDiv.classList.add('show-parent-div');
        });
    });
    button.forEach(element => {
        element.addEventListener('click', () => {
            servicesDiv.classList.remove('show-div');
            servicesDivContent.classList.remove('show-content');
            servicesParentDiv.classList.remove('show-parent-div');
        });
    });
}

animatecard(readMore1,buttonTag11, servicesDiv1, servicesDivContent1, servicesParentDiv1);
animatecard(readMore2,buttonTag12, servicesDiv2, servicesDivContent2, servicesParentDiv2);
animatecard(readMore3,buttonTag13, servicesDiv3, servicesDivContent3, servicesParentDiv3);
animatecard(readMore4,buttonTag14, servicesDiv4, servicesDivContent4, servicesParentDiv4);
animatecard(readMore5,buttonTag15 ,servicesDiv5, servicesDivContent5, servicesParentDiv5);
animatecard(readMore6,buttonTag16, servicesDiv6, servicesDivContent6, servicesParentDiv6);
