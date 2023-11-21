class BigCubie {
  constructor(lado) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.lado = lado;
    this.caras = [];
  }

  armar() {
    let c1, c2, c3, c4, c5, c6;
    c1 = new Cara(-1 - this.lado / 2, 0, 0, this.lado, "#009027");
    c2 = new Cara(1 + this.lado / 2, 0, 0, this.lado, "#012828");
    c3 = new Cara(0, -1 - this.lado / 2, 0, this.lado, "#02FFFF");
    c4 = new Cara(0, 1 + this.lado / 2, 0, this.lado, "#03EB3B");
    c5 = new Cara(0, 0, -1 - this.lado / 2, this.lado, "#045BD1");
    c6 = new Cara(0, 0, 1 + this.lado / 2, this.lado, "#05963B");

    this.caras.push(c1);
    this.caras.push(c2);
    this.caras.push(c3);
    this.caras.push(c4);
    this.caras.push(c5);
    this.caras.push(c6);
  }

  mostrar() {
    pg.push();
    pg.translate(
      this.x - this.x * this.lado,
      this.y - this.y * this.lado,
      this.z - this.z * this.lado
    );

    for (let i = 0; i < this.caras.length; i++) {
      this.caras[i].mostrar2();
    }
    pg.pop();
  }
}
