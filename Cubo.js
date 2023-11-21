class Cubo {
  constructor(lado) {
    this.lado = lado;
    this.cubo = [];
    this.giro = null;
  }
  
  armar() {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          let c = new Cubie(x, y, z, lado);
          c.armar();
          this.cubo.push(c);
        }
      }
    }
  }

  actualizar(x, y, z, dir) {
    if (x != 0) {
      for (let i = 0; i < this.cubo.length; i++) {
        if (x == this.cubo[i].x) {
          this.cubo[i].girar(x, y, z, dir);
        }
      }
    } else if (y != 0) {
      for (let i = 0; i < this.cubo.length; i++) {
        if (y == this.cubo[i].y) {
          this.cubo[i].girar(x, y, z, dir);
        }
      }
    } else if (z != 0) {
      for (let i = 0; i < this.cubo.length; i++) {
        if (z == this.cubo[i].z) {
          this.cubo[i].girar(x, y, z, dir);
        }
      }
    }
  }

  mostrar() {
    for (let i = 0; i < this.cubo.length; i++) {
      push();
      if (this.giro != null && !this.giro.terminado) {
        if (this.cubo[i].x != 0 && this.cubo[i].x == this.giro.x) {
          rotateX(this.giro.angulo);
        } else if (this.cubo[i].y != 0 && this.cubo[i].y == this.giro.y) {
          rotateY(this.giro.angulo);
        } else if (this.cubo[i].z != 0 && this.cubo[i].z == this.giro.z) {
          rotateZ(this.giro.angulo);
        }
        this.giro.actualizar();
      } else if (this.giro != null && this.giro.terminado) {
        this.actualizar(this.giro.x, this.giro.y, this.giro.z, this.giro.dir);
        this.giro = null;
      }
      this.cubo[i].mostrar();
      pop();
    }
  }

  girar(x, y, z, dir) {
    if (this.giro == null) {
      this.giro = new Giro(x, y, z, dir);
      return true;
    }
    return false;
  }  
}