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

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            html: '<b class="sweetAlert"> ¡Encriptado! </b>'
          })

    } else {
        infografia.src = "./recursos/Researching.png";
        parrafo.textContent = "Recuerda ingresar un texto";

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Recuerda Ingresar un texto',
          })
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

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            html: '<b class="sweetAlert"> ¡Desencriptado! </b>'
          })

    } else {
        infografia.src = "./recursos/Researching.png";
        parrafo.textContent = "Recuerda ingresar un texto";
    }
}

function copiar() {
    let textoACopiar = document.getElementById("textoEncriptar").value;

    navigator.clipboard.writeText(textoACopiar);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        html: '<b class="sweetAlert"> ¡Copiado! </b>'
      })
}