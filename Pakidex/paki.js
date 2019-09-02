var imagenes = [];
imagenes["cauchin"] = "./vaca.png";
imagenes["pokacho"] = "./pollo.png";


class Pakiman{
    constructor(nombre, type, vida, ataque){
        this.nombre = nombre;
        this.type = type;
        this.vida = vida;
        this.ataque = ataque;
        
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];

    }

    cries(){
        alert(this.nombre);
    }

    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque + "<br>");
        document.write("Tipo: " + this.type + "<br><hr>");
        document.write("</p>");
    }
}


var coleccion = [];
coleccion.push(new Pakiman("cauchin", "tierra", 100, 30));
coleccion.push(new Pakiman("pokacho", "electrico", 80, 50));



for (var p of coleccion) {
    p.mostrar();
}