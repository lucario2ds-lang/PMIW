let Pactual = 0;

let homeImg, creditosImg;
let p1, p2, p3, p4;
let pre1, pre2, pre3, pre4a, pre4b, pre4c, pre5a, pre5b, pre5c, pre6a, pre6b, pre7b1, pre7b2, pre8b1, pre9b1;
let fut1, fut2, fut3, fut4a, fut4b, fut5a, fut5b;

let musicaActual = null;
let ultimaPantalla = -1;

let cancionportada;
let musicaPrehistoria;
let musicaFuturo;
let musicaDecision;
let musicaFinal;
function preload() {
  
  homeImg = loadImage("data/pantallahome.png");
  creditosImg = loadImage("data/pantallacreditos.png");
 cancionportada = loadSound('data/cancion1.ogg'); 
 musicaPrehistoria = loadSound("data/prehistoria.ogg");
musicaFuturo = loadSound("data/futuro.ogg");
musicaDecision = loadSound("data/decision.ogg");
musicaFinal = loadSound("data/final.ogg");
  p1 = loadImage("data/Pantalla1.png");
  p2 = loadImage("data/Pantalla2.png");
  p3 = loadImage("data/Pantalla3.png");
  p4 = loadImage("data/Pantalla4.png");

  pre1 = loadImage("data/Prehistoria1.png");
  pre2 = loadImage("data/Prehistoria2.png");
  pre3 = loadImage("data/Prehistoria3.png");
  pre4a = loadImage("data/Prehistoria4a.png");
  pre4b = loadImage("data/Prehistoria4b.png");
  pre4c = loadImage("data/Prehistoria4c.png");
  pre5a = loadImage("data/Prehistoria5a.png");
  pre5b = loadImage("data/Prehistoria5b.png");
  pre5c = loadImage("data/Prehistoria5c.png");
  pre6a = loadImage("data/Prehistoria6a.png");
  pre6b = loadImage("data/Prehistoria6b.png");
  pre7b1 = loadImage("data/Prehistoria7b1.png");
  pre7b2 = loadImage("data/Prehistoria7b2.png");
  pre8b1 = loadImage("data/Prehistoria8b1.png");
  pre9b1 = loadImage("data/Prehistoria9b1.png");

  fut1 = loadImage("data/futuro1.png");
  fut2 = loadImage("data/futuro2.png");
  fut3 = loadImage("data/futuro3.png");
  fut4a = loadImage("data/futuro4a.png");
  fut4b = loadImage("data/futuro4b.png");
  fut5a = loadImage("data/futuro5a.png");
  fut5b = loadImage("data/futuro5b.png");
}
function actualizarMusica() {
  let musicaElegida;

  switch (Pactual) {
    case 0:
    case 1:
      musicaElegida = cancionportada;
      break;

    case 5:
    case 8:
    case 13:
    case 17:
      musicaElegida = musicaDecision;
      break;
    case 6:
    case 7:
    case 9:
    case 10:
    case 11:
    case 12:
    case 14:
    case 18:
    case 19:
      musicaElegida = musicaPrehistoria;
      break;
    case 15:
    case 16:
    case 21:
    case 22:
    case 27:
      musicaElegida = musicaFuturo;
      break;
    case 20:
    case 23:
    case 24:
    case 25:
    case 26:
      musicaElegida = musicaFinal;
      break;
    default:
      musicaElegida = cancionportada;
      break;
  }

  if (musicaElegida !== musicaActual) {

    if (musicaActual !== null && musicaActual.isPlaying()) {
      musicaActual.stop();
    }
    musicaActual = musicaElegida;

    if (musicaActual && !musicaActual.isPlaying()) {
      musicaActual.setVolume(0.1);
      musicaActual.loop();
    }
  }
}
function setup() {
  createCanvas(800, 450);
  textFont("sans-serif");
}

