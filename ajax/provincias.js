document.addEventListener("DOMContentLoaded", main);

function main() {
    const provinciasSelect = document.getElementById("provincias");
    const municipiosSelect = document.getElementById("municipios");
    provinciasSelect.addEventListener("change", (e) => {
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
            const provincias = JSON.parse(solicitud.responseText); // Se espera que bdprovincias.php devuelva un JSON
            provinciasSelect.innerHTML = `<option value="">Seleccione una provincia</option>`;
            provincias.forEach(provincia => {
                const option = document.createElement("option");
                option.value = provincia.id;
                option.textContent = provincia.nombre;
                provinciasSelect.appendChild(option);
            });
        }
    });
    solicitud.addEventListener("progress", () => {
        console.log("Cargando provincias...");
    });
    solicitud.open("GET", url);
    solicitud.send();
}

// Función para cargar los municipios de una provincia
function cargarMunicipios(provinciaId) {
    const url = `bdmunicipios.php?id_provincia=${provinciaId}`;
    let solicitud;
    try {
        solicitud = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
        alert(e);
        return;
    }
    solicitud.addEventListener("load", (e) => {
        if (e.target.status === 200) {
            const municipios = JSON.parse(solicitud.responseText); // Se espera que bdmunicipios.php devuelva un JSON
            municipiosSelect.innerHTML = `<option value="">Seleccione un municipio</option>`;
            municipios.forEach(municipio => {
                const option = document.createElement("option");
                option.value = municipio.id;
                option.textContent = municipio.nombre;
                municipiosSelect.appendChild(option);
            });
        }
    });
    solicitud.addEventListener("progress", () => {
        console.log("Cargando municipios...");
    });
    solicitud.open("GET", url);
    solicitud.send();
}

// Evento para cargar los municipios cuando cambia la provincia
