const auto = {
    color: "Azul",
    marca: "Fiat",
    modelo: "Palio",
    motor: false,
    encenderAuto(){
        this.motor = true
    },
    apagarAuto(){
        this.motor = false
    }
    
}
document.write(`<br> Color: ${auto.color}`)
document.write(`<br> Marca: ${auto.marca}`)
document.write(`<br> Modelo: ${auto.modelo}`)
document.write(`<br> Estado del auto: ${auto.motor ? 'Encendido' : 'Apagado'} `);