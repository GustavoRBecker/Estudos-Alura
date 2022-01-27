//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidada da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da minha raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variáveis raquete adversário
let xRaqueteAdversario = 585;
let yRaqueteAdversario = 150;
let velocidadeYAdversario;
let chanceDeErrar = 0;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  moveBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //tocaRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteAdversario, yRaqueteAdversario);
  mostraRaquete(xRaqueteAdversario, yRaqueteAdversario);
  movimentaRaqueteAdversario();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete)
}

function movimentaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function tocaRaquete() {
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteAdversario() {
  velocidadeYAdversario = yBolinha - yRaqueteAdversario - larguraRaquete / 2 - 30;
  yRaqueteAdversario += velocidadeYAdversario + chanceDeErrar;
  calculaChanceDeErrar();
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(130, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);
  fill(color(255,140,0));
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 450, 26);
}

function marcaPonto() {
  if(xBolinha > 590) {
    meusPontos ++;
    ponto.play();
  }
  if(xBolinha < 10) {
    pontosDoOponente ++;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if(pontosDoOponente >= meusPontos) {
    chanceDeErrar ++;
    if(chanceDeErrar >= 39) {
      chanceDeErrar = 40;
    }
  } else {
    chanceDeErrar --;
    if(chanceDeErrar <= 35) {
      chanceDeErrar = 35;
    }
  }
}