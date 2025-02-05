document.addEventListener('DOMContentLoaded', main);

function main() {
    setCookie('prueba', 'hola');
    setCookie('prueba2', 'hola2',5);
    console.log(getCookie('prueba'));
    console.log(getCookie('prueba2'));
    console.log(document.cookie);
    borrarCookie('prueba');
    console.log(document.cookie);
    borrarTodasLasCookies();
    console.log(document.cookie);
}

let getCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split("; ");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

let setCookie = (name, value, days) => {
    let expires = ";";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + ";path=/";
}

function borrarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function borrarTodasLasCookies() {
    document.cookie.split(";").forEach((cookie) => {
        let [nombre] = cookie.split("=");
        document.cookie = nombre.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
}