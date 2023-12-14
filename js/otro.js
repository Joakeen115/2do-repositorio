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

// objetos literales {}

let obj = {};
console.log(obj);
console.log(typeof obj);

// arrays []
let arr = [];
console.log(arr);
console.log(typeof arr);

let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;

let numeros = [10, 20, 30, 40, 50];
//console.log(numeros);
alert(numeros);

let str1 = "Hola";
let str2 = "Hi";
let str3 = "Hellow";

let strs = ["hola", "Hi", "Hellow"];
console.log(strs);

let deTodo = ["Adrian", 47, false, {}, numeros];
console.log(deTodo);

let productos = [
  {
    nombre: "PlayStation",
    precio: 1000000,
  },
  {
    nombre: "Pelota",
    precio: 20000,
  },
];

console.log(productos);


---------------------------------------------------

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

let emojis = [
  "✌",
  "😂",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚",
  "❎",
];

console.log(emojis);
console.log(emojis.length);

//console.log(emojis);

//console.log(emojis[0]);
//console.log(emojis[1]);
//console.log(emojis[15]);

for (let i = 0; i < 92; i += 1) {
  console.log(emojis[i]);
}
console.log("----------------------");
for (let i = 0; i < emojis.length; i += 1) {
  console.log(emojis[i]);
}

console.log("-------------");
console.log(emojis[0]);
console.log("-------------");
console.log(emojis[emojis.length - 1]);


let resultado = emojis.length;

emojis[emojis.length - 1];
emojis[emojis.length];
------------------------------------------------
------------------------------------------

/* const superHeroes = ["Batman", "Superman", "Mujer Maravilla"];

let strHeroes = superHeroes.join(" - ");
console.log(strHeroes);
console.log(superHeroes); */

let marvel = ["Capitan America", "Hombre Araña", "Natasha Romanov"];
let dc = ["Batman", "Superman", "Mujer Maravilla"];

//let heroes = marvel.concat(dc);
let heroes = dc.concat(marvel);
console.log(heroes);

console.log(marvel);
console.log(dc);

marvelMen = marvel.slice(0, 2);
console.log(marvelMen);
console.log(marvel);

console.log(heroes.indexOf("Batman"));
console.log(heroes.indexOf("Hombre Araña"));
console.log(heroes.indexOf("Robin"));
console.log(heroes.indexOf("Wolverine"));

console.log(heroes.includes("Batman"));
console.log(heroes.includes("Hombre Araña"));
console.log(heroes.includes("Robin"));

console.log("cambia el array -- destructivo");

heroes.reverse();
console.log(heroes);


------------------------------------------------

/* const superHeroes = ["Batman", "Superman", "Mujer Maravilla"];

let strHeroes = superHeroes.join(" - ");
console.log(strHeroes);
console.log(superHeroes); */

let marvel = ["Capitan America", "Hombre Araña", "Natasha Romanov"];
let dc = ["Batman", "Superman", "Mujer Maravilla"];

//let heroes = marvel.concat(dc);
let heroes = dc.concat(marvel);

/* for (let i = 0; i < heroes.length; i += 1) {
  console.log(heroes[i]);
}
 */

const productos = [];
console.log(productos);

const producto1 = {
  nombre: "TV Led",
  precio: 150000,
};

const producto2 = {
  nombre: "PlayStation",
  precio: 700000,
};

const producto3 = {
  nombre: "Teclado Mecanico",
  precio: 500000,
};

const producto4 = {
  nombre: "Parlantes",
  precio: 50000,
};

productos.push(producto3);
productos.push(producto1);
productos.push(producto2);

//console.log(carrito)
productos.push(producto4);
console.log(productos);

for (let item of productos) {
  console.log(item.nombre + " Tiene un costo de " + item.precio);
}

----------------------------------------------------------------
// Ciudadano de primera clase first-class functions

/* const obj = {};
const arr = [];

function hacerAlgo() {
  console.log("hello");
}

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof hacerAlgo);

let hacerCopias = function () {
  console.log("Hi");
};

console.log(hacerCopias);
console.log(typeof hacerCopias);

hacerCopias();
 */
