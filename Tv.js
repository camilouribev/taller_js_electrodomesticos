class Tv extends Electrodomestico {
  constructor(consumo, esExtranjero, pulgadas, esTDT) {
    super(consumo, esExtranjero);
    this.pulgadas = pulgadas;
    this.esTDT = esTDT;
    this.precio = this.calcularPrecio();
  }

  setPulgadas(pulgadas) {
    this.pulgadas = pulgadas;
  }

  getPulgadas() {
    return this.pulgadas;
  }

  setEsTDT(esTDT) {
    this.esTDT = esTDT;
  }

  getEsTDT() {
    return this.esTDT;
  }

  calcularPrecio() {
    let tamaño = this.pulgadas;
    let precio = super.calcularPrecio();
    if (tamaño > 40) {
      precio += precio * 0.3;
    }

    if (this.esTDT) {
      precio += 250000;
    }

    return precio;
  }
}
