class Electrodomestico {
  constructor(consumo, esExtranjero) {
    this.consumo = consumo;
    this.esExtranjero = esExtranjero;
    this.precio = this.calcularPrecio();
  }

  getConsumo() {
    return this.consumo;
  }

  getEsExtranjero() {
    return this.esExtranjero;
  }

  getPrecio() {
    return this.precio;
  }

  calcularPrecio() {
    this.precio = 0;
    switch (this.consumo.toUpperCase()) {
      case "A":
        this.precio += 450000;
        break;

      case "B":
        this.precio += 350000;
        break;

      case "C":
        this.precio += 250000;
        break;
    }

    switch (this.esExtranjero) {
      case false: {
        this.precio += 250000;
        break;
      }
      case true: {
        this.precio += 350000;
        break;
      }
    }

    return this.precio;
  }
}
