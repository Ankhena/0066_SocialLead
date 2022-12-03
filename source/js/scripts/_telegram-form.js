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
