class Nevera extends Electrodomestico {
  constructor(consumo, esExtranjero, capacidad) {
    super(consumo, esExtranjero);
    this.capacidad = capacidad;
    this.precio = this.calcularPrecio();
  }

  setCapacidad(capacidad) {
    this.capacidad = capacidad;
  }

  getCapacidad() {
    return this.capacidad;
  }

  recargoPorCapacidad() {
    if (this.capacidad > 120) {
      let recargo = (this.capacidad - 120) / 10;
      return this.precio * recargo * 0.05;
    }
  }

  calcularPrecio() {
    if (this.capacidad > 120) {
      return super.calcularPrecio() + this.recargoPorCapacidad();
    } else {
      return super.calcularPrecio();
    }
  }
}
