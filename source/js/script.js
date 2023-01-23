console.log("Hello")
let navigation = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__menu-button');

navigation.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});
