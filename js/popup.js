let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");
let login = popup.querySelector("[name=login]");
let password = popup.querySelector("[name=password]");
let form = popup.querySelector("form");
// let storage = localStorage.getItem("login");

let isStorageSupport = true;
let storage = "";


try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

//при клике появляется модальное окно
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  console.log("Click Click");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
//при клике на крестек закрывается модальное окно
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  console.log("Click Click");
});
// проверка заполнены ли поля логин и пароль
form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
