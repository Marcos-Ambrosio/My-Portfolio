import todosGeneros from './generos.js'

let teclado = document.querySelector(".teclado")
let teclas = document.getElementsByClassName("tecla")
let quadro = document.querySelector(".quadro")
let espacos = document.getElementsByClassName("espaco")
let boneco = document.querySelector("img")
let telapainel = document.querySelector(".painel")
let telajogo = document.querySelector(".jogo")
let erros   = 0
let tirar = true
let encerramento = true
let teclacerta = 0
let pontuacao = document.querySelector(".pontuacao")
let pontuacaof = document.querySelector(".pontuacaof")
let inputs = document.getElementsByClassName("input")


 // escolher o genero
let generoT = 'jogadores'
document.querySelector(".generos").addEventListener("input" , ()=>{
    const genero = document.querySelector("input:checked")
    generoT = genero.id
})


// Iniciar jogo

let pontos = 0

function novo(){
    boneco.src="img/img0.png"
    pontos = 0
}

document.querySelector(".play").addEventListener("click" , jogar)

function jogar(){
    
        // primeiro : Limpeza do jogo passado e inicio do outro
        
        quadro.innerHTML=""
        pontuacao.style.display="none"
        boneco.src="img/img0.png"
        encerramento = true
        erros = 0
        telajogo.style.background="#fff"
        boneco.style.display="block"
        pontuacao.style.display="none"
        teclacerta = 0
        palavrapasse()
        for(let i=0;i<26;i++){
            teclas[i].style.background="#333"
        }

        tecla.forEach(element => {
            element.status = ''
        });
    
        // Tempo pra trocar de tela
        let tempo = setTimeout(()=>{
            telajogo.style.display="block"
            telapainel.style.display="none"
        } , 400)


    
}

// colocar teclado

for(let i=0;i<26;i++){
    teclado.innerHTML+=`<input type='button' class='tecla'></input>`
}

const letras = ["Q" , "W" ,"E" , "R" , "T" , "Y" , "U" ,"I" , "O" , "P" , "A" , "S" ,"D" , "F" , "G" , "H" , "J" ,"K" , "L" , "Z" , "X" , "C" ,"V" , "B" , "N" , "M"]

for(let i=0;i<26;i++){
    teclas[i].value = letras[i]
}

// espacos no quadro e colocar palavra do jogo
 let x = 2
 function palavrapasse(){
    const chave = todosGeneros(generoT)
    let numAle = Math.floor(Math.random(1)*chave.length)
    
    let chaveEscolhida = chave[numAle]
    
    for(let i=0;i<chaveEscolhida.length;i++){
        let letra = chaveEscolhida.charAt(i)
        
        if(letra == " "){
            // se espaco tiver e branco , colocar um espaco
            quadro.innerHTML+=`<input type='button' value='${letra}' class='tab'></input>`
        } else {
            quadro.innerHTML+=`<input type='button' value='${letra}' class='espaco'></input>`
        }
        
    }

 }
 
const tecla = document.querySelectorAll(".tecla")
tecla.forEach(element => {
    element.addEventListener("click" , ()=>{
        digitar(element,element.value)
    })
});

function digitar(tecla , letra){

    let teclaclicada = letra

    try {
        // validacoes
        if(pontuacao.style.display=="block") throw ""
        if(tecla.status == "errada" || tecla.status == "certa") throw ""
        if(erros >= 5) throw ""
        
        // se tecla clicada for errada
    for(let i=0;i<espacos.length;i++){
        
        if(espacos[i].value != teclaclicada){
            tecla.style.background="#933"
            tecla.status = "errada"
        }
        
    }

    // se tecla clicada for certa
    for(let i=0;i<espacos.length;i++){
        
        if(espacos[i].value == teclaclicada){
            tecla.status = "certa"
            espacos[i].style.color="#333"
            tecla.style.background="#393"
            teclacerta++
        }
    }
   
    if(tecla.status == "errada"){
        erros++
        boneco.src="img/img"+erros+".png"
    }
    // fim tecla clicada errada

    } catch (error) {
        
    }

    // derrota
    if(erros >= 5 && encerramento==true){

        for(let i=0;i<espacos.length;i++){
            espacos[i].style.color="#333"
        }
        let tempo=setTimeout(()=>{
            telajogo.style.display="none"
            telapainel.style.display="block"
            pontuacaof.innerHTML=`PONTOS : ${pontos}`
            novo()
        } , 3000)

        encerramento = false
        
    }

    // vitoria
    if(espacos.length == teclacerta){
        
        pontos = pontos + teclacerta - parseInt(2*erros)
        if(pontos<=0){
            pontos = 1
        }
        telajogo.style.background="#cfc"
        boneco.style.display="none"
        pontuacao.style.display="block"
        pontuacao.innerHTML=`PONTOS : ${pontos}`
        let tempo=setTimeout( ()=>{
        jogar()
        } , 3000)
    }
    
}