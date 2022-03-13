var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");


var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){
    event.preventDefault();

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

}


function register(){
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("E-mail gerekli.");
        return ;
    }
    else if (password == ""){
        alert("şifre gerekli.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("şifre gerekli.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Parola eşleşmiyor Parolanızı yeniden yazın.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert("Sayın " + email + " kayıt Oldugun icin Tesekkurler. \nSimdi Giris Yapabilirsin.");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " zaten Kayıtlı.");
        return ;
    }
}
function login(){
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("E-posta Gerekli ");
            return ;
        }
        alert("E-posta mevcut degil.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Sifre Gerekli.");
            return ;
        }
        alert("Sifre Yanlış.");
        return ;
    }
    else {
        
        if (confirm(email + " Basarili.. Giris Yapabilirsiniz.")) {
            document.location.href = "anasayfa.html";}
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}
