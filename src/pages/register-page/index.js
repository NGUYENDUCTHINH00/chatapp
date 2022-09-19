export let register = /*html*/ ` <div class="container">
<img src="/Screenshot 2022-09-14 084647.png" alt="">
<div class="sign" style="margin-top: -60px;">

    <div style="font-size: 25px;color: #FFDF00;margin-top: -20px;">Creat new account</div>
    <div id="sever-error-message" style="color:red;margin-top:10px"></div>
    <div id="sever-error-message1" style="color:#FFDF00;"></div>
    <div style=" background-color: #4c4a4a;width: 310px; margin-top: 20px; border-radius: 5px;">
        <form id="register-form"  action = "">
            <div style="color: #FFDF00;" class="abc">First name</div>
            <input name="firstname" class="abc" type="text" placeholder="Please enter your first name">
            <div style="color:red; font-weight:600" class="abc" id="errfn"></div>
            <div  style="color: #FFDF00;" class="abc">Last name</div>
            <input name="lastname" class="abc" type="text" placeholder="Please enter your last name">
            <div style="color:red; font-weight:600" class="abc" id="errln"></div>
            <div style="color: #FFDF00;" class="abc">Email address</div>
            <input name="email" class="abc" type="text" placeholder="Please enter your email">
            <div style="color:red; font-weight:600" class="abc" id="errem"></div>
            <div style="color: #FFDF00;" class="abc">Password</div>
            <input name="password" class="abc" type="text" placeholder="Please enter your password">
            <div style="color:red; font-weight:600" class="abc" id="errps"></div>
            <div style="color: #FFDF00;" class="abc">Confirm Password</div>
            <input name="passwordagain" class="abc" type="text" placeholder="Confirm your password">
            <div style="color:red; font-weight:600" class="abc" id="errpss"></div>
            <div style="color:red; font-weight:600" class="abc" id="cpl"></div>
            <div style="color:pink; font-weight:600" class="abc" id="cpll"></div>
            <button style="cursor: pointer;color: #FFDF00;" class="html">Register</button>
        </form>
           

    </div>
    <div id="newww" class="newCreat">Already have an acount? Login here</div>
 
</div>

</div>
`;
