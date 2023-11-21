let pg;
let anguloY = 0.5;
let anguloX = -0.5;
let lado = 50;
let cubo = [];
let cubie;
let rotando = false;

let colores = [
  "#F39027",
  "#FFFFFF",
  "#455BD1",
  "#F82828",
  "#FFEB3B",
  "#37963B",
];
let letras = ["a", "s", "d", "f", "g", "h", "q", "w", "e", "r", "t", "y"];
let todosGiros = [
  [1, 0, 0, 1],
  [1, 0, 0, -1],
  [0, 1, 0, 1],
  [0, 1, 0, -1],
  [0, 0, 1, 1],
  [0, 0, 1, -1],
  [-1, 0, 0, 1],
  [-1, 0, 0, -1],
  [0, -1, 0, 1],
  [0, -1, 0, -1],
  [0, 0, -1, 1],
  [0, 0, -1, -1],
];

let secuencia = [];
let indice = 0;

function setup() {
  cnv = createCanvas(500, 500, WEBGL);
  cnv.elt.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    mouseClicked(e);
  });
  cubo = new Cubo(lado);
  cubo.armar();

  cubie = new BigCubie(lado * 3);
  cubie.armar();

  let indice = 0;
  for (let i = 0; i < 6; i++) {
    let color = colores[i];
    for (let j = 0; j < 2; j++) {
      button = createButton("", letras[indice]);
      button.style("background-color", color);
      button.position(i * lado, j * lado).size(lado, lado);
      indice++;
      button.mousePressed(apretarBoton);
    }
  }
  button = createButton("MEZCLAR");
  button.style("background-color", color);
  button.position(width - lado * 2, 0).size(2 * lado, lado);
  button.mousePressed(crearSecuencia);

  pg = createGraphics(width, height, WEBGL);
  //pg.show();
  //pg.style("display", "inline");
}

function draw() {
  background(220);

  push();
  rotateX(anguloX);
  rotateY(anguloY);
  cubo.mostrar();
  mezclar();
  pop();

  pg.push();
  pg.clear();
  pg.background(255);
  pg.rotateX(anguloX);
  pg.rotateY(anguloY);
  cubie.mostrar();
  pg.pop();
}

function apretarBoton() {
  let v = this.value();
  if (v == "a") {
    cubo.girar(1, 0, 0, 1);
  } else if (v == "s") {
    cubo.girar(1, 0, 0, -1);
  } else if (v == "d") {
    cubo.girar(0, 1, 0, 1);
  } else if (v == "f") {
    cubo.girar(0, 1, 0, -1);
  } else if (v == "g") {
    cubo.girar(0, 0, 1, 1);
  } else if (v == "h") {
    cubo.girar(0, 0, 1, -1);
  } else if (v == "q") {
    cubo.girar(-1, 0, 0, -1);
  } else if (v == "w") {
    cubo.girar(-1, 0, 0, 1);
  } else if (v == "e") {
    cubo.girar(0, -1, 0, -1);
  } else if (v == "r") {
    cubo.girar(0, -1, 0, 1);
  } else if (v == "t") {
    cubo.girar(0, 0, -1, -1);
  } else if (v == "y") {
    cubo.girar(0, 0, -1, 1);
  }
}

function mouseDragged() {
  rotando = true;

  let mX = map(pmouseY - mouseY, 0, height, 0, 2 / PI);
  let mY = map(pmouseX - mouseX, 0, width, 0, 2 / PI);

  anguloX += mX * 2;
  if (anguloX > 2 * PI) {
    anguloX -= 2 * PI;
  } else if (anguloX < 0) {
    anguloX += 2 * PI;
  }

  if (anguloX > PI / 2 && anguloX < (3 * PI) / 2) {
    anguloY += mY * 2;
  } else {
    anguloY -= mY * 2;
  }
  return false;
}

function mezclar() {
  if (indice < secuencia.length) {
    let next = secuencia[indice];
    if (cubo.girar(next[0], next[1], next[2], next[3])) {
      indice++;
      next = secuencia[indice];
    }
  }
}

function crearSecuencia() {
  secuencia = [];
  indice = 0;
  let ultimo = random(todosGiros);
  secuencia.push(ultimo);
  while (secuencia.length < 1000) {
    let siguiente = random(todosGiros);
    if (
      ultimo[0] != siguiente[0] ||
      ultimo[1] != siguiente[1] ||
      ultimo[2] != siguiente[2]
    ) {
      secuencia.push(siguiente);
      ultimo = siguiente;
    }
  }
}

function mouseClicked(event) {
  let c = getObject(mouseX, mouseY);
  if (rotando == false) {
    if (mouseButton == LEFT) {
      if (c == 0) {
        cubo.girar(1, 0, 0, -1);
      } else if (c == 1) {
        cubo.girar(-1, 0, 0, 1);
      } else if (c == 2) {
        cubo.girar(0, 1, 0, -1);
      } else if (c == 3) {
        cubo.girar(0, -1, 0, 1);
      } else if (c == 4) {
        cubo.girar(0, 0, 1, -1);
      } else if (c == 5) {
        cubo.girar(0, 0, -1, 1);
      }
    } else if (mouseButton == RIGHT) {
      if (c == 0) {
        cubo.girar(1, 0, 0, 1);
      } else if (c == 1) {
        cubo.girar(-1, 0, 0, -1);
      } else if (c == 2) {
        cubo.girar(0, 1, 0, 1);
      } else if (c == 3) {
        cubo.girar(0, -1, 0, -1);
      } else if (c == 4) {
        cubo.girar(0, 0, 1, 1);
      } else if (c == 5) {
        cubo.girar(0, 0, -1, -1);
      }
    }
  }
  rotando = false;
  return false;
}

function getObject(mx, my) {
  if (mx > width || my > height) {
    return 255;
  }

  var gl = pg.elt.getContext("webgl");
  var pix = getPixels();

  var index = 4 * ((gl.drawingBufferHeight - my) * gl.drawingBufferWidth + mx);

  return pix[index]; // Only returning the red channel as the object index.
}

function getPixels() {
  var gl = pg.elt.getContext("webgl");
  var pixels = new Uint8Array(
    gl.drawingBufferWidth * gl.drawingBufferHeight * 4
  );
  gl.readPixels(
    0,
    0,
    gl.drawingBufferWidth,
    gl.drawingBufferHeight,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    pixels
  );
  return pixels;
}
