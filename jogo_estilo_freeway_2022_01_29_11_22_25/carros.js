//códigos dos carros

xCarros = [600, 600, 600, 600, 600, 600];
yCarros = [40, 96, 150, 210, 270, 318];
larguraCarros = 50;
alturaCarros = 40;
velocidadeDosCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

function mostraCarro() {
  for(let i = 0; i < imagensDosCarros.length; i++) {
    image(imagensDosCarros[i], xCarros[i], yCarros[i],  larguraCarros, alturaCarros)
  }
}

function movimentaCarro() {
  for(let i = 0; i < imagensDosCarros.length; i++) {
    xCarros[i] -= velocidadeDosCarros[i];
  }
}

function retornaCarro() {
  for(let i = 0; i < imagensDosCarros.length; i++) {
    if(passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) { 
  return xCarro < - 50;
}