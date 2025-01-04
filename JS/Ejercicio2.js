class Cuenta{
    constructor(titular){
        this._titular = titular;
        this._saldo = 0;
    }
    ingresar(monto){
        this._saldo += monto;
        document.write(`<p>Ingreso $: ${monto}</p>`)
    }
    extraer(monto){
        if (this._saldo >= monto) {
            this._saldo -= monto
            document.write(`<p>Extrajo $: ${monto}</p>`)
        }else{
            document.write('No hay saldo suficiente')
        }
    }
    informar(){
        document.write(`<p>La cuenta del ${this._titular}, posse un saldo de ${this._saldo} </p>`)
    }
}


const cuenta = new Cuenta('Alex');
cuenta.informar();
cuenta.ingresar(5000);
cuenta.informar();
cuenta.extraer(2500)
cuenta.informar();