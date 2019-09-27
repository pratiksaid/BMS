let prism = document.querySelector(".rec-prism");

function showSignup(){
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin(){
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword(){
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe(){
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs(){
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou(){
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

function send(data) {
var data_pas=data.a_password.value;
///fake data pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required=""
//var passw=  /^[A-Za-z]\w{7,14}$/;
var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
var emailVal= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//te=a.a_password
//alert(data_pas)
if(data_pas.match(passw)) 
{ 
alert('Correct...');
return true;
}
else
{ 
alert('Wrong Password...!');
return false;
}
}