/* HOF  --> se reciba una funcion por parametros
        --> la funcion devuelva una function */

/* let num1 = Number(prompt("Ingresar un numero"));
let num2 = Number(prompt("Ingresar un numero"));

function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function sumarOMultiplicar(fn) {
  return fn(num1, num2);
}

let suma = sumarOMultiplicar(sumar);
console.log(suma);

let mult = sumarOMultiplicar(multiplicar);
console.log(mult);

let resta = sumarOMultiplicar((num1, num2) => {
  console.log(num1 - num2);
});

// Funciones que retornan funciones

function obtenerCliente() {
  return function () {
    console.log("sadfadsfasdfadf");
  };
}

let resultado = obtenerCliente;
console.log(resultado);

resultado = obtenerCliente();
console.log(resultado);
resultado(); */

// Función externa que retorna una función interna
function crearFuncionSaludo(nombre) {
  // Función interna que utiliza el parámetro de la función externa
  return function () {
    console.log("¡Hola, " + nombre + "!");
  };
}

// Creamos una función utilizando la función externa
let saludarJuan = crearFuncionSaludo("Juan");

// Llamamos a la función creada para saludar a Juan
saludarJuan(); // Esto imprimirá "¡Hola, Juan!"







-----------------------------------------------------------


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const carrito = [
  { nombre: "Zapatos", precio: 500 },
  { nombre: "Camisa", precio: 700 },
  { nombre: "Chomba", precio: 300 },
  { nombre: "Remera", precio: 200 },
  { nombre: "Musculosa", precio: 500 },
  { nombre: "medias", precio: 50 },
  { nombre: "Gorra", precio: 300 },
  { nombre: "Campera", precio: 800 },
];

/* meses.forEach(function (mes) {
  //console.log(mes);
  if (mes === "Diciembre") {
    console.log("Diciembre existe");
  }
}); */

/* function mostrarMes(mes) {
  //console.log(mes);
  console.log("no me importa");
} */

//meses.forEach(mostrarMes);

/* meses.forEach((item) => {
  console.log(item);
}); */

//const busqueda = meses.includes("Febrero");
//console.log(busqueda);

console.log("----------some-------------");
/* const existe = meses.some((item) => item === "Octubre");
console.log(existe);
console.log(meses); */

//const existe = carrito.some((producto) => producto.nombre === "Campera");
//const existe = carrito.some((producto) => producto.nombre === "Pelota");
//console.log(existe);

console.log("---------- findIndex -------------");

/* meses.forEach(function (mes, index) {
  if (mes === "Abril") {
    console.log("Abril esta en la posicion " + index);
  }
});

const indice = meses.findIndex((mes) => mes === "Abril");
console.log(indice); */

console.log("---------- reduce -------------");

let total = 200;
carrito.forEach((item) => (total += item.precio));
console.log(total);

let resultado = carrito.reduce((total, item) => total + item.precio, 1000);
console.log(resultado);
----------------------------------------------------------------------------------------
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const carrito = [
  { nombre: "Zapatos", precio: 500 },
  { nombre: "Camisa", precio: 700 },
  { nombre: "Chomba", precio: 300 },
  { nombre: "Remera", precio: 200 },
  { nombre: "Musculosa", precio: 500 },
  { nombre: "Medias", precio: 50 },
  { nombre: "Gorra", precio: 300 },
  { nombre: "Campera", precio: 800 },
];

console.log("----------- find ----------------");

/* let resultado = carrito.find((item) => item.nombre === "Camisa");
console.log(resultado); */

/* let resultado1 = carrito.find((item) => item.precio < 800);
console.log(resultado1); */

let resultado1 = carrito.find(function (item) {
  return item.precio < 800;
});
console.log(resultado1);

let resultado2 = carrito.find((item) => {
  return item.precio < 800;
});
console.log(resultado2);

function buscarMenor800(item) {
  return item.precio > 300;
}
const resultado3 = carrito.find(buscarMenor800);
console.log(resultado3);

// Esta es la version mas corta de una arrow function
const resultado4 = carrito.find((item) => item.nombre === "PlayStation");
console.log(resultado4);

