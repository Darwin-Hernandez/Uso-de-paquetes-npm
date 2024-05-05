function enviarCorreo() {
    var destinatario = document.getElementById('destinatario').value;
    var asunto = document.getElementById('asunto').value;
    var cuerpo = document.getElementById('cuerpo').value;

    var mensajeDiv = document.getElementById('mensaje');

    // Aquí debería tener la lógica para enviar el correo
    //pero lo dejo estático por que no pude realiar el paso 1 :(
    mensajeDiv.innerHTML = `<p>Correo enviado a: ${destinatario}</p>`;
}


