function fcirculo(){
// ayuda a cacturar un elemento a traves del id 
var selector = document.getElementById("figura");
selector.className='';
// toggle (agregar o quitar). 
selector.classList.toggle("circulo");
}
function fparalelogramo(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("rombo");
}
function frectanguloH(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("rectanguloHorizontal");
}
function frectanguloV(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("rectanguloVertical");
}
function fimagen(){
    var selector = document.getElementById("figura");
selector.className='';
selector.classList.toggle("imagen");
}
function farriba(){
    var selector = document.getElementById("figura");
selector.className='';
selector.classList.toggle("arriba");
}
function fabajo(){
    var selector = document.getElementById("figura");
selector.className='';
selector.classList.toggle("abajo");
}
function fderecha(){
    var selector = document.getElementById("figura");
selector.className='';
selector.classList.toggle("derecha");
}
function fizquierda(){
    var selector = document.getElementById("figura");
selector.className='';
selector.classList.toggle("izquierda");
}
function fdiagonal(){
    var selector = document.getElementById("figura");
selector.className='';
selector.classList.toggle("diagonal");
}
function operaciones(){
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);
    var operaciones = document.getElementById("operaciones").value;

    switch (operaciones) {
        case "+":
            resultado = a + b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "-":
            resultado = a - b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "*":
            resultado = a * b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "/":
            resultado = a / b;
            document.getElementById("respuesta").value = resultado;
            break;
    }
}

function chatActive(){
    var selector = document.getElementById("chat");
    selector.classList.toggle("active");
    var selector2 = document.getElementById("btnChat");
    selector2.classList.toggle("active"); 
}

