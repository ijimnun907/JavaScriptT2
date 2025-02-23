document.addEventListener('DOMContentLoaded', main);

function main() {
    let idComentario = cargarParametros('id');
    pintarComentario(idComentario);
}

function pintarComentario(idComentario) {
    let caja = document.getElementById('detalleComentario');
    let solicitud;
    let url = `https://jsonplaceholder.typicode.com/posts/${idComentario}`;
    try {
        solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    }
    catch (e) {
        alert(e);
    }
    solicitud.addEventListener('load', (e) => {
        if (e.target.status == 200){
            let comentario = JSON.parse(solicitud.responseText);
            let coment = document.createElement('div');
            coment.className = "comentario";
            coment.setAttribute('id', comentario.id);
            coment.textContent = comentario.title + " | " + comentario.body;
            caja.appendChild(coment);
        }
    });
    solicitud.addEventListener('progress', () => {console.log('cargando...')});
    solicitud.open('GET', url);
    solicitud.send();
}

function cargarParametros(nombre) {
    let parametros = new URLSearchParams(window.location.search);
    let valor = parametros.get(nombre);
    return valor;
}