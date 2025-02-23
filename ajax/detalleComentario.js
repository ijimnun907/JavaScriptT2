document.addEventListener('DOMContentLoaded', main);

function main() {
    const params = new URLSearchParams(window.location.search);
    const cometarioid = params.get('id');

    ponerComentario(cometarioid);
}

function ponerComentario(comentarioid) {
    let detalleComentario = document.getElementById("detalleComentario");
    if (comentarioid){
        let solicitud;
        let url = `https://jsonplaceholder.typicode.com/posts/${comentarioid}`;
        try {
            solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        }
        catch(e) {
            alert(e);
        }
        solicitud.addEventListener('load', (e) => {
            if (e.target.status == 200){
                let comentario = JSON.parse(solicitud.responseText);
                let caja = document.createElement("div");
                caja.setAttribute("id", comentario.id);
                caja.className = "comentario";
                caja.textContent = comentario.title + "|" + comentario.body;
                detalleComentario.appendChild(caja);
            }
        });
        solicitud.addEventListener("progress", (e) => {
            console.log("cargando");
        });
        solicitud.open("GET", url);
        //const formData = new FormData();
        //formData.append("id", comentarioid);
        //solicitud.send(formData);
        solicitud.send();
    }
}