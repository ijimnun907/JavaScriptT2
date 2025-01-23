function main(){

}

function crearTablaConNumeros(filas, columnas) {
    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";

    let numero = 1; // Número inicial

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement("td");
            celda.textContent = numero; // Asignar número secuencial a la celda
            fila.appendChild(celda);
            numero++;
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

function generarNumerosUnicos(cantidad, inicio, limite) {
    if (cantidad > (limite - inicio + 1)) {
        alert('El rango está mal definido');
    }
    else {
        const numeros = [];
        while (numeros.length < cantidad) {
            const numero = Math.floor(Math.random() * (limite - inicio + 1)) + inicio;
            if (!numeros.includes(numero)) { // Verificar que el número no exista ya en el array
                numeros.push(numero);
            }
        }
        return numeros;
    }
}

function grabarNumerosGanadores(numeros, fecha) {
    const clave = `ganadores_${fecha}`;
    const valor = JSON.stringify(numeros);
    localStorage.setItem(clave, valor);
    console.log(`Números ganadores guardados con clave "${clave}"`);
}

function mostrarAciertos(numerosSorteo, numerosIntroducidos) {
    let numerosCoinciden = [];
    for (let i = 0; i < numerosSorteo.length; i++) {
        if (numerosIntroducidos.includes(numerosSorteo[i])) {
            numerosCoinciden.push(numerosSorteo[i]);
        }
    }
    return numerosCoinciden;
}

function introducirNumeros() {
    let numerosUsuario = [];

    while (numerosUsuario.length < 6) {
        let numero = parseInt(prompt("Introduce un número (1 - 49): "));

        if (numero >= 1 && numero <= 49) {
            if (!numerosUsuario.includes(numero)) {
                numerosUsuario.push(numero);
            } else {
                alert("Este número ya está introducido, prueba con otro.");
            }
        } else {
            alert("Debes introducir un número en este rango (1 - 49).");
        }
    }

    return numerosUsuario;
}

function comprobarNumeros(numerosGanadores, numerosUsuario) {
    let aciertos = [];

    for (let i = 0; i < numerosUsuario.length; i++) {
        for (let j = 0; j < numerosGanadores.length; j++) {
            if (numerosUsuario[i] == numerosGanadores[j]) {
                aciertos.push(numerosUsuario[i]);
                break;
            }
        }
    }

    return aciertos;
}

document.addEventListener('DOMContentLoaded', main);