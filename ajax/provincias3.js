document.addEventListener("DOMContentLoaded", main);
let provinciasSelect;
let municipiosSelect;

function main() {
    provinciasSelect = document.getElementById("provincias");
    municipiosSelect = document.getElementById("municipios");
    provinciasSelect.addEventListener("change", (e) => {
        console.log(e.target.value);
        const provinciaId = e.target.value;
        if (provinciaId) {
            cargarMunicipios(provinciaId);
        } else {
            municipiosSelect.innerHTML = `<option value="">Seleccione una provincia primero</option>`;
        }
    });

    // Cargar las provincias al cargar la página
    cargarProvincias();
}

// Función para cargar las provincias
function cargarProvincias() {
    const url = "bdprovincias.php";
    let solicitud;
    try {
        solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
        alert(e);
        return;
    }
    solicitud.addEventListener("load", (e) => {
        if (e.target.status == 200) {
            try {
                const provincias = JSON.parse(solicitud.responseText);
                console.log("Provincias parseadas:", provincias);
                provinciasSelect.innerHTML = `<option value="">Seleccione una provincia</option>`;
                provincias.forEach(provincia => {
                    const option = document.createElement("option");
                    option.value = provincia.id_provincia;
                    option.textContent = provincia.provincia;
                    provinciasSelect.appendChild(option);
                });
            } catch (error) {
                console.error("Error al parsear el JSON:", error);
            }
        } else {
            console.error('Error al cargar las provincias:', e.target.status, e.target.statusText);
        }
    });

    solicitud.open("POST", url);
    const formData = new FormData();
    formData.append("accion", "obtenerProvincias");
    solicitud.send(formData);
}

// Función para cargar los municipios de una provincia
function cargarMunicipios(provinciaId) {
    const url = "bdmunicipios.php";
    let solicitud;
    try {
        solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
        alert(e);
        return;
    }
    solicitud.addEventListener("load", (e) => {
        if (e.target.status === 200) {
            const municipios = JSON.parse(solicitud.responseText);
            console.log("Municipios recibidos:", municipios);
            municipiosSelect.innerHTML = `<option value="">Seleccione un municipio</option>`;
            municipios.forEach(municipio => {
                const option = document.createElement("option");
                option.value = municipio.id_municipio;
                option.textContent = municipio.nombre;
                municipiosSelect.appendChild(option);
            });
        }
    });

    solicitud.open("POST", url);
    const formData = new FormData();
    formData.append("numero", provinciaId);
    solicitud.send(formData);
}
