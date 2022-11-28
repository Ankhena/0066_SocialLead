"use strict";

const body = document.querySelector('body');

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
    toggle.classList.toggle('btn-toggle--close');
    body.classList.toggle('body-with-open-modal');
  });
}

if (mainLinks) {
  mainLinks.forEach(link => link.addEventListener('click', (e) => {
    if (!e.target.classList.contains('nav__link--about-us')) {
      nav.classList.remove('nav--opened');
      header.classList.remove('header--with-nav-opened');
      toggle.classList.remove('btn-toggle--close');
      body.classList.remove('body-with-open-modal');
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


function checkWebP(callback){
  let webP = new Image();
  webP.onload = webP.onerror = function(){
    callback(webP.height == 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};
checkWebP(function(support){
  if(support) document.body.classList.add("webp");
  else document.body.classList.add("no-webp");
});

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  document.body.classList.add("mac");
} else {
  document.body.classList.add("pc");
}


let buttons = document.querySelectorAll("[data-modal]");
let popup;
let popups = document.querySelectorAll(".modal-block");

let close = document.querySelectorAll(".btn--close");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    let modalId = '#' + buttons[i].getAttribute('data-modal');
    popup = document.querySelector(modalId);
    // popup.classList.remove("hide");
    // popup.classList.add("modal-open");
    // document.querySelector('body').classList.add('body-with-open-modal');
    popup.classList.toggle("hide");
    popup.classList.toggle("modal-open");
    document.querySelector('body').classList.toggle('body-with-open-modal');

  });
}

function closepopup() {
  // popup.classList.add("hide");
  // popup.classList.remove("modal-open");

  popups.forEach(item => {
    item.classList.add("hide");
    item.classList.remove("modal-open");
    document.querySelector('body').classList.remove('body-with-open-modal');
  })
}

//закрываем по крестику
if (close) {

  close.forEach(close => {
    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      closepopup();
    });
  })
}


//закрытие окна по ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-open")) {
      closepopup();
    }
  }
});

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


if (popups) {

  popups.forEach(popup =>
    popup.addEventListener("mouseup", function (evt) {
      if (evt.target.closest('.modal') === null) {
        closepopup();
      }
    })
  )
}

