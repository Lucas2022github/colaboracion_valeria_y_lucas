const Img1 = document.getElementById('img-1');
const Img2 = document.getElementById('img-2');
const Img3 = document.getElementById('img-3');
const Img4 = document.getElementById('img-4');
const Img5 = document.getElementById('img-5');
const Img6 = document.getElementById('img-6');
const cartel = document.getElementById('cartel');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    Img1.style.left = value * -1.5 + 'px';
    Img2.style.left = value * 1.5 + 'px';
    Img3.style.left = value * -1.5 + 'px';
    Img4.style.left = value * 1.5 + 'px';
    Img5.style.left = value * -0.2 + 'px';
    Img6.style.left = value * 0.2 + 'px';
    cartel.style.bottom = value * -0.5 + 'px';


});


document.addEventListener('DOMContentLoaded', (event) => {


    const sectionSobreMi = document.getElementById('section-sobre-mi');
    const sectionHome = document.getElementById('section-home');

    function updateDisplay() {
        if (window.location.hash === '#section-sobre-mi') {
            Img1.classList.add('display-none');
            Img2.classList.add('display-none');
            Img3.classList.add('display-none');
            Img4.classList.add('display-none');
            Img5.classList.add('display-none');
            Img6.classList.add('display-none');
        } else if (window.location.hash === '#section-home') {
            Img1.classList.remove('display-none');
            Img2.classList.remove('display-none');
            Img3.classList.remove('display-none');
            Img4.classList.remove('display-none');
            Img5.classList.remove('display-none');
            Img6.classList.remove('display-none');
        }
    }

    window.addEventListener('hashchange', updateDisplay);

    updateDisplay();
});





// document.addEventListener('DOMContentLoaded', () => {
//     const images = [
//         document.getElementById('img-1'),
//         document.getElementById('img-2'),
//         document.getElementById('img-3'),
//         document.getElementById('img-4'),
//         document.getElementById('img-5'),
//         document.getElementById('img-6')
//     ];

//     window.addEventListener('scroll', () => {
//         let value = window.scrollY;
//         images.forEach((img, index) => {
//             img.style.left = index % 2 === 0 ? value * -1.5 + 'px' : value * 1.5 + 'px';
//         });
//     });

//     function updateDisplay() {
//         const shouldHide = window.location.hash === '#section-sobre-mi';
//         images.forEach(img => {
//             if (shouldHide) {
//                 img.classList.add('display-none');
//             } else {
//                 img.classList.remove('display-none');
//             }
//         });
//     }

//     window.addEventListener('hashchange', updateDisplay);
//     updateDisplay();
// });
