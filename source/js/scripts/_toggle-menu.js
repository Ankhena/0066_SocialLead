// toggle menu
const toggle = document.querySelector('.btn-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const mainLinks = document.querySelectorAll('.nav__link');

if (toggle !== null) {
  document.querySelector('body').classList.remove('no-js');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('nav--opened');
    header.classList.toggle('header--with-nav-opened');
    header.classList.toggle('header--mini');
    //toggle.classList.toggle('btn-toggle--close');
    //body.classList.toggle('body-with-open-modal');

    //document.querySelector('.header__big-nav').classList.toggle('header__big-nav--mini');
  });
}

if (mainLinks) {
  mainLinks.forEach(link => link.addEventListener('click', (e) => {
    if (!e.target.classList.contains('nav__link--about-us')) {
      nav.classList.remove('nav--opened');
      header.classList.remove('header--with-nav-opened');
      toggle.classList.remove('btn-toggle--close');
      //body.classList.remove('body-with-open-modal');
    }
    if (e.target.classList.contains('nav__link--about-us')) {
      e.target.parentNode.classList.add('nav__item--about-us');
    }
  }))
}


//закрытие по клику мимо окна
//хак для ИЕ, чтобы работал closest и matches
(function (evt) {
  evt.matches = evt.matches || evt.mozMatchesSelector || evt.msMatchesSelector || evt.oMatchesSelector || evt.webkitMatchesSelector;
  evt.closest = evt.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) {
      return null
    } else return this.parentElement.closest(selector)
  };
}(Element.prototype));
//end хак для ИЕ


const navWrapper = document.querySelector('.nav__overlay');

if (navWrapper) {
  navWrapper.addEventListener("mouseup", function (evt) {

    if (header.classList.contains('header--with-nav-opened')) {

      nav.classList.remove('nav--opened');
      header.classList.remove('header--with-nav-opened');
      toggle.classList.remove('btn-toggle--close');
      body.classList.remove('body-with-open-modal');
    }
  })

}


// end toggle menu
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
