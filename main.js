const inventario = [];
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

  return renderInventario();
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
}

function crearGenerico() {
  let consumo = setConsumo();
  let esExtranjero = setEsExtranjero();
  let numero = setNumero();
  for (i = 0; i < numero; i++) {
    let generico = new Electrodomestico(consumo, esExtranjero);
    inventario.push(generico);
  }
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
  let numero = window.prompt(
    "Escribe el numero de elementos de estas características que deseas crear en el inventario: "
  );

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

  document.getElementById("putHere").innerHTML = html;
}
