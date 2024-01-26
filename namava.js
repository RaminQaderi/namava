const menuBtn = document.getElementById('menuBtn')
const drop = document.querySelector('.dropdown')
const back = document.querySelector('.backmenu')


menuBtn.addEventListener('click',()=>{
        drop.classList.add('show')
      back.classList.add('show')
})

back.addEventListener('click',()=>{
    drop.classList.remove('show')
    back.classList.remove('show')
})


