document.addEventListener('DOMContentLoaded', main);
function main() {
    let posts = [];
    let postActual = 0;
    let titulo = document.getElementById('titulo');
    let cuerpo = document.getElementById('cuerpo');
    let botonTodos = document.getElementById("todos");
    let botonBuscar = document.getElementById("buscar");
    let botonAvanzar = document.getElementById("avanzar");
    let botonAtrasar = document.getElementById("atrasar");
    let campoId = document.getElementById("id");
    let id = campoId.value;
    botonTodos.addEventListener('click', cargarTodos);
    botonBuscar.addEventListener('click', () => ponerPost(id));
    botonAtrasar.addEventListener('click', () => atrasar());
    botonAvanzar.addEventListener('click', () => avanzar());
    function ponerPost(id) {
        let post = cargarPost(id);
        postActual = post.id;
        titulo.textContent = post.title;
        cuerpo.textContent = post.body;
    }
    function cargarPost(id){
        let postEcontrado = null;
        posts.forEach(post => {
            if (post.id == id){
                postEcontrado = post;
            }
        });
        return postEcontrado;
    }
    function atrasar(){
        if (postActual > 0){
            postActual--;
            ponerPost(postActual);
        }
    }
    function avanzar(){
        if (postActual < posts.length -1){
            postActual++;
            ponerPost(postActual);
        }
    }
    function cargarTodos(){
        let url = "https://jsonplaceholder.typicode.com/posts";
        let solicitud;
        try {
            solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            alert(e);
        }
        solicitud.open("GET", url);
        solicitud.send();
        if (solicitud.status === 200){
            let miNodo = document.querySelector("main");
            posts = JSON.parse(solicitud.response);
            miNodo.innerHTML += posts;
        }
    }

}