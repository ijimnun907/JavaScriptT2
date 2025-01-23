const main = function(){
    let parrafos = document.querySelectorAll('p');
    let array = [...parrafos];
    let texto = array.map(el => el.textContent);
    console.log(texto);
}
document.addEventListener("DOMContentLoaded",main);