class Grafico {
  constructor() {
    textureMode(NORMAL);
    createGraphics(900, 900);
    this.posicionesLinea = []; 
    this.posicionesForma = []; 
    this.posicionesCirculo = []; 
    this.posicionesTriangulo=[];
    this.posicionesRayas=[];
    this.ultimoTiempo = 0; // Variable para almacenar el último tiempo registrado
    this.segundos = 300; // segundos de 500 milisegundos entre la generación de cada imagen

  }

  carga() {
    this.foto = loadImage('img/forma.png');//
    this.foto1 = loadImage('img/circulo2.png'); // 
    this.foto2 = loadImage('img/circulo.png'); //
    this.foto3 = loadImage('img/img.png');//
    this.foto4 = loadImage('img/triangulo.png');//
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  dibujar() {
    if (label == 'silbido') {

      this.segundos = 80;
      if (this.posicionesCirculo.length < 200 && millis() - this.ultimoTiempo > this.segundos) {
        const posX = random(-400, 400);
        const posY = random(-400, 400);
        const sisuperpone = this.verificarSuperposicion(posX, posY, 20, 20);
        if (!sisuperpone) {
          const tam = random(20, 50);
          const imagen = random() > 0.5 ? this.foto1 : this.foto2; // Decide qué imagen utilizar aleatoriamente
          this.posicionesCirculo.push({ x: posX, y: posY, tam: tam, imagen: imagen }); // Agrega la imagen al objeto
          this.ultimoTiempo = millis();
        }
      }
    
      for (let i = 0; i < this.posicionesCirculo.length; i++) {
        const pos = this.posicionesCirculo[i];
        image(pos.imagen, pos.x, pos.y, pos.tam, pos.tam); // Utiliza la imagen almacenada para dibujar el círculo
      }
    

//-----

    } else if (label == 'shh') {
      this.segundos = 400;
      if (this.posicionesTriangulo.length < 80 && millis() - this.ultimoTiempo > this.segundos) {
        const posX = random(-400, 400);
        const posY = random(-400, 400);
        const angulo = random(0, 360);
        const sisuperpone = this.verificarSuperposicion(posX, posY, 50, 50);
        if (!sisuperpone) {
          this.posicionesTriangulo.push({ x: posX, y: posY, rotacion: angulo });
          this.ultimoTiempo = millis();
        }
      }

      //todas las modificaciones de tamanios de png deben hacerse en estas secciones de codigo

      for (let i = 0; i < this.posicionesTriangulo.length; i++) {
        const pos = this.posicionesTriangulo[i];
        push();
        translate(pos.x, pos.y);
        rotate(radians(pos.rotacion));
        image(this.foto4, 0, 0, 60, 60);
        pop();
      }

//-----

} else if (label == 'aplauso') {
  this.segundos = 500;
  if (this.posicionesForma.length < 10 && millis() - this.ultimoTiempo > this.segundos) {
    const posX = random(-400, 400);
    const posY = random(-400, 400);
    const angulo = random(-45, 90);
    const sisuperpone = this.verificarSuperposicion(posX, posY, 100, 100);
    if (!sisuperpone) {
      const imagen = random() > 0.5 ? this.foto3 : this.foto; // Decide qué imagen utilizar aleatoriamente
      this.posicionesForma.push({ x: posX, y: posY, rotacion: angulo, imagen: imagen });
      this.ultimoTiempo = millis();
    }
  }

  for (let i = 0; i < this.posicionesForma.length; i++) {
    const pos = this.posicionesForma[i];
    push();
    translate(pos.x, pos.y);
    rotate(radians(pos.rotacion));
    image(pos.imagen, 0, 0, 120, 120); // Utiliza la imagen almacenada para dibujar la forma
    pop();
  }
}
 }
  
  verificarSuperposicion(posX, posY, width, height) {
    for (let i = 0; i < this.posicionesCirculo.length; i++) {
      const pos = this.posicionesCirculo[i];
      const distancia = dist(posX, posY, pos.x, pos.y);
      if (distancia < width && distancia < height) {
        return true; // Hay superposición
      }
    }
  
    for (let i = 0; i < this.posicionesTriangulo.length; i++) {
      const pos = this.posicionesTriangulo[i];
      const distancia = dist(posX, posY, pos.x, pos.y);
      if (distancia < width && distancia < height) {
        return true; // Hay superposición
      }
    }
  
    for (let i = 0; i < this.posicionesForma.length; i++) {
      const pos = this.posicionesForma[i];
      const distancia = dist(posX, posY, pos.x, pos.y);
      if (distancia < width && distancia < height) {
        return true; // Hay superposición, B
      }
    }
  
    return false; // No hay superposición
  }
  
  
  
 /////////////////////////////////////////////////////////////////////////////////////////////////////////

//  dibujar_lineas(){
//   if (haySonido && this.posicionesRayas.length < 100 && millis() - this.ultimoTiempo > this.segundos) {
//     const posX = random(-400, 600);
//     const posY = random(-400, 600);
//     const angulo = random(0, 360); 
//     this.posicionesRayas.push({ x: posX, y: posY, rotacion: angulo });
//     this.ultimoTiempo = millis(); 
//   }

 
//   for (let i = 0; i < this.posicionesRayas.length; i++) {
//     const pos = this.posicionesRayas[i];
//     push(); 
//     translate(pos.x, pos.y);
//     rotate(radians(pos.rotacion)); 
//     image(this.foto, 0, 0, 85, 85); 
//     pop(); 
//   }
// }
  

 }




