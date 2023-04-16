function encriptar() {
    let textoEncriptar= document.getElementById("textoEncriptar").value;
    let tituloMensaje = document.getElementById("tituloZonaEncriptado");
    let parrafo = document.getElementById("parrafo");
    let infografia = document.getElementById("infografia");

    // Preguntar por orden
    let textoEncriptado = textoEncriptar
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (textoEncriptar.length != 0) {
        document.getElementById("textoEncriptar").value = textoEncriptado;
        tituloMensaje.textContent = "Aquí lo tienes recién salido del horno"
        parrafo.textContent = "";
        infografia.src = "./recursos/Encriptar.png";
    } else {
        infografia.src = "./recursos/Researching.png";
        parrafo.textContent = "Recuerda ingresar un texto";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("textoEncriptar").value;
    let tituloMensaje = document.getElementById("tituloZonaEncriptado");
    let parrafo = document.getElementById("parrafo");
    let infografia = document.getElementById("infografia");

    let textoEncriptado = texto
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("textoEncriptar").value = textoEncriptado;
        tituloMensaje.textContent = "Aquí lo tienes recién salido del horno"
        parrafo.textContent = "";
        infografia.src = "./recursos/Desencriptar.png";
    } else {
        infografia.src = "./recursos/Researching.png";
        parrafo.textContent = "Recuerda ingresar un texto";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }

}