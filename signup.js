const phone = document.getElementById('phone')






function showMasseg (){
    if(phone.value != '' ){
        location.href = "./index.html";
    }else{
        erortext.innerHTML= 'جای خالی را پر کنید'
        erortext.style.color= 'red'
    }
}  