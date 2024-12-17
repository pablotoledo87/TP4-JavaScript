class Rectangulo {
    constructor (lado1,lado2){
        this._alto = lado1;
        this._ancho = lado2;
    }
    set cambiarAncho(nuevoAncho){
        this._ancho = nuevoAncho
    }
    set cambiarAlto(nuevaAltura){
        this._ancho = nuevaAltura
    }
    get anchoRectangulo(){
        return this._alto
    }
}



document.write(`<h2>Primer Rectangulo</h2>`);

let Rectangulo1 = new Rectangulo(10,9)

