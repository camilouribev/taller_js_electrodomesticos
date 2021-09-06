import Electrodomestico from "./Electrodomestico";

class Tv extends Electrodomestico {
  constructor(consumo, esExtranjero, pulgadas, esTDT) {
    super(consumo, esExtranjero);
    this.pulgadas = pulgadas;
    this.esTDT = esTDT;
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
    tamaño = this.pulgadas;

    if (tamaño > 40) {
      precio += super.calcularPrecio() * 0.3;
    }

    if (this.esTDT) {
      precio += 250000;
    }

    return this.precio;
  }
}
