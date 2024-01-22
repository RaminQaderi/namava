const phone = document.getElementById('phone')
const password = document.getElementById('password')





function showMasseg (){
    if(phone.value != '' & password.value != ''){
        location.href = "./index.html";
    }else{
        erortext.innerHTML= 'جای خالی را پر کنید'
        erortext.style.color= 'red'
    }
}  