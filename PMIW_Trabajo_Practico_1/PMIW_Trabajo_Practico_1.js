let framesCaminar= [];
let framesCaminar2 = [];
let frameschar02=[];
let frameschar002=[];
const N_FRAMES = 4;
const ESCALA = 1;
let x = -60;
let y= 160;
const VELOCIDAD = 2;
let mysound;
let estado='derecha';
let estado2='1';
let nubes;
let capa1;
let capa2;
let capa3;
let capa4;
let capa5;
let capa6;
function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}
function dibujarPersonaje(frame, x, y, escala) {
  image(frame, x, y, frame.width * escala, frame.height * escala);
}
function preload() {
  for (let i = 0; i < N_FRAMES; i++) {
    framesCaminar.push(loadImage('assets/caminar_' + i + '.png'));
    framesCaminar2.push(loadImage('assets/caminar2_' + i + '.png'));
    frameschar02.push(loadImage('assets/Char02_' + i + '.png'));
    frameschar002.push(loadImage('assets/Char002_' + i + '.png'));
  }
  print(framesCaminar);
  print(framesCaminar2);
  print(frameschar02);
  print(frameschar002);
  capa1=loadImage('assets/Capa1.png');
  capa2=loadImage('assets/Capa2.png');
  capa3=loadImage('assets/Capa3.png');
  capa4=loadImage('assets/Capa4.png');
  capa5=loadImage('assets/Capa5.png');
  capa6=loadImage('assets/Capa6.png');
}
function setup() {
  createCanvas(800, 600);
}

function reiniciar() {
  x = -60;
  y = 160;
  estado = 'derecha';
  estado2 = '1';
}
function keyPressed() {
  if (key == 'z' || key == 'Z') {
    reiniciar();
  }
}

  function draw() {
  image(capa1, 0, 0);
  image(capa2, 0, 0);
  let frame;
  // Máquina de estados
  if (estado == 'derecha') {
    x += VELOCIDAD;
    if (x >= 260) {
      x = 260;
      estado = 'abajo';
    }
    // Animación hacia la derecha
    frame = elegirFrame(framesCaminar, 4);

  } else if (estado == 'abajo') {
    y += VELOCIDAD;
if (y >= 384) {
    y = 384;
    estado = 'derecha2';
  }
    // Animación hacia abajo
    frame = elegirFrame(framesCaminar2, 4);
  }
else if (estado == 'derecha2') {
    x += VELOCIDAD;
if (x >= 400) {
    x = 400;
    estado = 'abajo2';
  }
    // Animación hacia derecha
    frame = elegirFrame(framesCaminar, 4);
  }
  else if (estado == 'abajo2') {

  y += VELOCIDAD;

  if (y >= 650) {
    y = -80;
estado = 'abajo3';
  }

  frame = elegirFrame(framesCaminar2, 4);
}
else if (estado == 'abajo3') {
 x=220;
  y += VELOCIDAD;

  if (y >= 400) {
    y = 400;
estado = 'derecha3';
  }

  frame = elegirFrame(frameschar02, 4);
}

else if (estado == 'derecha3') {

  x += VELOCIDAD;

  if (x >= 340) {
    x = 340;
estado = 'abajo4';
  }

  frame = elegirFrame(frameschar002, 4);
}

else if (estado == 'abajo4') {
 x=340;
  y += VELOCIDAD;

  if (y >= 660) {
    y = 660;
estado = 'abajo5';
  }

  frame = elegirFrame(frameschar02, 4);
}

  // Dibujar personaje
  dibujarPersonaje(frame, x, y, ESCALA);
  image(capa3, 0, 0);
  image(capa4, 0, 0);
  image(capa5, 0, 0);
  image(capa6, 0, 0);
}
