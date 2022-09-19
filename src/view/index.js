import { loginPage } from "../pages/login-pages/index";
import { register } from "../pages/register-page/index";
import { reset } from "../pages/reset-pass-pages/index";
import { chat } from "../pages/chat-pages/index";
import {
  validateLoginPage,
  validateregister,
  validatereset,
} from "../controller/index";

export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;

          validateLoginPage(email, password);
          // console.log(email, password);
          // let errEmail = document.getElementById("errEmail");
          // let errPassword = document.getElementById("errPassword");
          // if (email === "" && password === "") {
          //   errEmail.innerHTML = "Email không được bỏ trống";
          //   errEmail.style.display = "block";
          //   errPassword.innerHTML = "Password không được bỏ trống";
          //   errPassword.style.display = "block";
          // } else if (email === "") {
          //   errEmail.innerHTML = "Email không được bỏ trống";
          //   errEmail.style.display = "block";
          //   errPassword.style.display = "none";
          // } else if (password === "") {
          //   errPassword.innerHTML = "Password không được bỏ trống";
          //   errPassword.style.display = "block";
          //   errEmail.style.display = "none";
          // } else if (email === email && password === password) {
          //   setActiveScreen("chat");
          // }
        });
      }
      const ccc = document.getElementById("ccc");
      if (ccc) {
        ccc.onclick = () => {
          setActiveScreen("register");
        };
      }
      const cccc = document.getElementById("cccc");
      if (cccc) {
        cccc.onclick = () => {
          setActiveScreen("reset");
        };
      }
      break;
    case "register":
      if (app) {
        app.innerHTML = register;
      }
      const registerForm = document.getElementById("register-form");
      if (registerForm) {
        console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstname = registerForm.firstname.value;
          const lastname = registerForm.lastname.value;
          const email = registerForm.email.value;
          const password = registerForm.password.value;
          const passwordagain = registerForm.passwordagain.value;
          // console.log(email, password, firstname, lastname, passwordagain);
          // const err = document.getElementById("err");
          // const cpl = document.getElementById("cpl");
          // const cpll = document.getElementById("cpll");
          validateregister(firstname, lastname, email, password, passwordagain);
          // if (
          //   firstname === "" ||
          //   lastname === "" ||
          //   email === "" ||
          //   password === "" ||
          //   passwordagain === ""
          // ) {
          //   err.innerHTML = "!Chú ý : Không được bỏ trống =))";
          //   err.style.display = "block";
          // } else if (password !== passwordagain) {
          //   cpll.innerHTML = "!Chú ý : Password không giống nhau";
          //   cpll.style.display = "block";
          //   cpl.style.display = "none";
          //   err.style.display = "none";
          // } else {
          //   cpl.innerHTML = "Cussces nha =)))))))";
          //   cpl.style.display = "block";
          //   err.style.display = "none";
          //   cpll.style.display = "none";
          // }
        });
      }
      const neww = document.getElementById("newww");
      if (neww) {
        neww.onclick = () => {
          setActiveScreen("loginPage");
        };
      }
      break;
    case "reset":
      if (app) {
        app.innerHTML = reset;
      }
      const resetForm = document.getElementById("reset-form");
      if (resetForm) {
        console.log(resetForm);
        resetForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = resetForm.email.value;
          validatereset(email);
        });
      }
      const ccccc = document.getElementById("ccccc");
      if (ccccc) {
        ccccc.onclick = () => {
          setActiveScreen("loginPage");
        };
      }
      break;
    case "chat":
      if (app) {
        app.innerHTML = chat;
      }
      break;

    default:
      break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
