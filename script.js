const btn = document.querySelector('.btn')
const menuItems = document.querySelector('.menu-items')
const crossbtn = document.querySelector('.crossbtn')
const mainbody = document.querySelector("body")

btn.addEventListener('click', () => {
   menuItems.classList.toggle('show')
   btn.classList.add('hidebtn')
   crossbtn.classList.add('showbtn')
   mainbody.classList.toggle("overflow")
})

crossbtn.addEventListener('click',() => {
    menuItems.classList.toggle('show')
    btn.classList.remove('hidebtn')
    crossbtn.classList.remove('showbtn')
    mainbody.classList.toggle('overflow')
})
