let numeroMagico= 0;
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", adivinar);

function comenzarJuego(){
    numeroMagico = Math.floor(Math.random()*(6-1+1)+1);
    
}

function adivinar(e){
    e.preventDefault();
    let numeroIngresado = document.querySelector("#inputAdivinar").value;
    
    if(numeroIngresado == numeroMagico){
        alert("Felicidades, adivinaste, espero que no hayas hecho trampa >.<");
    }else if(numeroIngresado<numeroMagico){
        alert("Ops! Te falto poquito, intenta de nuevo!");
    }else{
        alert("Wee! te zarpaste, intenta de nuevo!")
    }
}