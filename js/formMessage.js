const scriptURL = 'https://script.google.com/macros/s/AKfycbzyQtN-v2UihzR6lGLpn9hu6G4d8EPzOF7Bhh_FT4fI8VWsfvfkX_z9GRlN25P9qDQn/exec'
const form = document.forms['contact-us']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        // displayMsg()
    })
    .catch(error => console.error('Error!', error.message))
})

// function displayMsg(){
//     const modal = document.querySelector(".modal")
//     const name = document.querySelector("#name")
//     const email = document.querySelector("#email")
//     const message = document.querySelector("#message")
//     modal.style.opacity = 1
//     setTimeout(()=>{
//         name.value = ''
//         email.value = ''
//         message.value = ''
//         modal.style.opacity = 0
//     } , 1500)
// }