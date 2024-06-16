const Img1 = document.getElementById('img-1');
const Img2 = document.getElementById('img-2');
const Img3 = document.getElementById('img-3');
const Img4 = document.getElementById('img-4');
const Img5 = document.getElementById('img-5');
const Img6 = document.getElementById('img-6');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    Img1.style.left = value * -1.5 + 'px';
    Img2.style.left = value * 1.5 + 'px';
    Img3.style.left = value * -1.5 + 'px';
    Img4.style.left = value * 1.5 + 'px';
    Img5.style.left = value * -1.5 + 'px';
    Img6.style.left = value * 1.5 + 'px';

});