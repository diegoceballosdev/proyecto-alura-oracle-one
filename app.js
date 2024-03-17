
//Funcion que hara la encriptacion
function encriptar(){
    var texto = document.querySelector("#texto").value
    var textoEscrito = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.querySelector(".texto-encriptado").value = textoEscrito;
    document.querySelector("#texto").value;
}

var botonEncriptar = document.querySelector("#botonEncriptar");
botonEncriptar.onclick = encriptar;

//Funcion que hara la desencriptacion
function desencriptar() {
    var texto = document.querySelector("#texto").value
    var textoEscrito = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.querySelector(".texto-encriptado").value = textoEscrito;
    document.querySelector("#texto").value;
}

var botonDesencriptar = document.querySelector("#botonDesencriptar");
botonDesencriptar.onclick = desencriptar;

//Permite que la zona de introduccion de texto se pueda expandir 
const textarea = document.getElementById('texto');

textarea.addEventListener('textarea', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

//Permite que la zona de texto encriptado ser pueda expandir 
const imput = document.getElementById("texto-encriptado");

imput.addEventListener('textarea', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
