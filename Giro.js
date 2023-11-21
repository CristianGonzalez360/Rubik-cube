class Giro {
  constructor(x, y, z, dir) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dir = dir;
    this.terminado = false;
    this.angulo = 0;
  }

  actualizar() {
    this.angulo += this.dir * 0.008;
    if (abs(this.angulo) > HALF_PI) {
      this.angulo = 0;
      this.terminado = true;
    }
  }
}
