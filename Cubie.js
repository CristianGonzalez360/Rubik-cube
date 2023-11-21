class Cubie {
  constructor(x, y, z, lado) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.lado = lado;
    this.caras = [];
  }

  armar() {
    let c1, c2, c3, c4, c5, c6;
    if (this.x == 1) {
      c1 = new Cara(-1 - this.lado / 2, 0, 0, this.lado, "#F39027");
    } else {
      c1 = new Cara(-1 - this.lado / 2, 0, 0, this.lado, "#000000");
    }
    if (this.x == -1) {
      c2 = new Cara(1 + this.lado / 2, 0, 0, this.lado, "#F82828");
    } else {
      c2 = new Cara(1 + this.lado / 2, 0, 0, this.lado, "#000000");
    }
    if (this.y == 1) {
      c3 = new Cara(0, -1 - this.lado / 2, 0, this.lado, "#FFFFFF");
    } else {
      c3 = new Cara(0, -1 - this.lado / 2, 0, this.lado, "#000000");
    }
    if (this.y == -1) {
      c4 = new Cara(0, 1 + this.lado / 2, 0, this.lado, "#FFEB3B");
    } else {
      c4 = new Cara(0, 1 + this.lado / 2, 0, this.lado, "#000000");
    }
    if (this.z == 1) {
      c5 = new Cara(0, 0, -1 - this.lado / 2, this.lado, "#455BD1");
    } else {
      c5 = new Cara(0, 0, -1 - this.lado / 2, this.lado, "#000000");
    }
    if (this.z == -1) {
      c6 = new Cara(0, 0, 1 + this.lado / 2, this.lado, "#37963B");
    } else {
      c6 = new Cara(0, 0, 1 + this.lado / 2, this.lado, "#000000");
    }
    this.caras.push(c1);
    this.caras.push(c2);
    this.caras.push(c3);
    this.caras.push(c4);
    this.caras.push(c5);
    this.caras.push(c6);
  }

  mostrar() {
    push();
    translate(
      this.x - this.x * this.lado,
      this.y - this.y * this.lado,
      this.z - this.z * this.lado
    );

    for (let i = 0; i < this.caras.length; i++) {
      this.caras[i].mostrar();
    }
    pop();
  }

  girar(x, y, z, dir) {
    if (x != 0) {
      let newY = round(
        this.y * cos((dir * PI) / 2) + this.z * -sin((dir * PI) / 2)
      );
      let newZ = round(
        this.y * sin((dir * PI) / 2) + this.z * cos((dir * PI) / 2)
      );
      this.y = newY;
      this.z = newZ;

      for (let i = 0; i < this.caras.length; i++) {
        this.caras[i].girar(x, y, z, dir);
      }
    } else if (y != 0) {
      let newX = round(
        this.x * cos((dir * PI) / 2) + this.z * sin((dir * PI) / 2)
      );
      let newZ = round(
        this.x * -sin((dir * PI) / 2) + this.z * cos((dir * PI) / 2)
      );
      this.x = newX;
      this.z = newZ;

      for (let i = 0; i < this.caras.length; i++) {
        this.caras[i].girar(x, y, z, dir);
      }
    } else if (z != 0) {
      let newX = round(
        this.x * cos((dir * PI) / 2) + this.y * -sin((dir * PI) / 2)
      );
      let newY = round(
        this.x * sin((dir * PI) / 2) + this.y * cos((dir * PI) / 2)
      );
      this.x = newX;
      this.y = newY;

      for (let i = 0; i < this.caras.length; i++) {
        this.caras[i].girar(x, y, z, dir);
      }
    }
  }
}
