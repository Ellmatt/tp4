// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y
// ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
let rectangulos = {
  alto: 0,
  ancho: 0,
  modificarAlto(alto1) {
    this.alto += alto1;
  },
  modificarAncho(ancho1) {
    this.ancho += ancho1;
  },
  mostrarPropiedades() {
    document.write(`El alto es: ${this.alto} y el ancho es: ${this.ancho}`);
  },
  perimetro() {
    let resultado = this.ancho + this.alto + (this.alto + this.ancho);
    document.write(`<p>El perimetro es: ${resultado}</p>`);
  },
  area() {
    let resultado2 = this.ancho * this.alto;
    document.write(`<p>El area es: ${resultado2}</p>`);
  },
};

let alto1 = parseFloat(prompt("Igrese un alto para su rectangulo"));
rectangulos.modificarAlto(alto1);

let ancho1 = parseFloat(prompt("Igrese un ancho para su rectangulo"));
rectangulos.modificarAncho(ancho1);

rectangulos.mostrarPropiedades(rectangulos);
rectangulos.perimetro(rectangulos);
rectangulos.area(rectangulos);
