
const btnToggle = document.querySelector(".toggle")
const navbar = document.querySelector(".navbar ul")

console.log(navbar)
btnToggle.addEventListener("click" , ()=>{
    navbar.classList.toggle("show")
})

const navLinks = document.querySelectorAll(".navbar li")

navLinks.forEach(link=>{
    link.addEventListener("click" , ()=>{
        navbar.classList.remove("show")
    })
})




// Auto write
const textoSobre = document.querySelector(".textAbout")
function writeText(text){
    textoSobre.innerHTML = ""
    const arrayLetter = text.split("")
    console.log(arrayLetter)
    arrayLetter.forEach((letter , index)=>{
        setTimeout(()=>{
            textoSobre.innerHTML += letter
        } , 30*index)
    })
}

writeText(textoSobre.innerHTML)


// Show mais e menos projects
const projectsExtras = document.querySelectorAll(".more")
const btnShowProjectsE = document.querySelector(".projects .btn-show")
btnShowProjectsE.addEventListener("click" , ()=>{
    projectsExtras.forEach(project=>{
            project.classList.toggle("more")
    })

    if(btnShowProjectsE.innerHTML == "Show less"){
        btnShowProjectsE.innerHTML = "Show more"
        return
    }
    btnShowProjectsE.innerHTML = "Show less"
})