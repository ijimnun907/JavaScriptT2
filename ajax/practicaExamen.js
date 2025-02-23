document.addEventListener('DOMContentLoaded', main);

function main() {
    let usuarios = document.querySelectorAll('input[type="checkbox"]');
    usuarios.forEach(user => {
        user.addEventListener('change', cargarComentarios);
    });
    let espacioComentarios = document.getElementById("comentarios");
    espacioComentarios.addEventListener('click', (e) => {
        window.location.href = `detallePractica.html?id=${e.target.id}`;
    })
}

function cargarComentarios() {
    let espacioComentarios = document.getElementById("comentarios");
    espacioComentarios.innerHTML = "";
    let userActivos = document.querySelectorAll('input[type="checkbox"]:checked');
    userActivos.forEach(user => {
        let userId = user.value;
        let solicitud;
        let url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        try {
            solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            alert(e);
        }
        solicitud.addEventListener('load', (e) => {
            if (e.target.status == 200){
                let comentarios = JSON.parse(solicitud.responseText);
                comentarios.forEach(coment => {
                    let caja = document.createElement("div");
                    caja.className = "comentario";
                    caja.setAttribute('id', coment.id);
                    caja.textContent = coment.title;
                    espacioComentarios.appendChild(caja);
                });
            }
        });
        solicitud.addEventListener('progress', () => {console.log('cargando...')});
        solicitud.open('GET', url);
        solicitud.send();
    });
}