console.log("------------ every -------------");
const res = carrito.every((item) => item.precio < 800);
console.log(res);

console.log("------------ filter -------------");
let respuesta = carrito.filter((item) => item.precio > 400);
console.log(respuesta);

let respuesta1 = carrito.filter((item) => item.nombre === "Pepino");
console.log(respuesta1);

let respuesta2 = carrito.filter((item) => item.nombre === "Zapatos");
console.log(respuesta2);

let respuesta3 = carrito.filter((producto) => producto.nombre !== "Zapatos");
console.log(respuesta3);

let respuesta4 = carrito.filter((producto) => producto.nombre.startsWith("M"));
console.log(respuesta4);

console.log("-------- map ----------------");

const numeros = [12, 34, 33, 22, 85];
// dobles
numeros.forEach((num) => console.log(num * 2));
//console.log(salida);

// dobles
let salida1 = numeros.map((x) => x * 2);
console.log(salida1);

const nombres = ["Guillermo", "Leandro", "Stefania", "Laila", "Joaquin"];
let longitud = nombres.map((nombre) => nombre.length);
console.log(longitud);

let lista = nombres.map((alumno) => "<li> " + alumno + " </li>");
console.table(lista);

for (li of lista) {
  document.querySelector("ul").innerHTML += li;
}

console.log("--------sort----------")

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const carrito = [
  { nombre: "Zapatos", precio: 500, img: "producto1.jpg" },
  { nombre: "Camisa", precio: 700, img: "producto1.jpg" },
  { nombre: "Chomba", precio: 300, img: "producto1.jpg" },
  { nombre: "Remera", precio: 200, img: "producto1.jpg" },
  { nombre: "Musculosa", precio: 500, img: "producto1.jpg" },
  { nombre: "Medias", precio: 50, img: "producto1.jpg" },
  { nombre: "Gorra", precio: 300, img: "producto1.jpg" },
  { nombre: "Campera", precio: 800, img: "producto1.jpg" },
];

/* let lista = carrito.map(
  (item) =>
    "<li> <strong>" + item.nombre + " : </strong> $ " + item.img + " </li>"
);
console.table(lista);

for (let li of lista) {
  document.querySelector("ul").innerHTML += li;
} */

console.log("--------sort----------");

const numeros = [40, 1, 5, 200, 10];

const palabras = ["perro", "gato", "elefante", "abeja", "oso"];
palabras.sort();
console.log(palabras);

numeros.sort();
console.log(numeros);

numeros.sort((a, b) => a - b);
console.log(numeros);

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 20 },
  { nombre: "Maria", edad: 30 },
];

personas.sort((a, b) => a.edad - b.edad);
console.log(personas);



console.log("Math")

//console.log(Math);
//console.log(Math.E);
//console.log(Math.PI);

const radio = 10;

let resultado;
resultado = Math.round(2.3);
resultado = Math.round(2.7);

resultado = Math.ceil(2.999);
resultado = Math.ceil(2.0001);

resultado = Math.floor(2.999);
resultado = Math.floor(2.0001);

resultado = Math.sqrt(9);
resultado = Math.sqrt(2);

resultado = Math.pow(2, 8);
resultado = Math.pow(3, 3);

resultado = Math.PI * Math.pow(radio, 2);
resultado = Math.PI * radio ** 2;

resultado = (Math.random() * 100).toFixed(0);

console.log(resultado);


----------------------------------------------

let btn = document.getElementById('btn')
        console.log(btn)


        function hacerAlgo() {
            alert("click en la imagen")
        }

        function encenderLampara() {
            let img = document.querySelector('img');
            img.setAttribute('src', "https://img.freepik.com/vector-gratis/bombilla-luz-encendida-realista-aislada_1284-41774.jpg")
        }

        function apagarLampara() {
            let img = document.querySelector('img');
            img.setAttribute('src', "https://w7.pngwing.com/pngs/861/482/png-transparent-incandescent-bulb-incandescent-light-bulb-lighting-offlamp-light-fixture-image-file-formats-light.png")
        }