class Cara {
  constructor(x, y, z, lado, color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.lado = lado;
    this.color = color;
  }

  mostrar() {
    push();
    translate(this.x, this.y, this.z);
    if (this.y == 0 && this.z == 0) {
      rotateY(PI / 2);
    } else if (this.x == 0 && this.z == 0) {
      rotateX(PI / 2);
    }
    fill(this.color);
    rectMode(CENTER);
    square(0,0,this.lado);
    pop();
  }
  
  mostrar2() {
    pg.push();
    pg.translate(this.x, this.y, this.z);
    if (this.y == 0 && this.z == 0) {
      pg.rotateY(PI / 2);
    } else if (this.x == 0 && this.z == 0) {
      pg.rotateX(PI / 2);
    }
    pg.fill(this.color);
    pg.rectMode(CENTER);
    pg.square(0,0,this.lado);
    pg.pop();
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
    } else if (y != 0) {
      let newX = round(
        this.x * cos((dir * PI) / 2) + this.z * sin((dir * PI) / 2)
      );
      let newZ = round(
        this.x * -sin((dir * PI) / 2) + this.z * cos((dir * PI) / 2)
      );
      this.x = newX;
      this.z = newZ;
    } else if (z != 0) {
      let newX = round(
        this.x * cos((dir * PI) / 2) + this.y * -sin((dir * PI) / 2)
      );
      let newY = round(
        this.x * sin((dir * PI) / 2) + this.y * cos((dir * PI) / 2)
      );
      this.x = newX;
      this.y = newY;
    }
  }
}
