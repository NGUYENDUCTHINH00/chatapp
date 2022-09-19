// Controller làm nhiệm vụ validate thông tin
// Tạo hàm validateLoginInfo nhận vào email và password trong controller
// Export hàm validateLoginInfo
// Import hàm validateLoginInfo trong view
// Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
// từ form

// Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
// có phải email hợp lệ không, có bỏ trống trường nào không

// Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
// từ những trường hợp validate đó
// Làm giống hệt các bước trên với những màn resetpassword và register
import { renderErrorMessage } from "../view";
import { createNewUser } from "../model/index";
import { setActiveScreen } from "../view";
import { createNewUser123 } from "../model/index";
export let validateLoginPage = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("errEmail", "! Please enter your email =((");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("errEmail", "Invalid email");
  } else {
    renderErrorMessage("errEmail", "");
  }

  if (!password) {
    renderErrorMessage("errPassword", "! Please enter your password =((");
  } else {
    renderErrorMessage("errPassword", "");
  }
  if (email && password) {
    createNewUser123(email, password);
  }
};
export let validateregister = (
  firstname,
  lastname,
  email,
  password,
  passwordagain
) => {
  const registerRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!firstname) {
    renderErrorMessage("errfn", "! Please enter your firstname =((");
  } else {
    renderErrorMessage("errfn", "");
  }
  if (!lastname) {
    renderErrorMessage("errln", "! Please enter your lastname =((");
  } else {
    renderErrorMessage("errln", "");
  }
  if (!email) {
    renderErrorMessage("errem", "! Please enter your email =((");
  } else {
    renderErrorMessage("errem", "");
  }
  if (!password) {
    renderErrorMessage("errps", "! Please enter your password =((");
  } else {
    renderErrorMessage("errps", "");
  }
  if (!passwordagain) {
    renderErrorMessage("errpss", "! Please enter your password  =((");
  } else if (passwordagain !== password) {
    renderErrorMessage("errpss", "! Please check your password =((");
  } else {
    renderErrorMessage("errpss", "");
  }
  if (
    firstname &&
    lastname &&
    email &&
    password &&
    passwordagain &&
    password === passwordagain
  ) {
    createNewUser(firstname, lastname, email, password, passwordagain);
  }
};

export let validatereset = (email) => {
  const resetRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("erreml", "! Please enter your email =((");
  } else {
    renderErrorMessage("erreml", "");
  }
};
