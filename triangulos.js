class Triangulos {
  constructor() {
    this.img;
    this.tiempo = 50; // Intervalo de 1 segundo (1000 ms)
    this.ultimoTiempoGeneracion = 0; // Tiempo del último triángulo generado
    this.triangulos = []; // Arreglo para almacenar los triángulos generados
    this.trianguloActual = 0; // Índice del triángulo actual a dibujar
    this.usarPrimerCodigo = random() < 0.5; // Variable para decidir qué código usar
  }

  dibujar() {
    strokeWeight(4.5);
    translate(-width / 2, -height / 2);

    // Verificar si ha pasado el tiempo suficiente para generar un nuevo triángulo
    if (millis() - this.ultimoTiempoGeneracion >= this.tiempo) {
      // Generar el nuevo triángulo y agregarlo al arreglo
      this.generarTriangulo();

      // Actualizar el tiempo del último triángulo generado
      this.ultimoTiempoGeneracion = millis();

      // Incrementar el índice del triángulo actual
      this.trianguloActual++;
    }
    // Dibujar el triángulo actual
    if (this.trianguloActual < this.triangulos.length) {
      const triangulo = this.triangulos[this.trianguloActual];
      beginShape(TRIANGLES);
      for (let j = 0; j < 6; j += 2) {
        vertex(triangulo[j], triangulo[j + 1]);
      }
      endShape();
    }
  }

  generarTriangulo() {
    let nuevoTriangulo;

    if (this.usarPrimerCodigo) {
      nuevoTriangulo = [
        [0, 0, 0, 100, 400, 0],
        [0, 100, 0, 350, 133, 300],
        [220, 195, 400, 0, 680, 5],
        [400, 0, 2, 100, 132, 295],
        [162, 560, 180, 699, 280, 517],
        [0, 800, 400, 800, 450, 545],
        [119, 305, 0, 352, 0, 800],
        [438, 600, 573, 600, 398, 812],
        [438, 600, 573, 600, 398, 812],
        [225, 190, 310, 303, 536, 65],
        [223, 190, 130, 303, 312, 303],
        [636, 300, 550, 696, 900, 700],
        [160, 561, 313, 301, 586, 398],
        [310, 300, 530, 70, 612, 408],
        [615, 400, 530, 70, 670, 10],
        [180, 699, 0, 800, 120, 302],
        [315, 302, 160, 560, 120, 302],
        [178, 700, 287, 510, 363, 590],
        [440, 600, 453, 530, 575, 600],
        [456, 530, 615, 400, 575, 600],
        [290, 510, 364, 590, 460, 530],
        [290, 510, 600, 400, 460, 530],
        [568, 608, 400, 814, 530, 816],
        [680, 5, 813, 72, 818, 11],
        [554, 700, 815, 700, 510, 900],
        [630, 817, 815, 700, 900, 900],
        [640, 300, 815, 100, 818, 580],
        [315, 302, 160, 560, 120, 302],
        [630, 310, 672, 0, 834, 80]
      ];
    } else {
      nuevoTriangulo = [
        [0, 0, 0, 100, 400, 0],
        [0, 100, 200, 50, 200, 400],
        [0, 100, 15, 350, 133, 300],
        [15, 350, 133, 300, 200, 900],
        [162, 560, 133, 300, 280, 520],
        [220, 46, 400, 0, 640, 5],
        [199, 400, 300, 300, 500, 400],
        [199, 400, 200, 290, 300, 300],
        [199, 50, 200, 290, 300, 300],
        [200, 50, 690, 0, 252, 180],
        [500, 400, 670, 0, 590, 690],
        [0, 800, 126, 680, 190, 860],
        [0, 800, 126, 680, 81, 545],
        [0, 800, 12, 340, 81, 545],
        [200, 400, 335, 610, 439, 549],
        [180, 700, 335, 610, 280, 520],
        [162, 560, 180, 699, 280, 517],
        [200, 400, 400, 400, 450, 553],
        [0, 800, 400, 800, 450, 545],
        [400, 400, 500, 400, 450, 553],
        [438, 600, 563, 600, 499, 400],
        [438, 600, 563, 600, 398, 812],
        [615, 800, 563, 600, 398, 812],
        [615, 800, 590, 690, 820, 812],
        [499, 400, 302, 303, 526, 70],
        [252, 180, 302, 303, 536, 65],
        [662, 12, 495, 413, 530, 65],
        [636, 300, 590, 696, 900, 700],
        [730, 446, 826, 40, 927, 100],
        [730, 440, 810, 300, 815, 566],
        [729, 443, 810, 116, 640, 310],
        [690, 10, 800, 60, 800, 9],
        [640, 310, 672, 0, 834, 80],
        [800, 800, 800, 600, 590, 690]
      ];
    }

    this.triangulos.push(...nuevoTriangulo);
  }
}
