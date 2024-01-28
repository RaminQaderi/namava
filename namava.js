const menuBtn = document.getElementById('menuBtn')
const drop = document.querySelector('.dropdown')
const back = document.querySelector('.backmenu')
const slider = document.querySelector('.banner')
const slide = document.querySelectorAll('.slide')
const btnleft = document.querySelector('.icons')
const btnRight = document.querySelector('.icons2')
const dots = document.querySelector('.dots')


slide.forEach(item => {

  const newdots = document.createElement('div')
  newdots.classList.add('dot')
  dots.appendChild(newdots)
})

const sliderdot = document.querySelectorAll('.dot')

let useslider = 0;





menuBtn.addEventListener('click', () => {
  drop.classList.add('show')
  back.classList.add('show')
})

back.addEventListener('click', () => {
  drop.classList.remove('show')
  back.classList.remove('show')
})


function nextslider() {
  useslider += 1;
  if (useslider >= slide.length)
    useslider = 0
  initslider()
}

function prevslider() {
  useslider -= 1;
  if (useslider < 0)
    useslider = slide.length - 1
  initslider()
}




function initslider() {

 
  slide.forEach(item => {
    item.style.opacity = '0';


    sliderdot.forEach(item =>{
      item.classList.remove('active')
    })
  })


  slide[useslider].style.opacity = '1';
  sliderdot[useslider].classList.add('active')
}
btnRight.addEventListener('click', nextslider)
btnleft.addEventListener('click', prevslider)

initslider()
setInterval(nextslider,5000)

sliderdot.forEach((item,index)=>{
  item.addEventListener('click', ()=>{
   useslider = index
   initslider()

  })
})


