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
const ResultadoSuma = suma(15, 30)
console.log(ResultadoSuma);

let total = 0 
for (let i = 1; i <= 10; i++) {
    total += i
}
console.log(total);


//Acá voy a simular un "Gestor de bibloteca"

//Acá tengo un array con 9 libros
    const biblioteca = [ 
        {titulo: "1984", autor: "George Orwell"},
        {titulo: "Orgullo y prejuicio", autor: "Jane Austen"},
        {titulo: "El Alquimista", autor: "Paulo Coelho"},
        {titulo: "Matar a un ruiseñor", autor: "Harper Lee"},
        {titulo: "Crimen y Castigo", autor: "Fyodor Dosstoevsky"},
        {titulo: "El código Da Vinci", autor: "Dan Brown"},
        {titulo: "Los Juegos del Hambre", autor: "El nombre del viento"}, 
        {titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón"}
    ]
//Acá estoy agregando un libro más
    biblioteca.push("Sapiens: De animales a dioses")
    console.log(biblioteca.length);
    console.log(biblioteca)
    
    const EncontrarLibro = biblioteca.find((nombre) => nombre.titulo === "Orgullo y prejuicio")
    console.log(EncontrarLibro)