const menuBtn = document.getElementById('menuBtn')
const drop = document.querySelector('.dropdown')
const back = document.querySelector('.backmenu')
const slider = document.querySelector('.banner')
const slide = document.querySelectorAll('.slide')
const btnleft=document.querySelector('.icons')
const btnRight=document.querySelector('.icons2')
let useslider = 1;

menuBtn.addEventListener('click',()=>{
        drop.classList.add('show')
      back.classList.add('show')
})

back.addEventListener('click',()=>{
    drop.classList.remove('show')
    back.classList.remove('show')
})


function nextslider(){
  useslider+=1;
  if(useslider>= slide.length)
    useslider=0
initslider()
}

function prevslider(){
  useslider-=1;
  if(useslider < 0)
  useslider=slide.length-1
initslider()
}




function initslider(){
  slide.forEach(item=>{
    item.style.opacity= '0';
})


  slide[useslider].style.opacity = '1';
}
btnRight.addEventListener('click', nextslider)
btnleft.addEventListener('click', prevslider)
initslider()
