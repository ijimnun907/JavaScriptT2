document.addEventListener("DOMContentLoaded", main);

function main() {
    let usuarios = document.querySelectorAll('input[type="checkbox"]');
    usuarios.forEach((element) => {
        element.addEventListener('change', (e) => {
            cargarComentarios();
        });
    });
    let comentarios = document.getElementById("comentarios");
    console.log(comentarios);
    comentarios.addEventListener('click', (e) => {
        window.location.href = `detalleComentario.html?id=${e.target.id}`;
    });
}

function cargarComentarios() {
    let pintarComentarios = document.getElementById("comentarios");
    pintarComentarios.innerHTML = "";
    let usuariosSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    usuariosSeleccionados.forEach((element) => {
        let idUsuario = element.value;
        let solicitud;
        let url = `https://jsonplaceholder.typicode.com/posts?userId=${idUsuario}`;
        try {
            solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        }
        catch (e) {
            alert(e);
        }
        solicitud.addEventListener('load', (e) => {
            if (e.target.status == 200){
                let comentarios = JSON.parse(solicitud.responseText);
                console.log(comentarios);
                comentarios.forEach((coment) => {
                    const caja = document.createElement('div');
                    caja.setAttribute('id', coment.id);
                    caja.className = "comentario";
                    caja.textContent = coment.title;
                    pintarComentarios.appendChild(caja);
                })
            }
        });
        solicitud.open("GET", url);
        solicitud.send();
    });
}