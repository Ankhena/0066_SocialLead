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

//include("scripts/_scroll.js")
//////////////////////////////////////////////////////////////////
// animation

const animatedElems = document.querySelectorAll('.intro__text span, .about__descr p, .about__stages, .about__benefits li, .cases__item, .vacancies__item, .ask-question__form, .footer__nav, .footer__social, .footer__address');

animatedElems.forEach((elem) => {
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        elem.classList.add('animation');
      }
    }, {
      threshold: 0.01
    }
  ).observe(elem)
})

// end animation
//////////////////////////////////////////////////////////////////


const bigLinks = document.querySelectorAll('.header__big-link');
const whoAreYou = document.querySelector('.header__who-are-you')
const headerParts = document.querySelectorAll('.header__title-part');
const bigBlocks = document.querySelectorAll('.blogger, .advertiser');
const otherBlocks = document.querySelectorAll('.main-block, .footer');

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

    //otherBlocks.classList.toggle('hide');

  })

})


//////////////////////////////////////////////////////////////////
// _telegram-form

const tgForm = document.querySelector("#tg-form");
const tgFields = document.querySelectorAll("#tg-form input, #tg-form textarea");
const tgSubmitBtn = document.querySelector('#tg-form [type="submit"]');

let tgFormUser;
let tgFormCommunication;
let tgFormText;
let tgFormConditions;
let tgFormAction;

// клиент
// let tgChatID = '-619933979';
// let tgChatBot = '2079108145:AAG22VqgLvORI8_wo8uVcOwHgIVo28hVH6Q'

let tgChatID = '-1001775101104';
let tgChatBot = '1957445015:AAEI6SmBmXdg3V2e-IBy1cCEbg0OkKJreFQ'


tgFields.forEach((field) =>
  field.addEventListener("input", (e) => {
    let fieldName = e.target.getAttribute("name");

    if (fieldName === "user") {
      tgFormUser = e.target.value;
    } else if (fieldName === "email") {
      tgFormCommunication = e.target.value;
    } else if (fieldName === "phone") {
      tgFormText = e.target.value;
    }
    else if (fieldName === "conditions") {
      tgFormConditions = e.target.value;
    }
    tgFormAction = `https://api.telegram.org/bot${tgChatBot}/sendMessage?chat_id=${tgChatID}&parse_mode=html&&text=%3Cb%3EName%3C/b%3E%0A${tgFormUser}%0A%3Cb%3EPreferred%20communication%20method%3C/b%3E%0A${tgFormCommunication}%0A%3Cb%3EMessage%3C/b%3E%0A${tgFormText}`;

    tgForm.setAttribute("action", tgFormAction);
  })
);

// по кнопке в форме

const okBlock = document.querySelector("#is-valid-ok");
const errorBlock = document.querySelector("#is-valid-error");

tgSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // tgForm.submit();

  if (tgFormUser && tgFormCommunication && tgFormText) {
    fetch(tgFormAction, { method: "POST" });
    okBlock.classList.remove("hide");
  } else {
    errorBlock.classList.remove("hide");
  }
});

// end telegram-form
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// highlight-menu

const mainBlocks = document.querySelectorAll(".main-block section, footer");
const navClass = "floating-menu__link"
const navLinks = document.querySelectorAll(`.${navClass}`);

//const animatedElems = document.querySelectorAll('h1, h2, .clubs__item, .girls__item');

mainBlocks.forEach((elem) => {
  new IntersectionObserver(
    (entries) => {
      //let sectionID = elem.getAttribute("id");
      let sectionID = elem.id;
      let currentLink = document.querySelector(`.${navClass}[href="#${sectionID}"]`);


      if (entries[0].isIntersecting) {
        elem.classList.add('visible');
        if (currentLink) {
          currentLink.classList.add('active');
        }

      } else {
        elem.classList.remove("visible");
        if (currentLink) {
          currentLink.classList.remove('active');
        }

      }
    },
    {
      threshold: 0.3,
    }
  ).observe(elem);
});

// end highlight-menu
//////////////////////////////////////////////////////////////////

