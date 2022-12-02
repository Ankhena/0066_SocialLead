"use strict";

const body = document.querySelector('body');

// toggle menu
const toggle = document.querySelector('.btn-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');


if (toggle !== null) {
  document.querySelector('body').classList.remove('no-js');

  toggle.addEventListener('click', function () {
    //nav.classList.toggle('nav--opened');
    header.classList.toggle('header--opened');
    header.classList.toggle('header--mini');
    //toggle.classList.toggle('btn-toggle--close');
    //body.classList.toggle('body-with-open-modal');

    //document.querySelector('.header__big-nav').classList.toggle('header__big-nav--mini');
  });
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

const getHeaderHeight = () => {
  let headerHeight = document.querySelector('.header').getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
}

const getNavHeight = () => {
  let headerHeight = document.querySelector('.nav').getBoundingClientRect().height;
  document.documentElement.style.setProperty('--nav-height', headerHeight + 'px');
}


getHeaderHeight();
getNavHeight();

window.addEventListener('resize', () => {
  getHeaderHeight();
  getNavHeight();
});


const reduceHeader = () => {
  const scrollSize = 70;
  //if (document.body.scrollTop > scrollSize || document.documentElement.scrollTop > scrollSize) {
  if (document.documentElement.scrollTop > scrollSize) {
    header.classList.remove('header--opened');
    header.classList.add('header--mini');


  }

  else if (document.body.scrollTop < (scrollSize - 20) || document.documentElement.scrollTop < (scrollSize - 20))
  {
     // header.classList.add('header--opened');
     // header.classList.remove('header--mini');
  }

}



window.addEventListener('scroll', () => {
  reduceHeader();
});


const bigLinks = document.querySelectorAll('.header__big-link');
const whoAreYou = document.querySelector('.header__who-are-you')
const headerParts = document.querySelectorAll('.header__title-part');
const bigBlocks = document.querySelectorAll('.blogger, .advertiser');

bigLinks.forEach(link => {

  // навели мышку
  link.addEventListener('mouseenter', (e) => {
    let currentLink = e.target.dataset.target;
    let currentHeaderPart = document.querySelector(`.header__title-part[data-part=${currentLink}]`);
    currentHeaderPart.classList.add('active');
  })

  // отвели мышку
  link.addEventListener('mouseleave', (e) => {
    let currentLink = e.target.dataset.target;
    let currentHeaderPart = document.querySelector(`.header__title-part[data-part=${currentLink}]`);
    currentHeaderPart.classList.remove('active');
  })

  // клик по пункту
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let currentLink = e.target.dataset.target;
    let currentPage = document.getElementById(currentLink);
    bigBlocks.forEach(block => {
      block.classList.remove('active');
    });

    currentPage.classList.add('active');

    bigLinks.forEach(block => {
      block.classList.remove('active');
    });
    link.classList.add('active');

  })

})

