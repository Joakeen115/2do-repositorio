let nombre // declaracion
var apellido = "Gonzalez";
nombre = "Adrian"; // asignacion
//let nombre = "leonardo";
//var apellido = "Oldani";

console.log("10" + 10); // Javascript asume que queremos concatenar
console.log(+"15" + 5); // Javascript asume que queremos sumar
console.log(+"10"); // Javascript asume que es un numero

// Este comportamiento es igual con variables
let str = "10";
console.log(typeof str);
let num = 5;
console.log(str + num); // Javascript asume que queremos concatenar
console.log(+str + num); // Javascript asume que queremos sumar
console.log(+str); // Javascript asume que es un numero */

//str = Number("hola"); //NaN
/* 
str = Number(str);
console.log(str); 
*/

str = Number(str);
console.log(typeof str);

//console.log();
//alert(str);
let dedos = prompt("ingresa un numero");
console.log(dedos);

console.log(dedos + num);



----------------------------------------------------------

let pesos = prompt("Ingrese cantidad de Pesos $ a convertir");

//let respuesta = confirm("Tienes pensada alguna inversion");

console.log(pesos + " Pesos son " + Number(pesos) / 1000 + " Dolares");
console.log(pesos + " Pesos son " + Number(pesos) / 1010 + " Euros");
console.log(pesos + " Pesos son " + Number(pesos) * 1.18 + " Yen");
console.log(pesos + " Pesos son " + Number(pesos) / 126.6 + " Libras");
console.log(pesos + " Pesos son " + Number(pesos) / 4465510.12 + " Bitcoins");

//console.log("El usuario piensa invertir " + respuesta);

document.write(
  "<p>" + pesos + " Pesos son " + Number(pesos) / 1000 + " Dolares" + "</p>"
);
document.write(
  "<p>" + pesos + " Pesos son " + Number(pesos) / 1010 + " Euros" + "</p>"
);
document.write(
  "<p>" + pesos + " Pesos son " + Number(pesos) * 1.18 + " Yen" + "</p>"
);
document.write(
  "<p>" + pesos + " Pesos son " + Number(pesos) / 126.6 + " Libras" + "</p>"
);


------------------------------------------------------------------------------------

let numero; // declaracion
console.log(numero);
numero = 10; // inicializacion
console.log(numero);

let nombre = "Adrian"; // Declaro e inicializo;
console.log(nombre);


--------------------------------------------------------------------------------------

//true --> verdadero
//false --> false

//asdfasdasdfas;
//true;
//false;
//("fasdasdf");
//12;

//let esCasado = true;
//console.log(esCasado);
//console.log(typeof esCasado);

// tipos de datos primitivos
// string
// number
// boolean

// Operdores de comparacion
// los operadores de comparacion dan como resultado un true false (boolean)

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

let numero1 = 22;
let numero2 = 55;
let numero3 = 22;
let cadena1 = "22";
let cadena2 = "veintidos";

let resultado;
//console.log(resultado);

resultado = numero1 == numero2;
resultado = numero1 == numero3;
resultado = numero1 == cadena1;
resultado = numero1 === cadena1;
resultado = cadena2 === cadena1;

resultado = numero1 != cadena1;
resultado = numero1 !== cadena1;

console.log(resultado);


---------------------------------------------------------------------------
/* if (true) {
  console.log("se ve");
} */

/* if (false) {
  console.log("se ve");
} */

const puntaje = "1000";
let resultado = puntaje === 1000;
console.log(resultado);

// salto
if (puntaje === 1000) {
  console.log("si es igual");
}

let color = "rojo";

if (color === "rojo") {
  console.log("Tiene 7 libertadores");
}

console.log("esto lo vas a ver si o si");


------------------------------------------------------

const puntaje = "1000";

if (puntaje == 1000) {
  console.log("Si es igual");
} else {
  console.log("No no es igual");
}

// No es igual
if (puntaje != 1000) {
  console.log("Si! es diferente!");
} else {
  console.log("No, no es diferente");
}
// comparador estricto de tipo y valor
if (puntaje === 1000) {
  console.log("Si es igual!");
} else {
  console.log("No no es igual");
}

// comparador estricto de tipo y valor
if (puntaje !== 1000) {
  console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
  console.log("No no es igual");
}

let efectivo = 5000;
let compra = Number(prompt("Ingresar el monto de la compra"));

if (efectivo >= compra) {
  console.log("Puede pagar");
} else {
  console.log("fondos insuficientes");
}
----------------------------------------------------------------

//alert();

// Pelea entre dos personajes
// Goku
// Superman

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

/* let golpeGoku = Number(prompt("Gole de goku"));
let golpeSuperman = Number(prompt("Gole de superman"));
 */

