let inventario = [];
let carrito = [];
let html = "";

function crearElectrodomestico() {
  let tipo = window.prompt(
    "Selecciona el tipo de electrodomestico: \n A.Nevera \n B.Televisor \n C.Otro"
  );
  switch (tipo) {
    case "A":
    case "a":
      crearNevera();
      break;
    case "B":
    case "b":
      crearTv();
      break;
    case "C":
    case "c":
      crearGenerico();
      break;
    default:
      alert("Opcion no válida");
  }
}

function crearTv() {
  let consumo = setConsumo();
  let esExtranjero = setEsExtranjero();
  let esTDT = setEsTDT();
  let pulgadas = setPulgadas();
  let numero = setNumero();
  for (i = 0; i < numero; i++) {
    let TV = new Tv(consumo, esExtranjero, pulgadas, esTDT);
    inventario.push(TV);
  }
  renderInventario();
}

function crearGenerico() {
  let consumo = setConsumo();
  let esExtranjero = setEsExtranjero();
  let numero = setNumero();
  for (i = 0; i < numero; i++) {
    let generico = new Electrodomestico(consumo, esExtranjero);
    inventario.push(generico);
  }
  renderInventario();
}

function crearNevera() {
  let consumo = setConsumo();
  let capacidad = setCapacidad();
  let esExtranjero = setEsExtranjero();
  let numero = setNumero();
  for (i = 0; i < numero; i++) {
    let nevera = new Nevera(consumo, esExtranjero, capacidad);
    inventario.push(nevera);
  }
  renderInventario();
}

function setConsumo() {
  let consumo = window.prompt(
    "Escribe el nivel de consumo de electrodoméstico: A, B o C"
  );
  switch (consumo) {
    case "A":
    case "a":
    case "B":
    case "b":
    case "C":
    case "c":
      break;

    default:
      alert("Ingrese una opción válida");
      setConsumo();
  }

  return consumo;
}

function setCapacidad() {
  let capacidad = window.prompt("Escribe la capacidad en litros: ");
  try {
    parseInt(capacidad);
  } catch (e) {
    alert("Ingrese una capacidad válida");
    setCapacidad();
    return;
  }

  return parseInt(capacidad);
}

function setPulgadas() {
  let pulgadas = window.prompt("Escribe el tamano del televisor en pulgadas: ");
  try {
    parseInt(pulgadas);
  } catch (e) {
    alert("Ingrese una tamaño válido");
    setPulgadas();
  }

  return parseInt(pulgadas);
}

function setNumero() {
  let numero = window.prompt("Escribe el numero de elementos : ");

  try {
    parseInt(numero);
  } catch (e) {
    alert("Ingrese un número válido");
    setNumero();
  }

  if (!Number.isInteger(parseInt(numero)) || parseInt(numero) <= 0) {
    alert("Ingrese un número válido");
    setNumero();
  }

  return parseInt(numero);
}

function setEsExtranjero() {
  let esExtranjero = window.prompt(
    "El electrodoméstico es fabricado en el extranjero?(s/n):  "
  );
  switch (esExtranjero) {
    case "S":
    case "SI":
    case "s":
    case "si":
    case "Si":
      esExtranjero = true;
      break;
    case "N":
    case "NO":
    case "n":
    case "no":
    case "No":
      esExtranjero = false;
      break;
    default:
      alert("Ingrese una opción válida");
      setEsExtranjero();
  }
  return esExtranjero;
}

function setEsTDT() {
  let esTDT = window.prompt("El televisior es compatible con TDT ?(s/n):  ");
  switch (esTDT) {
    case "S":
    case "SI":
    case "s":
    case "si":
      esTDT = true;
      break;
    case "N":
    case "NO":
    case "n":
    case "no":
      esTDT = false;
      break;
    default:
      alert("Ingrese una opción válida");
      setEsTDT();
  }
  return esTDT;
}

function agregaACarrito() {
  let tipo = window.prompt(
    "Selecciona el tipo de electrodomestico que quieres en tu carrito: \n A.Nevera \n B.Televisor \n C.Otro"
  );
  switch (tipo) {
    case "A":
    case "a":
      agregaNeveraACarrito();
      break;
    case "B":
    case "b":
      agregaTVACarrito();
      break;
    case "C":
    case "c":
      agregaGenericoACarrito();
      break;
    default:
      alert("Opcion no válida");
  }
}

function agregaGenericoACarrito() {
  let tipo = "Electrodomestico";
  let consumo = setConsumo();
  let esExtranjero = setEsExtranjero();
  let numero = setNumero();
  let matches = inventario.filter((item) => {
    return (
      item.constructor.name === tipo &&
      item.consumo.toUpperCase() === consumo.toUpperCase() &&
      item.esExtranjero === esExtranjero
    );
  });
  chequeoStock(matches, numero);
}

function agregaTVACarrito() {
  let tipo = "Tv";
  let consumo = setConsumo();
  let esExtranjero = setEsExtranjero();
  let esTDT = setEsTDT();
  let pulgadas = setPulgadas();
  let numero = setNumero();

  let matches = inventario.filter((item) => {
    return (
      item.constructor.name === tipo &&
      item.consumo.toUpperCase() === consumo.toUpperCase() &&
      item.esExtranjero === esExtranjero &&
      item.esTDT === esTDT &&
      item.pulgadas === pulgadas
    );
  });
  chequeoStock(matches, numero);
}

function agregaNeveraACarrito() {
  let tipo = "Nevera";
  let consumo = setConsumo();
  let capacidad = setCapacidad();
  let esExtranjero = setEsExtranjero();
  let numero = setNumero();
  let matches = inventario.filter((item) => {
    return (
      item.constructor.name === tipo &&
      item.consumo.toUpperCase() === consumo.toUpperCase() &&
      item.esExtranjero === esExtranjero &&
      item.capacidad === capacidad
    );
  });
  chequeoStock(matches, numero);
}

function chequeoStock(matches, numero) {
  if (matches.length > numero) {
    let extraccion = matches.splice(0, numero);
    carrito.push(...extraccion);
  } else {
    carrito.push(...matches);
    alert("El inventario se quedó sin stock del producto solicitado");
  }
  modificarInventario();
}

function renderInventario() {
  html = "";
  inventario.forEach(function (e, i) {
    html +=
      "<tr>" +
      "<td>" +
      e.constructor.name +
      "</td>" +
      "<td>" +
      e.consumo +
      "</td>" +
      "<td>" +
      e.precio +
      "</td>" +
      "</tr>";
  });

  html += "<h2>Total: " + inventario.length + " elementos en inventario </h2>";

  document.getElementById("inventario").innerHTML = html;
  renderCarrito();
}
function modificarInventario() {
  inventario = inventario.filter((el) => !carrito.includes(el));
  renderInventario();
}

function getTotalCarrito() {
  return carrito.map((item) => item.precio).reduce((prev, next) => prev + next);
}

function renderCarrito() {
  html = "";
  carrito.forEach(function (e, i) {
    html +=
      "<tr>" +
      "<td>" +
      e.constructor.name +
      "</td>" +
      "<td>" +
      e.consumo +
      "</td>" +
      "<td>" +
      e.precio +
      "</td>" +
      "</tr>";
  });

  html +=
    "<h2>Hay " + carrito.length + " elementos en el carrito de compras</h2>";
  html += "<h2>Total factura: $" + getTotalCarrito() + "   </h2>";

  document.getElementById("carrito").innerHTML = html;
  console.log("inventario: ");
  console.log(inventario);
  console.log("carrito: ");
  console.log(carrito);
}
