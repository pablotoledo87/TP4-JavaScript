class Rectangulo {
    constructor (lado1,lado2){
        this._alto = lado1;
        this._ancho = lado2;
    }
    set cambiarAncho(nuevoAncho){
        this._ancho = nuevoAncho
    }
    set cambiarAltura(nuevaAltura){
        this._alto = nuevaAltura
    }
    get altoRectangulo(){
        return this._alto
    }
    get anchoRectangulo(){
        return this._ancho
    }
    get area(){
        return this._alto * this._ancho
    }
    get perimetro(){
        return 2*(this._alto + this._ancho)
    }
    detalle(){
        return `<p>El rectangulo tiene una altura de ${this.altoRectangulo} cm. y un ancho de ${this._ancho} cm.</p>`
    }
}



document.write(`<h2>Primer Rectangulo</h2>`);

let Rectangulo1 = new Rectangulo(10,9)
document.write(`${Rectangulo1.detalle()}`)
document.write(`El area del rectangulo es ${Rectangulo1.area}cm2. y su perimetro es de ${Rectangulo1.perimetro}cm.`)

document.write(`<h4>Modificar el REctangulo</h4>`)
Rectangulo1.cambiarAltura = 20;
Rectangulo1.cambiarAncho = 30;

document.write(`${Rectangulo1.detalle()}`)