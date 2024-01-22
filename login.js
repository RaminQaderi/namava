const phone = document.getElementById('phone')
const password = document.getElementById('password')




function showMasseg (){
    if(phone.value == '09146768815' & password.value == '8815Ramin'){
        erortext.innerHTML = 'welcome';
        erortext.style.fontsize = '18px'
        erortext.style.color= 'green'
        
    }else{
        erortext.innerHTML= 'جای خالی را پر کنید'
        erortext.style.color= 'red'
    }
}  