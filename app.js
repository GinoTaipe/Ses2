//Ejecutar una vez cargada todo el HTML
window.onload=function(){
    let nombre=document.getElementById("nombre"); //Obtienes el objeto
    let btn=document.getElementById("btnEnviar");
    btn.addEventListener("click",saludo);

    function saludo(){
        alert('Hola '+nombre.value);
        alert('djlsjdlsjdlsndfolsndls');
    }
}