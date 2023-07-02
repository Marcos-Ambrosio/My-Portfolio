const menuBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".close-btn")
const navbar = document.querySelector("header .navbar")
const menuLinks = document.querySelectorAll(".navbar li a")
const header = document.querySelector(".header")

menuBtn.addEventListener("click" , ()=> {
    document.body.style.overflow = "hidden"
    navbar.classList.toggle("show")
})

console.log(menuLinks)

closeBtn.addEventListener("click" , ()=> {
    document.body.style.overflow = "auto"
    navbar.classList.toggle("show")
})


menuLinks.forEach(link => {
    link.addEventListener("click" , ()=>{
        document.body.style.overflow = "auto"
        navbar.classList.remove("show")
    })
})


function scrollAnimation(){
    const height = window.pageYOffset 

    height < 100 ? header.classList.remove("background")
    : header.classList.add("background")
    
    clear()
    
    if(height < 500 && height >= 0) {
        menuLinks[0].classList.add("active")
        return 
    } 

    if(height >= 500 && height < 1400) {
        menuLinks[1].classList.add("active")
        return 
    }

    if(height >= 1400 && height < 2300) {
        menuLinks[2].classList.add("active")
        return 
    }

    if(height >= 2300 && height < 2800) {
        menuLinks[3].classList.add("active")
        return 
    }

    if(height >= 2800) {
        menuLinks[4].classList.add("active")
        return 
    }
    
}

function clear(){
    menuLinks.forEach(item => {
        item.classList.remove("active")
    })
}
scrollAnimation()
window.addEventListener("scroll" , scrollAnimation)