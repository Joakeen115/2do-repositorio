/* 
==      igualdad
===     igualdad estricta
>       mayor
<       menor
>=      mayor o igual
<=      menor o igual
!=      diferencte 
!==     estrictamente diferente
*/




// Esto es solamente el saludo al usuario 
const saludo = prompt("Ingrese su nombre");
alert("Hola " + saludo + " :D" )


//Esto es la calculadora de impuestos
let PrecioServicio = prompt("Ingrese precio para sumar 65% de impuestos");
let resultado = 0.65 * Number(PrecioServicio) + Number(PrecioServicio);
console.log(PrecioServicio + " con impuestos son: " + resultado);

let Efectivo = prompt("Su compra vale 10000 ingrese cuánto abona en efectivo");

if (Efectivo >= 10000 ){
    console.log("Su compra se ha realizado con éxito, que capo que es usted");

}
else{
console.log("Fondos insuficientes, es usted un rata")
}

// Esto es una mera suma
function suma(a, b) {
    return a + b;
}
const ResultadoSuma = suma(525, 626)
console.log(ResultadoSuma);

