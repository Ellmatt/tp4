// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y
//  si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
  color: "rojo",
  marca: "ford",
  modelo: "fiesta",
  encendido: 1,
  apagado: 0,
  quieto() {
    document.write("el auto esta quieto");
  },
  encender(girarEncender) {
    if (girarEncender === this.encendido) {
      document.write("<br> el auto se encendio");
    } else {
      document.write("<br> el auto no se encendio y sigue quieto");
    }
  },

 
  apagar(girarApagar) {
    if (girarApagar <= this.apagado) {
      document.write("<br> el auto se apago");
    } else if(girarApagar <= this.encendido){
      document.write("<br> el auto continua encendido");
    }else{
        document.write('<br> el auto nunca se encendio')
    }
  },
};
auto.quieto(auto);

let girarEncender = parseInt(
  prompt("ingrese 1 para girar la llave y encender el auto")
);
auto.encender(girarEncender);


let girarApagar = parseInt(
  prompt("ingrese 0 para girar la llave y apagar el auto")
);
auto.apagar(girarApagar);