function draw() {
  background(0);
 actualizarMusica();
  switch(Pactual) {
    case 0:
      dibufondo(homeImg);
      dibuboton(250, 310, 300, 40, "INICIAR AVENTURA");
      dibuboton(250, 360, 300, 40, "CRÉDITOS");
      break;

    case 1:
      dibufondo(creditosImg);
      fill(0, 0, 0, 200);
      rect(150, 40, 500, 320, 10);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(22);
      text("CRÉDITOS", width / 2, 80);
      textSize(15);
      text( "alumnos: maximo martinez y maximo larraya\nComision: [comision 5]\nalumnos:maximo martinez y maximo larraya ", width / 2, 180);
      dibuboton(250, 380, 300, 40, "VOLVER AL MENÚ");
      break;

    case 2:
      PantallaT("El Legado del Abuelo", "Analizas minuciosamente el mapa antiguo que descubriste en el viejo cofre de tu abuelo. Sus trazos revelan un secreto oculto en las montañas.", p1);
      break;
    case 3:
      PantallaT("La Senda de la Montaña", "Tu viaje ha comenzado oficialmente. Dejas atrás los caminos seguros y te adentras en la escarpada puerta de la montaña guiado por el mapa.", p2);
      break;
    case 4:
      PantallaT("El Secreto de la Cueva", "Llegas hasta la enigmática entrada de la cueva. Del interior brotan extrañas ondas de energía que hacen vibrar el aire a tu alrededor.", p3);
      break;
    case 6:
      PantallaT("Un Mundo Primigenio", "El destello se desvanece y emerges del portal verde. Un vasto y salvaje paisaje prehistórico se abre paso ante tus ojos.", pre1);
      break;
    case 7:
      PantallaT("El Despertar de la Tierra", "Un violento y repentino temblor sacude el suelo con fuerza. A lo lejos, un imponente volcán entra en erupción y retrocedes instintivamente.", pre2);
      break;
    case 9:
      PantallaT("Refugio Rústico", "Con el corazón a mil por hora, decides correr desesperadamente buscando resguardo en una sólida cabaña de roca.", pre4a);
      break;
    case 10:
      PantallaT("El Colapso Inminente", "La furia de la naturaleza no perdona. Contemplas con horror cómo toda la estructura de la cabaña comienza a venirse abajo a tu alrededor.", pre5a);
      break;
    case 11:
      PantallaT("Santuario Rupestre", "Buscas refugio en el interior de una cueva ancestral. Las paredes están cubiertas de misteriosas pinturas rupestres y, en el centro, brilla un cristal.", pre4b);
      break;
    case 12:
      PantallaT("La Advertencia Ancestral", "Estás a punto de tocar la reliquia cuando un grito desgarrador te detiene en seco. El chamán de la tribu se interpone con severa advertencia.", pre5b);
      break;
    case 14:
      PantallaT("La Nave Desconocida", "Te atreves a adentrarte en los restos de una nave abandonada. Abrumado por la tecnología, comienzas a presionar botones sin saber qué sucederá.", pre4c);
      break;
    case 15:
      PantallaT(" Horizonte Cibernético", "El portal te transporta al año 3000. Te asomas al gigantesco ventanal de la estación espacial y contemplas la Tierra rodeada de anillos estelares.", fut1);
      break;
    case 16:
      PantallaT("Alerta Roja en la Base", "La paz se rompe de golpe. Las luces de emergencia parpadean en rojo carmesí y un sonido ensordecedor de alarmas inunda los pasillos.", fut2);
      break;
    case 18:
      PantallaT("El Sacrificio del Cristal", "Tomas el cristal sagrado con tus manos; el dolor es intenso y quema tu piel, pero concentras su poder para desviar el río de lava.", pre7b1);
      break;
    case 19:
      PantallaT("La Mano del Destino", "Has logrado salvar el día. Tu mano herida es la prueba de tu valentía mientras el sabio chamán observa tu hazaña con profundo respeto.", pre8b1);
      break;
    case 21:
      PantallaT("Secuencia de Escape", "Optas por la nave pequeña. Descubres que posee un sistema de pilotaje automático y no dudas en presionar el botón de activación.", fut4a);
      break;
    case 22:
      PantallaT("Controles Infranqueables", "Te jugaste por la nave grande, pero el tablero es un laberinto indescifrable de mandos complejos que superan por completo tu comprensión.", fut4b);
      break;
    case 27:
      PantallaT("Salto Estelar Imprevisto", "La nave alienígena despega de un violento salto, impulsándote a través de un vertiginoso túnel de hiperespacio rumbo al futuro.", pre5c);
      break;

    case 5:
      eleccion2("La Bifurcación Temporal", "Te encuentras cara a cara con los dos portales dimensionales de la cueva. ¿Qué camino decides tomar?", p4, "PORTAL VERDE", "PORTAL AZUL");
      break;
    case 13:
      eleccion2("Las Cenizas del Pasado", "Sales de la cueva al exterior y descubres que la lava ha derretido la nave y destruido la cabaña. ¿Cómo procederás?", pre6b, "TOMAR CRISTAL", "ENTRAR A CUEVA");
      break;
    case 17:
      eleccion2("El Hangar en Pánico", "La tripulación evacua despavorida el hangar de la estación espacial. Tienes que elegir rápido en qué vehículo buscarás la salvación.", fut3, "NAVE PEQUEÑA", "NAVE GRANDE");
      break;

    case 8:
      eleccion3("La Gran Encrucijada", "El portal por el que entraste colapsa y desaparece. Debes actuar al instante para elegir un refugio ante el inminente cataclismo.", pre3, "CABAÑA", "CUEVA", "NAVE");
      break;

    case 20:
      pantallaFinal("FINAL MALO: Sepultados", "Una vista panorámica muestra cómo la lava seca sella por completo la cueva. Quedas atrapado para siempre junto a los habitantes del lugar.", pre7b2);
      break;
    case 23:
      pantallaFinal("FINAL BUENO: Rescate Estelar", "El sistema automático responde a tiempo, guiando tu nave pequeña detrás de la flota principal y alejándote ileso de la explosión.", fut5a);
      break;
    case 24:
      pantallaFinal("FINAL MALO: Destrucción Total", "El tiempo se agota y los circuitos fallan. Una masiva explosión consume la estación espacial, atrapándote en el vacío.", fut5b);
      break;
    case 25:
      pantallaFinal("FINAL MALO: Sepultado en escombros", "La magnitud del sismo fue implacable. La cabaña cedió por completo y quedaste atrapado bajo toneladas de rocas y escombros.", pre6a);
      break;
    case 26:
      pantallaFinal("FINAL BUENO: Héroe de la Tribu", "Ha pasado el tiempo y la paz ha regresado. Celebras junto al chamán y los pobladores agradecidos que reconocen tu valentía.", pre9b1);
      break;
  }
}

