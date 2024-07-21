let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let nuemeroMaximo = 10;
let nuemeroMaximoJuegos = 3;
let numeroDeJuegos= 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? "intento." : "intentos."}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    
    } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento("p","El numero secreto es menor");
            }
            else {
                asignarTextoElemento("p", "El numero secreto es mayor");
            }
        numeroIntentos++;
        limpiarCaja();
    return;
    }
    
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value ="";
    
}




function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*nuemeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    console.log(numeroDeJuegos)

    // si ya jugamos el numero maximo de veces
    if (numeroDeJuegos == nuemeroMaximoJuegos) {
        
        asignarTextoElemento("p","Ya jugo el maximo de veces posibles")
    
    } else {

        // si ya sorteamos todos los nuemeros
        if (listaNumerosSorteados.length == nuemeroMaximo){
            listaNumerosSorteados.length = 0;
            numeroDeJuegos++;
            return generarNumeroSecreto();
            
        } else {

                //si el num geneado esta incluido en la lista 
                if (listaNumerosSorteados.includes(numeroGenerado)) {
                    return generarNumeroSecreto();
                } else {
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
           }   
        }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${nuemeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}


function reiniciarJuego() {

//Limpiar Caja
limpiarCaja();
//Indicar intervalo de numeros
//Generar el numero aleatorio
//Iniciar el contador
condicionesIniciales();
//Deshabilitar el boton nuevo juego
document.getElementById("reiniciar").setAttribute("disabled","true");
}
condicionesIniciales();

