// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro()
// para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(isbn, titulo, autor, Npaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.Npaginas = Npaginas;
  }
  // ISBN
  set modificarIsbn(nuevoIsbn) {
    this.isbn = nuevoIsbn;
  }

  get mostrarIsbn() {
    return this.isbn;
  }
  //   TITULO
  set modificarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }

  get mostrarTitulo() {
    return this.titulo;
  }
  // AUTOR
  set modificarAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }

  get mostrarAutor() {
    return this.autor;
  }
  // NPAGINAS
  set modificarNpaginas(nuevoNpaginas) {
    this.Npaginas = nuevoNpaginas;
  }

  get mostrarNpaginas() {
    return this.Npaginas;
  }
  mostrarLibro() {
    document.write(
      `<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.Npaginas} </p>`
    );
  }
}

let Blancanieves = new Libro(1, "Blanca Nieves", "Pepito", 100);
let Quijote = new Libro(2, "Quijote de la mancha", "Don Pepito", 200);

Blancanieves.mostrarLibro();
Quijote.mostrarLibro();

function mayorpaginas() {
  if (Blancanieves.Npaginas > Quijote.Npaginas) {
    document.write(`El libro ${Blancanieves.titulo} tiene mas paginas`);
  } else {
    document.write(`El libro ${Quijote.titulo} tiene mas paginas`);
  }
  console.log("estoy en la funcion");
}

mayorpaginas();
