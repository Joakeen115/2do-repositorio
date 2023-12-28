
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