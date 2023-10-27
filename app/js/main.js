let menuBtn = document.querySelector('.burger__menu');
let menu = document.querySelector('.header-top__list');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})
