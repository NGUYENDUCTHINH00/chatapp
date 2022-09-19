import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { renderErrorMessage } from "../view/index";
import { setActiveScreen } from "../view/index";
export let createNewUser = (
  firstname,
  lastname,
  email,
  password,
  passwordagain
) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      renderErrorMessage("sever-error-message1", "SIGN UP SUCCESS");
      renderErrorMessage("sever-error-message", "");
      setTimeout(function () {
        setActiveScreen("loginPage");
      }, 2 * 1000);
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("sever-error-message", errorMessage);
      renderErrorMessage("sever-error-message1", "");
    });
};
export let createNewUser123 = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      renderErrorMessage("loginSuccess", "SIGN IN SUCCESS");
      renderErrorMessage("sign1", "");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("sign1", errorMessage);
      renderErrorMessage("loginSuccess", "");
    })
    .finally(() => {
      setTimeout(function () {
        setActiveScreen("chat");
      }, 2 * 1000);
    });
};
