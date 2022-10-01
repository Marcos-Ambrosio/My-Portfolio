var pin = document.querySelector(".pin") // A senha secreta
var tries = document.querySelector(".tries") // container das senhas que são digitadas
var unlock = document.querySelector(".unlock") // Botão pra desbloqueae
var giveUp = document.querySelector(".giveUp")
var reset = document.querySelector(".reset")
var hit = document.querySelector(".hit")
var buttonTry = document.getElementsByClassName("buttonTry") // Cada botão das senhas que são digitadas
var msgBlock = document.querySelector(".msg")
var container = document.querySelector(".container")
var buttons = document.querySelectorAll(".buttons button")
var finish = false
var hitPoint = false

function getPin(){ // Gerar uma senha alertoriamente e por no quadro
    pinArray = []
    pin.innerHTML = ''
    do {
        var numRandom = Math.round(Math.random()*8)+1
        if(pinArray.includes(numRandom)){

        } else {
            pinArray.push(numRandom)
        }
    } while (pinArray.length < 4);
    for(let i=0;i<4;i++){
        pin.innerHTML += `<span>${pinArray[i]}</span>`
    }
} // fim

getPin()

function putNewTries(){ // Por tentativas
    tries.innerHTML += `<div class="tries-group">
        <button class='buttonTry' onclick='play(this)'></button>
        <button class='buttonTry' onclick='play(this)'></button>
        <button class='buttonTry' onclick='play(this)'></button>
        <button class='buttonTry' onclick='play(this)'></button>
    </div>
    `
} // fim

putNewTries()

function play(button){ // mudar numero de um box das tentativas
    
    if(button.innerHTML == ''){
        button.innerHTML = 1
    } else {
        if(button.innerHTML < 9){
            button.innerHTML = Number(button.innerHTML) + 1
        } else {
            button.innerHTML = 1
        }
    }
}

var unclockClick = 0 // O lugar ou caixa das tentantivas que estão a ser mudadas , primeira tentativa igual a zero
// caso  seja 0 então sera o primeiro campo a ser configurado , caso 1 o segundo ...
// buttontry é um array de 4 posicoes que guarda os valores das tentativas

unlock.addEventListener("click" , ()=>{

    var pinTry = [] // pin que voçê gerou

    for(let i=unclockClick*4;i<buttonTry.length;i++){
        pinTry.push(buttonTry[i].innerHTML)
    } // Por o pin no array

    
    var codeRed = [] // Ver quais numeros estão no pin escondido e o pin que voçê gerou
    for(let i=0;i<4;i++){
        for(let a=0;a<4;a++){
            if(pinTry[a] == pinArray[i]){
                if(codeRed.includes(pinTry[a])){

                } else {
                    codeRed.push(pinTry[a])
                }
            }
        }
    }

    var codeGreen = [] // Ver se os números estão certos na posição certa
    for(let i=0;i<4;i++){
        if(pinTry[i] == pinArray[i]){
            if(codeGreen.includes(pinTry[i])){

            } else {
                codeGreen.push(pinTry[i])
            }
        }
    }


    for(let i=unclockClick*4;i<buttonTry.length;i++){ // pintar de cinza tudo que já foi passado
        buttonTry[i].style.color = "#eee"
    }

    for(let i=0;i<codeRed.length;i++){ // pintar vermelha numeros certas na posição errada
        buttonTry[unclockClick*4+i].style.background = "#933"
        buttonTry[unclockClick*4+i].style.color = "#933"
    }

    for(let i=0;i<codeGreen.length;i++){ // pintar verde numeros certas na posição certa
        buttonTry[unclockClick*4+i].style.background = "#393"
        buttonTry[unclockClick*4+i].style.color = "#393"
    }

    if(codeGreen.length == 4 && finish == false){ // Se todos forem verde ganhou
         Looping("Você venceu")
         finish = true
    } else  if(unclockClick == 5 && finish == false){ // se 6 tentativas forem disperdisadas perdeu
         Looping("Você perdeu")
         finish = true
    } else { // Se ainda tem mais tentativas , continue
        if(unclockClick < 5 && finish == false){
            unclockClick++
            // isso significa que agora salta pra outro campo de tentativas
        putNewTries() // Criar mais campos
        } 
    }
    if(unclockClick > 4){ // mudar texto se for pra finalizar
        unlock.innerHTML = "FindOut"
    } 

})

function Looping(msg){

    cont = 0
         timeLooping = setInterval(()=>{
            pin.querySelectorAll("span")[cont].style.color = "#393"
            cont++
            if(cont >= 4){
                clearInterval(timeLooping)
                container.style.opacity = "0.5"
                container.style.background = "#333"
                msgBlock.style.display = "block"
                msgBlock.innerHTML = msg
                for(let i=0;i<4;i++){
                    buttons[i].style.background = "#333"
                }
                reset.style.opacity = "1"
                reset.style.background = "#159"
                finish = false
                hit.style.background = '#333'
            }
        } , 800)
}

giveUp.addEventListener("click" , ()=>{
    finish = true
    Looping("Jogo encerrado")
})

reset.addEventListener("click" , ()=>{
    if(finish == false){
        getPin()
        for(let i=0;i<4;i++){
            buttons[i].style.background = "#159"
        }
        container.style.opacity = "1"
        container.style.background = "white"
        msgBlock.style.display = "none"
        finish = false
        unclockClick = 0
        hitPoint = false
        unlock.innerHTML = "Unlock"
        tries.innerHTML = ''
        hit.style.background = '#159'
        putNewTries()

    }
})

hit.addEventListener("click" , ()=>{
    if(hitPoint == false && finish == false){
        var hitRandom = Math.round(Math.random()*3)
        pin.getElementsByTagName("span")[hitRandom].style.color = "#393"
        hitPoint = true
    }
    hit.style.background = '#333'
})