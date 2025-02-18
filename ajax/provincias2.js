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

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar las provincias: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(provincias => {
            console.log("Provincias parseadas:", provincias);
            provinciasSelect.innerHTML = `<option value="">Seleccione una provincia</option>`;
            provincias.forEach(provincia => {
                const option = document.createElement("option");
                option.value = provincia.id_provincia;
                option.textContent = provincia.provincia;
                provinciasSelect.appendChild(option);
            });
        })
        .catch(error => console.error("Error al obtener las provincias:", error));
}

// Función para cargar los municipios de una provincia
function cargarMunicipios(provinciaId) {
    const url = `bdmunicipios.php?numero=${provinciaId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar los municipios: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(municipios => {
            console.log("Municipios recibidos:", municipios);
            municipiosSelect.innerHTML = `<option value="">Seleccione un municipio</option>`;
            municipios.forEach(municipio => {
                const option = document.createElement("option");
                option.value = municipio.id_municipio;
                option.textContent = municipio.nombre;
                municipiosSelect.appendChild(option);
            });
        })
        .catch(error => console.error("Error al obtener los municipios:", error));
}