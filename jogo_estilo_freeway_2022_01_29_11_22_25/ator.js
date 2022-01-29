//códigos do ator

let colisao = false;
let xAtor = 85;
let yAtor = 371;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
   if (keyIsDown(DOWN_ARROW)) {
    if(podeDescer()) {
     yAtor += 3 
    }
  }
}

function verificaColisao() {
  for(let i = 0; i < imagensDosCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 15);
    if(colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()) {
        meusPontos--;
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 371;
}

function exibePontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPontos() {
  if(yAtor < 15) {
    meusPontos++;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeDescer() {
  return yAtor < 371;
}