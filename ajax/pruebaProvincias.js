document.addEventListener('DOMContentLoaded', main);


function main() {
    let huecoProvincias = document.getElementById("provincias");
    cargarProvincias(huecoProvincias);
}

function cargarProvincias(huecoProvincias) {
    let solicitud;
    let url = "bdprovincias.php";
    try {
        solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e) {
        alert(e);
    }
    solicitud.addEventListener("load", (e) => {
        if (solicitud.status === 200) {
            try {
                const provincias = JSON.parse(solicitud.responseText);
                provincias.forEach(provincia => {
                    let campo = document.createElement("div");
                    campo.className = "provincia";
                    campo.setAttribute("id", provincia.id_provincia);
                    campo.textContent = provincia.provincia;
                    let chk = document.createElement("input");
                    chk.type = "checkbox";
                    chk.value = provincia.id_provincia;
                    campo.appendChild(chk);
                    huecoProvincias.appendChild(campo);
                    console.log(provincia.id_provincia);
                });
            }
            catch (e) {
                alert(e);
            }
        }
    });
    solicitud.addEventListener("progress", (e) => {console.log("cargando...")});
    solicitud.open("GET", url);
    solicitud.send();

    let huecoMunicipios = document.getElementById("municipios");

    let checkProvincias = document.querySelectorAll('input[type="checkbox"]');
    console.log(checkProvincias);
    checkProvincias.forEach(element => {
        element.addEventListener('change', (e) => cargarMunicipios(huecoMunicipios));
    });
}

function cargarMunicipios(huecoMunicipios) {
    let provinciasSeleccionadas = document.querySelectorAll('input[type="checkbox"]:checked');
    provinciasSeleccionadas.forEach(provincia => {
        let idProvincia = provincia.id_provincia;
        let solicitud;
        let url = `bdmunicipios.php?numero=${idProvincia}`;
        try {
            solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            alert(e);
        }
        solicitud.addEventListener("load", (e) => {
            if (solicitud.status === 200) {
                let municipios = JSON.parse(solicitud.responseText);
                municipios.forEach(municipio => {
                    let campo = document.createElement("div");
                    campo.className = "municipio";
                    campo.setAttribute("id", municipio.id_municipio);
                    campo.textContent = municipio.nombre;
                    console.log(municipio.id_municipio);
                    huecoMunicipios.appendChild(campo);
                })
            }
        });
        solicitud.addEventListener("progress", (e) => console.log("cargando..."));
        solicitud.open("GET", url);
        solicitud.send();
    });
}