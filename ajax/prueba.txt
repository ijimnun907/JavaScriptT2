document.addEventListener('DOMContentLoaded', main);
function main() {
    let solicitud;
    let url = "1eso.php?dato=1";
    try {
        solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e) {
        alert(e);
    }
    solicitud.addEventListener("load", e=>{
        if (e.target.status === 200){
            miNodo = document.querySelector("main");
            miNodo.innerHTML = solicitud.response;
        }
    });
    solicitud.addEventListener("progress", e=>{console.log("progress activado")});
    solicitud.open("GET", url);
    solicitud.send();
}