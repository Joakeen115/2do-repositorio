
function AgregarLibro() {
    const formulario = document.getElementById('MiFormulario');
    const listaLibros = document.getElementById('listaLibros');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

      // Acá obtengo los valores 
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const anio = document.getElementById('anio').value;
        const editorial = document.getElementById('editorial').value;

      // Guardo los datos del libro
        const nuevoLibro = { titulo, autor, anio, editorial };

      // Obtengo la lista de los libros guardados en el storage
        let librosGuardados = JSON.parse(localStorage.getItem('biblioteca')) || [];

      // Acá agrego el libro ingresado
        librosGuardados.push(nuevoLibro);

      // Esto me guarda la lista de libros
        localStorage.setItem('biblioteca', JSON.stringify(librosGuardados));

      // Y esta función muestra los libros
        mostrarLibrosEnHTML();

    });
}

  // Ésta es la función para mostrar los libros guardados
    function mostrarLibrosEnHTML() {
    const listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = ''; 

    // Acá obtengo la lista de libros guardados en localStorage
    const librosGuardados = JSON.parse(localStorage.getItem('biblioteca')) || [];
    librosGuardados.forEach(libro => {
        const li = document.createElement('li');
        li.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}, Editorial: ${libro.editorial}`;
        listaLibros.appendChild(li);
    });
}

  // Acá estoy llamando a la función para que se muestren los libros que ponga el usuario
  AgregarLibro();
  mostrarLibrosEnHTML();
  
  const boton = document.querySelector("#btn");
  const popup = document.querySelector(".popup-mensaje");

  boton.addEventListener("click", () => {
    popup.classList.add("popup-active");
  
  setTimeout(() => {
    popup.classList.remove("popup-active");
  }, 2500);
});

let counter = 0
const intervalo = setInterval (() => {
  counter++
  console.log("Counter: ", counter)

  if (counter >= 5) {
    clearInterval (intervalo)
    console.log("Se removió el intervalo")
  }
}, 1000)


// Acá voy a usar AJAX, Fetch //

fetch("data.xml")
.then(response =>{
  return response.text();
})
.then(xmlString => {
  const xlmDocument = new DOMParser() .parseFromString(xmlString, "text/xml");
  const libros = xlmDocument.querySelectorAll("libros");
  for (const libro of libros) {
    const titulo = libro.getElementsByTagName('titulo').textContent;
    const autor = libro.getElementsByTagName('autor').textContent;
    const anioPublicacion = libro.getElementsByTagName('anio_publicacion').textContent;
    const editorial = libro.getElementsByTagName('editorial').textContent;
    console.log(titulo, autor, anioPublicacion, editorial);
  }
})

// Función para cargar y analizar el archivo XML
function cargarXML() {
  const url = 'data.xml';

  return fetch(url)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      return parser.parseFromString(data, 'application/xml');
    })
    .catch(error => {
      console.error('Error al cargar el archivo XML:', error);
      return null;
    });
}

// Función para procesar el XML y mostrar la lista
function mostrarLista() {
  cargarXML()
    .then(xmlDoc => {
      if (xmlDoc) {
        const listaLibros = document.getElementById('mostrarListaLibros');
        listaLibros.innerHTML = '';

        const libros = xmlDoc.getElementsByTagName('libro');

        for (let i = 0; i < libros.length; i++) {
          const libro = libros[i];

          const titulo = libro.getElementsByTagName('titulo')[0].textContent;
          const autor = libro.getElementsByTagName('autor')[0].textContent;
          const anioPublicacion = libro.getElementsByTagName('anio_publicacion')[0].textContent;
          const editorial = libro.getElementsByTagName('editorial')[0].textContent;

          const libroElement = document.createElement('p');
          libroElement.textContent = `Libro ${i + 1}: Título: ${titulo}, Autor: ${autor}, Año de publicación: ${anioPublicacion}, Editorial: ${editorial}`;

          listaLibros.appendChild(libroElement);
        }
      }
    });
}


document.getElementById('mostrarListaBtn').addEventListener('click', mostrarLista);


document.addEventListener('DOMContentLoaded', function() {
});


//Acá voy a poner los botones para remover las listas
function removerLista() {
  const listaLibros = document.getElementById('listaLibros');
  listaLibros.innerHTML = ''; 
}
document.getElementById('removerListaBtn').addEventListener('click', removerLista);

function removerLista() {
  const listaLibros = document.getElementById('listaLibros');
  listaLibros.innerHTML = ''; 
}
document.getElementById('removerListaBtn').addEventListener('click', removerLista);


function removerLibros() {
  const listaLibros = document.getElementById('mostrarListaLibros');
  listaLibros.innerHTML = ''; 
}
document.getElementById('removerLibrosBtn').addEventListener('click', removerLista);

function removerLibros() {
  const listaLibros = document.getElementById('mostrarListaLibros');
  listaLibros.innerHTML = ''; 
}
document.getElementById('removerLibrosBtn').addEventListener('click', removerLibros);


