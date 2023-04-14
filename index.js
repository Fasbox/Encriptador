function encriptar() {
    let texto = document.getElementById("textoEncriptar").value;
    // let tituloMensaje = document.getElementById("tituloZonaEncriptado");
    let parrafo = document.getElementById("parrafo");
    let infografia = document.getElementById("infografia");

    let textoEncriptado = texto
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("textoEncriptar").value.length != 0) {
        document.getElementById("textoEncriptar").value = textoEncriptado;
        document.getElementById("tituloZonaEncriptado").textContent = "Aquí lo tienes recién salido del horno"
        parrafo.textContent = "";
        infografia.src = "./recursos/Encriptar.png";
    } else {
        infografia.src = "./recursos/Researching.png";
        parrafo.textContent = "Recuerda ingresar un texto"
        alert("Debes ingresar algún texto");
    }
}