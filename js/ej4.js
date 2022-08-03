// // 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio,
// además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.productos = [];
  }
  guardarObjetos(Leche, Yerba, Aceite) {
    this.productos.push(Leche, Aceite, Yerba);
  }
  imprimirDatos() {
    document.write(`<ul>
    <li>codigo: ${this.codigo}</li>
   <li> Nombre: ${this.nombre}</li>
    <li>Precio: ${this.precio}</li>   
    </ul>`);
  }
}

let Leche = new Producto("oo1", "Leche Serenisima", "$100");
let Yerba = new Producto("oo2", "yerba sin palo", "$200");
let Aceite = new Producto("oo3", "Aceite barato", "$300");

Leche.imprimirDatos();
Yerba.imprimirDatos();
Aceite.imprimirDatos();
// this.productos.imprimirDatos(Leche, Yerba, Aceite);
