let navigation = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__menu-button');
let headerLogo = document.querySelector('.header__logo')

navigation.classList.remove('navigation--nojs');
headerLogo.classList.remove('header__logo--nojs');

navToggle.addEventListener('click', function () {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});
