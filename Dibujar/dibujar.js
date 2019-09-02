var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 9;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
}

// Para dibujar con las teclas

document.addEventListener("keydown", dibujarTeclado);
function dibujarTeclado(evento) {
    var color = "#34495e";
    var movimiento = 8;

    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujarLinea("color", x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;

        case teclas.UP:
            dibujarLinea("color", x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;

        case teclas.RIGHT:
            dibujarLinea("color", x, y, x + movimiento, y, papel);
            x = x + movimiento;

            break;

        case teclas.DOWN:
            dibujarLinea("#color", x, y, x, y + movimiento, papel);
            y = y + movimiento;

            break;

        default:

    }

}
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};
var x = 200;
var y = 200;

// Para dibujar con el mouse,OJO los valores de X y Y se modificaran.





document.addEventListener("mouseenter", dibujar_mouse);
function dibujar_mouse(evento) {
    var click = 0;


    cuadrito.addEventListener("mousedown", clickDown);
    function clickDown() {
        click = click + 1;
        console.log(click);

    }
    cuadrito.addEventListener("mouseup", clickUp);
    function clickUp() {
        click = click - 1;
        console.log(click);
    }



    cuadrito.addEventListener("mousemove", clickMove);
    function clickMove(m) {
        if (click == 1) {
            x = m.x+10;
            y = m.y-50;
            dibujarLinea("purple", x, y, x-5, y-5, papel);
            console.log(x, y);
        }

    }

}


