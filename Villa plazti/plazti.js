var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var x = 200;
var y = 200;
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};
var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo ={
url:"pollo.png",
cargaOK: false
}
var cantidad = aleatorio(1, 10);



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
document.addEventListener("keydown",moverPollo);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}


function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}
function moverPollo(evento){
    
    var movimiento = 80;
    
    pollo.cargaOK=true;
     
    switch (evento.keyCode) {
        case teclas.LEFT:
            papel.drawImage(pollo.imagen,x-movimiento,y);
            x = x - movimiento;
            console.log(x);
            break;

        case teclas.UP:
            papel.drawImage(pollo.imagen,x,y-movimiento);
            y = y - movimiento;
            break;

        case teclas.RIGHT:
            papel.drawImage(pollo.imagen,x+movimiento,y);
            x = x + movimiento;

            break;

        case teclas.DOWN:
            papel.drawImage(pollo.imagen,x,y+movimiento);
            y = y + movimiento;

            break;

        default:

    }

}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}