//////////////////////////////////////////////////////////////////
// _telegram-form

const tgForm = document.querySelector("#tg-form");
const tgFields = document.querySelectorAll("#tg-form input, #tg-form textarea");
const tgSubmitBtn = document.querySelector('#tg-form [type="submit"]');

let tgFormUser;
let tgFormCommunication;
let tgFormPhone;
let tgFormTg;
let tgFormConditions;
let tgFormAction;
let tgFormBrand;

// клиент
let tgChatID = '-708131291';
let tgChatBot = '5855694826:AAFV3eIS5_46SDYxnp4U7bYEaGdhgErXp0k'

// let tgChatID = '-1001775101104';
// let tgChatBot = '1957445015:AAEI6SmBmXdg3V2e-IBy1cCEbg0OkKJreFQ'

tgFields.forEach((field) =>
  field.addEventListener("input", (e) => {
    let fieldName = e.target.getAttribute("name");

    if (fieldName === "user") {
      tgFormUser = e.target.value;
    } else if (fieldName === "email") {
      tgFormCommunication = e.target.value;
    } else if (fieldName === "brand") {
      tgFormBrand = e.target.value;
    } else if (fieldName === "phone") {
      tgFormPhone = e.target.value;
    } else if (fieldName === "tg") {
      tgFormTg = e.target.value;
    } else if (fieldName === "conditions") {
      tgFormConditions = e.target.value;
    }
    //tgFormAction = `https://api.telegram.org/bot${tgChatBot}/sendMessage?chat_id=${tgChatID}&parse_mode=html&&text=%3Cb%3EName%3C/b%3E%0A${tgFormUser}%0A%3Cb%3EPreferred%20communication%20method%3C/b%3E%0A${tgFormCommunication}%0A%3Cb%3EMessage%3C/b%3E%0A${tgFormText}`;
    tgFormAction = `https://api.telegram.org/bot${tgChatBot}/sendMessage?chat_id=${tgChatID}&parse_mode=html&&text=%3Cb%3EИмя%3C/b%3E%0A${tgFormUser}%0A%3Cb%3EБренд%3C/b%3E%0A${tgFormBrand}%0A%3Cb%3EEmail%3C/b%3E%0A${tgFormCommunication}%3Cb%3E%0AТелефон%3C/b%3E%0A${tgFormPhone}%3Cb%3E%0AТелеграм%3C/b%3E%0A${tgFormTg}%3Cb%3E%0AСогласен%20с%20правилами%3C/b%3E%0A${tgFormConditions}`;

    tgForm.setAttribute("action", tgFormAction);
  })
);

// по кнопке в форме

const okBlock = document.querySelector("#is-valid-ok");
const errorBlock = document.querySelector("#is-valid-error");

tgSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // tgForm.submit();

  if (tgFormUser && tgFormCommunication && tgFormPhone) {
    fetch(tgFormAction, {method: "POST"});
    okBlock.classList.remove("hide");
  } else {
    errorBlock.classList.remove("hide");
  }
});

// end telegram-form
//////////////////////////////////////////////////////////////////
