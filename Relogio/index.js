var date = new Date();
var hora = date.getHours();
var min = date.getMinutes();
var seg = date.getSeconds();


function horasAtual () {
    let click = document.getElementsByName('clickHoras');
    let relogio = document.getElementById('relogio')
    
    relogio.innerHTML = hora +':'+ min 
}


