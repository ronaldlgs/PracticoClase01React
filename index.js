class SerVivo {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    caminar() {
        console.log('Ahora esta caminando: ' + nombre);
    }
}
  
class Persona extends SerVivo {
    Caminar() {
        console.log('Ahora esta caminando: ' + this.nombre);
    }
}

const pug = new Persona('Ronald');
pug.Caminar()