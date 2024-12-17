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
}


const cuenta = new Cuenta('Alex');
cuenta.ingresar(5000);