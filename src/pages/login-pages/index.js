import "./style.css";
export let loginPage = /*html*/ `
   <div class="container">
        <img  src="./Screenshot 2022-09-14 084647.png" alt="">
        <div style="margin-top: -60px;">
            <div style="font-size: 25px;color: #FFDF00;">Sign In NGUYỄN ĐỨC THỊNH RIKKEI</div>
            <div id="loginSuccess" style="color:#FFDF00; margin:20px 130px"></div>
            <div id="sign1" style="color:red;margin:0px 83px"></div>
            <div style=" background-color: #4c4a4a;width: 310px;  margin:auto; border-radius: 5px;">
                <form style="margin-top: 20px;
                padding-top: 1px;padding-bottom: 1px;"  id="login-form" action = "">  
                    <div style="color: #FFDF00;" class="abc">Email address</div>
                    <input class="abc" type="text" placeholder="Please enter your email" name="email">
                    <div style="color:red" class="abc" id="errEmail"></div>
                    <div style="color: #FFDF00;" class="abc">Password</div>
                    <input class="abc" type="text" placeholder="Please enter your password" name="password">
                    <div style="color:red" class="abc" id="errPassword"></div>
                    <button id="but" style="cursor: pointer;color: #FFDF00; " class="html">Login</button>
                </form>
            </div>
            <div id="ccc" style="margin:auto; margin-top:15px" class="newCreat">New to NĐT Rikkei? Creat an account</div></a>
            <div id="cccc" class="kkk" style="cursor: pointer;;color:#ffdd00c8; margin-left:140px; margin-top: 5px;">Forget your password? Click here</div></a>
        </div>
    </div>
`;
