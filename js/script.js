const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeArea = document.querySelector('.menu__bcg'),
      closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
} );
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
} );
closeArea.addEventListener('click', () => {
    menu.classList.remove('active')
} );
const rating = document.querySelectorAll('.skills-range__item-percent'),
      load = document.querySelectorAll('.skills-range__item-range');
rating.forEach((item, i) => {
    load[i].style.width = item.innerHTML;
});
// const aboutMe = document.querySelectorAll('.promo__link');

// aboutMe.addEventListener('click', (i) => {
//     aboutMe[i].classList.add('active')
// });
// aboutMe.addEventListener('click', (i) => {
//     aboutMe[i].classList.remove('active')
// });
      
