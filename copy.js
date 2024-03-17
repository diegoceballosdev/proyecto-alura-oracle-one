//tiene el proposito de imprementar el funcionamiento del boton copiar texto
function copiar(){
    var textoUno = document.querySelector("#texto-encriptado").value;
    var boton1 = document.querySelector(".copiar"); 

    navigator.clipboard.writeText(textoUno).value;
    boton1.textContent = "copiado"

} 

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiar;