//let golpe = Math.floor(Math.random() * 37);
//console.log(golpe);
//console.log(Math.round(2.50)); //
//console.log(Math.ceil(15.00001));
//console.log(Math.floor(21.999999));

const MIN_POWER = 10;
const MAX_POWER = 30;

let num = 0;

function calcularGolpe() {
  return Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
}

function ambosSiguenVivos() {
  return energiaGoku > 0 && energiaSuperman > 0;
}

function supermanSigueVivo() {
  return energiaSuperman > 0;
}

while (ambosSiguenVivos()) {
  //round++;
  round += 1;
  /* let golpeGoku = Math.ceil(
    Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
  );
  let golpeSuperman = Math.ceil(
    Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
  ); */
  let golpeGoku = calcularGolpe();
  let golpeSuperman = calcularGolpe();

  console.log("--------------Round " + round + "-----------------------");
  if (golpeGoku === golpeSuperman) {
    console.log("siga siga");
  } else if (golpeGoku > golpeSuperman) {
    console.log("Goku ataca con una fuerza de " + golpeGoku);
    document.write(
      "<div class='card'><img src='../images/golpeGoku.jpeg' /></div>"
    );
    //energiaSuperman = energiaSuperman - golpeGoku;
    energiaSuperman -= golpeGoku;
    if (energiaSuperman < 0) {
      energiaSuperman = 0;
    }
    console.log("la energia de Superman baja a " + energiaSuperman);
  } else {
    console.log("Superman ataca con una fuerza de " + golpeSuperman);
    document.write(
      "<div class='card'><img src='../images/golpeSuperman.jpeg' /></div>"
    );

    //energiaGoku = energiaGoku - golpeSuperman;
    energiaGoku -= golpeSuperman;
    if (energiaGoku < 0) {
      energiaGoku = 0;
    }
    console.log("la energia de Goku baja a " + energiaGoku);
  }
}

console.log("--------GANADOR------------");

if (supermanSigueVivo()) {
  console.log("Gano Superman");
  document.write(
    "<div class'ganador'><img src='../images/winSuperman.jpeg' /></div>"
  );
} else {
  console.log("Gano Goku");
  document.write(
    "<div class'ganador'><img src='../images/winGoku.jpeg' /></div>"
  );
}


------------------------------------------------

///alert();

const nombreProducto = "PlayStation";
const precioProducto = 750000;
const disponible = true;

console.log(nombreProducto);
console.log(typeof nombreProducto);
console.log(precioProducto);
console.log(typeof precioProducto);
console.log(disponible);
console.log(typeof disponible);

// objeto literal
/* const producto = {};
console.log(producto);
console.log(typeof producto); */

// Los objetos tienen parede key values
/* const producto = {
  nombre: "PlayStation",
};
console.log(producto);
console.log(typeof producto); */

const producto = {
  nombre: "PlayStation",
  precio: 750000,
  disponible: true,
};
console.log(producto);
console.log(typeof producto);

-----------------------------------------------------

let producto = {
  nombre: "PlayStation",
  precio: 750000,
  disponible: false,
};
console.table(producto);
console.log(typeof producto);

//alert(producto);

/* alert(producto.nombre);
alert(producto.precio);
alert(producto.disponible); */

if (producto.disponible === true) {
  alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente hay en existencia "
  );
} else {
  alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente no hay en existencia "
  );
}

console.log("Llegaron las PlayStation al Negocio");

producto.disponible = true;
producto.stock = 20;
producto.precio = 800000;

if (producto.disponible === true) {
  alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente hay en existencia " +
      producto.stock
  );
} else {
  alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente no hay en existencia "
  );
}

console.table(producto);





------------------------------------------------------

let producto = {
  nombre: "PlayStation",
  precio: 750000,
  disponible: false,
};
console.table(producto);
console.log(typeof producto);

//alert(producto);

/* alert(producto.nombre);
alert(producto.precio);
alert(producto.disponible); */

if (producto.disponible === true) {
  /*   alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente hay en existencia "
  ); */
  console.log(producto["nombre"]);
} else {
  /*   alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente no hay en existencia "
  ); */
  console.log(producto["nombre"]);
}

console.log("Llegaron las PlayStation al Negocio");

producto.disponible = true;
producto.stock = 20;
producto.precio = 800000;

if (producto.disponible === true) {
  /*   alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente hay en existencia " +
      producto.stock
  ); */
  console.log(producto["nombre"]);
} else {
  /*   alert(
    "El producto " +
      producto.nombre +
      " tiene un costo de " +
      producto.precio +
      " y actualmente no hay en existencia "
  ); */
  console.log(producto["nombre"]);
}

console.table(producto);

console.log;
