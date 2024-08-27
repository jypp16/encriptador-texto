const mensajeUsuario = document.querySelector(".mensaje");
const resultado = document.querySelector(".resultado");

const matrizEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validarEntrada() {
    const mensaje = mensajeUsuario.value;
    const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios

    if (!regex.test(mensaje)) {
        mostrarNotificacion();
        return false;
    }

    return true;
}

function mostrarNotificacion() {
    const notificacion = document.querySelector(".notificacion-alerta");
    notificacion.style.opacity = "1";
    notificacion.style.visibility = "visible";
    setTimeout(() => {
        notificacion.style.opacity = "0";
        notificacion.style.visibility = "hidden";
    }, 3000);
}

function ocultarElementos() {
    document.querySelector(".contenedor-muñeco").style.display = "none";
    document.querySelector(".contenedor-texto").style.display = "none";
    document.querySelector(".contenedor-resultado").style.display = "flex";
    document.querySelector(".contenedor-copiar").style.display = "flex";
}

function botonEncriptar() {
    if (validarEntrada()) {
        resultado.value = encriptar(mensajeUsuario.value);
        ocultarElementos();
    }
    mensajeUsuario.value = "";
}

function botonDesencriptar() {
    if (validarEntrada()) {
        resultado.value = desencriptar(mensajeUsuario.value);
        ocultarElementos();
    }
    mensajeUsuario.value = "";
}

function botonCopiar () {
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.querySelector(".notificacion-copiar").style.opacity = "1";
    document.querySelector(".notificacion-copiar").style.visibility = "visible";
    setTimeout(notificacionCopiado, 3000);
}

function notificacionCopiado() {
    document.querySelector(".notificacion-copiar").style.opacity = "0";
    document.querySelector(".notificacion-copiar").style.visibility = "hidden";
}

function encriptar (mensajeEncriptado) {
    for (let i = 0; i < matrizEncriptacion.length; i++) {
        if (mensajeEncriptado.includes(matrizEncriptacion[i][0])) {
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizEncriptacion[i][0], matrizEncriptacion[i][1]);
        }
    }
    return mensajeEncriptado;
}

function desencriptar (mensajeDesencriptado) {
    for (let i = 0; i < matrizEncriptacion.length; i++) {
        if (mensajeDesencriptado.includes(matrizEncriptacion[i][1])) {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizEncriptacion[i][1], matrizEncriptacion[i][0]);
        }
    }
    return mensajeDesencriptado;
}