function PantallaT(titulo, texto, img) {
  dibupantallag(titulo, texto, img);
  dibuboton(580, 380, 160, 40, "Siguiente >");
  dibuboton(60, 380, 160, 40, "< Volver");
}

function eleccion2(titulo, texto, img, op1, op2) {
  dibupantallag(titulo, texto, img);
  dibuboton(80, 380, 300, 40, op1);
  dibuboton(420, 380, 300, 40, op2);
  dibuboton(60, 30, 100, 30, "< Volver");
}

function eleccion3(titulo, texto, img, op1, op2, op3) {
  dibupantallag(titulo, texto, img);
  dibuboton(50, 380, 220, 40, op1);
  dibuboton(290, 380, 220, 40, op2);
  dibuboton(530, 380, 220, 40, op3);
  dibuboton(60, 30, 100, 30, "< Volver");
}

function pantallaFinal(titulo, texto, img) {
  dibupantallag(titulo, texto, img);
  dibuboton(250, 380, 300, 40, "VOLVER AL INICIO");
}

function dibupantallag(titulo, texto, img) {
  if (img) {
    image(img, 0, 0, width, height);
  }
  fill(0, 0, 0, 180);
  noStroke();
  rect(0, 290, width, 160);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(20);
  textStyle(BOLD);
  text(titulo, width / 2, 305);

  textSize(14);
  textStyle(NORMAL);
  text(texto, 40, 335, width - 80, 100);
}

