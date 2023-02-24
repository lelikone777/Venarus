const menu = document.querySelector('.menu'),
    burgerBtn = document.querySelector('.nav__btn-burger'),
    buyBtn = document.querySelector('.nav__btn-buy'),
    navMobile = document.querySelector('.nav__mobile'),
    modalBtn = document.querySelectorAll('.buy_btn'),
    modal = document.querySelector('.modal'),
    info = document.querySelector('.about__top-item_info'),
    infoModal = document.querySelector('.about__top-item_info--modal'),
    closeModal = document.querySelector('.modal__close'),
    overlayModal = document.querySelector('.modal__overlay'),
    navLink = document.querySelectorAll('.nav__mobile-link');

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

modalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        if (!modal.classList.contains('visible')) {
            modal.classList.add('visible');
            document.body.style.overflow = 'hidden';
        } else {
            modal.classList.remove('visible');
            document.body.style.overflow = 'auto';
        }
    })
});

modal.addEventListener('click',  (e) => {
    if (e.target === overlayModal || e.target === closeModal) {
        modal.classList.remove('visible');
        document.body.style.overflow = 'auto';
    }
})
info.addEventListener('click',  () => {
    infoModal.classList.toggle('visible');
});
info.addEventListener('mouseenter',  () => {
    infoModal.classList.add('visible');
});
info.addEventListener('mouseleave',  () => {
    infoModal.classList.remove('visible');
});

navLink.forEach(item => {
    item.addEventListener('click', () => {
        navMobile.classList.remove('active');
        burgerBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pauseOnMouseEnter: true,

    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet-active',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



document.querySelectorAll('video').forEach(item => {
    item.addEventListener('click', function () {

        const videoContainer = document.querySelectorAll('.about-slider__right .swiper-slide > a ');

        const videoModal = document.createElement('div');
        videoModal.classList.add('video-modal');

        const videoOverlay = document.createElement('div');
        videoOverlay.classList.add('video-overlay');

        const videoBox = document.createElement('div');
        videoBox.classList.add('video-modal_box');

        const videoPlayerBig = document.createElement('video');
        videoPlayerBig.classList.add('video-player-big');

        const videoClose = document.createElement('div');
        videoClose.classList.add('video-modal_cross');

        document.body.append(videoModal);

        videoModal.append(videoOverlay, videoBox);
        videoBox.append(videoPlayerBig, videoClose);


        if (!videoModal.classList.contains('visible')) {
            videoModal.classList.add('visible');
            document.body.style.overflow = 'hidden';
        } else {
            videoModal.classList.remove('visible');
            document.body.style.overflow = 'auto';
            videoPlayerBig.pause();
        }

        videoClose.addEventListener('click', function () {
            videoModal.classList.remove('visible');
            document.body.style.overflow = 'auto';
            videoPlayerBig.pause();
        })

        videoOverlay.addEventListener('click', function () {
            videoModal.classList.remove('visible');
            document.body.style.overflow = 'auto';
            videoPlayerBig.pause();
        })

        console.log(item)

        videoPlayerBig.src = item.getAttribute('src');
        videoPlayerBig.controls = true;
        videoPlayerBig.autoplay = true;

    })
})


