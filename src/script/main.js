const menu = document.querySelector('.menu'),
    burgerBtn = document.querySelector('.nav__btn-burger'),
    buyBtn = document.querySelector('.nav__btn-buy'),
    navMobile = document.querySelector('.nav__mobile');

burgerBtn.addEventListener('click', function () {
    if (!burgerBtn.classList.contains('active')) {
        navMobile.classList.add('active');
        burgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        navMobile.classList.remove('active');
        burgerBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// function getClick(button, element, activeClass, animationClass) {
//     button.addEventListener('click', () => {
//         if (!element.classList.contains(activeClass)) {
//             element.classList.add(activeClass);
//             button.classList.add(activeClass);
//             document.body.style.overflow = 'hidden';
//
//         } else {
//             element.classList.remove(activeClass);
//             button.classList.remove(activeClass);
//             document.body.style.overflow = 'auto';
//         }
//     })
// }
// getClick(burgerBtn, navMobile, 'active');

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');






const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet-active'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});