function dibufondo(img) {
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function dibuboton(x, y, w, h, etiqueta) {
  if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    fill(37, 99, 235);
    cursor(HAND);
  } else {
    fill(30, 41, 59);
  }
  stroke(255, 180);
  strokeWeight(1.5);
  rect(x, y, w, h, 8);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(14);
  textStyle(BOLD);
  text(etiqueta, x + w / 2, y + h / 2);
}

function botonprecionado(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}

function mousePressed() {
  cursor(ARROW);

  if (Pactual === 0) {
  if (botonprecionado(250, 310, 300, 40)) {
  userStartAudio();
  Pactual = 2;
}

  if (botonprecionado(250, 360, 300, 40)) {
    Pactual = 1;
  }
}
  else if (Pactual === 1) {
    if (botonprecionado(250, 380, 300, 40)) Pactual = 0;
  } 
  else {
    switch(Pactual) {
      case 2: if (botonprecionado(580, 380, 160, 40)) Pactual = 3; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 3: if (botonprecionado(580, 380, 160, 40)) Pactual = 4; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 4: if (botonprecionado(580, 380, 160, 40)) Pactual = 5; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 6: if (botonprecionado(580, 380, 160, 40)) Pactual = 7; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 7: if (botonprecionado(580, 380, 160, 40)) Pactual = 8; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 9: if (botonprecionado(580, 380, 160, 40)) Pactual = 10; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 10: if (botonprecionado(580, 380, 160, 40)) Pactual = 25; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 11: if (botonprecionado(580, 380, 160, 40)) Pactual = 12; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 12: if (botonprecionado(580, 380, 160, 40)) Pactual = 13; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 14: if (botonprecionado(580, 380, 160, 40)) Pactual = 27; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 15: if (botonprecionado(580, 380, 160, 40)) Pactual = 16; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 16: if (botonprecionado(580, 380, 160, 40)) Pactual = 17; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 18: if (botonprecionado(580, 380, 160, 40)) Pactual = 19; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 19: if (botonprecionado(580, 380, 160, 40)) Pactual = 26; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 21: if (botonprecionado(580, 380, 160, 40)) Pactual = 23; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 22: if (botonprecionado(580, 380, 160, 40)) Pactual = 24; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;
      case 27: if (botonprecionado(580, 380, 160, 40)) Pactual = 15; if (botonprecionado(60, 380, 160, 40)) Pactual = max(0, Pactual - 1); break;

      case 5:
        if (botonprecionado(80, 380, 300, 40)) Pactual = 6;
        if (botonprecionado(420, 380, 300, 40)) Pactual = 15;
        if (botonprecionado(60, 30, 100, 30)) Pactual = max(0, Pactual - 1);
        break;
      case 13:
        if (botonprecionado(80, 380, 300, 40)) Pactual = 18;
        if (botonprecionado(420, 380, 300, 40)) Pactual = 20;
        if (botonprecionado(60, 30, 100, 30)) Pactual = max(0, Pactual - 1);
        break;
      case 17:
        if (botonprecionado(80, 380, 300, 40)) Pactual = 21;
        if (botonprecionado(420, 380, 300, 40)) Pactual = 22;
        if (botonprecionado(60, 30, 100, 30)) Pactual = max(0, Pactual - 1);
        break;

      case 8:
        if (botonprecionado(50, 380, 220, 40)) Pactual = 9;
        if (botonprecionado(290, 380, 220, 40)) Pactual = 11;
        if (botonprecionado(530, 380, 220, 40)) Pactual = 14;
        if (botonprecionado(60, 30, 100, 30)) Pactual = max(0, Pactual - 1);
        break;

      case 20:
      case 23:
      case 24:
      case 25:
      case 26:
        if (botonprecionado(250, 380, 300, 40)) Pactual = 0;
        break;
    }
  }
}
