const itensSkills = document.querySelectorAll(".section-about .skills .texts > div")
const navLinkItensSkills = document.querySelectorAll(".section-about .skills .icons i")

function clearContentSkills(){
    itensSkills.forEach(item => {
        item.classList.remove("show")
    })
    navLinkItensSkills.forEach(li => { 
        li.classList.remove("active")
    })
}

navLinkItensSkills.forEach(li => {
    li.addEventListener("click" , ()=>{
        clearContentSkills()
        try {
            document.querySelector(`.section-about .skills .texts .${li.id}`).classList.add("show")
        } catch {

        }
        li.classList.add("active")

    })
})