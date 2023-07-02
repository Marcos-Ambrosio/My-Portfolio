const itensAbout = document.querySelectorAll(".section-about .content > div")
const navLinkItensAbout = document.querySelectorAll(".section-about .nav-link li")

function clearContentAbout(){
    itensAbout.forEach(item => {
        item.classList.remove("show")
    })
    navLinkItensAbout.forEach(li => { 
        li.classList.remove("active")
    })
}

navLinkItensAbout.forEach(li => {
    li.addEventListener("click" , ()=>{
        clearContentAbout()
        try {
            document.querySelector(`.section-about .content .${li.className}`).classList.add("show")
        } catch {

        }
        li.classList.add("active")

    })
})