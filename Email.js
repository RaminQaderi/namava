const email = document.getElementById('email')
const password = document.getElementById('password')





function showMasseg (){
    if(email.value != '' & password.value != ''){
        location.href = "./index.html";
    }else{
        erortext.innerHTML= 'جای خالی را پر کنید'
        erortext.style.color= 'red'
    }
}  