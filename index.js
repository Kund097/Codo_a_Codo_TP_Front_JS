const VALOR_TICKET = 200;
document.getElementById("valorTicket").textContent = VALOR_TICKET;

let $clickResumen = document.getElementById("resumen");

$clickResumen.addEventListener("click", totalAPagar);

function totalAPagar() {
  let $obtenerCategoria = document.getElementById("categoria");
  let $totalAPagar = document.getElementById("totalAPagar");
  let $cantidad = document.getElementById("cantidad");

  if (validarCantidad($cantidad)) {
    return ocultarResumen();
  }

  let descuento = calcularDescuento($obtenerCategoria.value, $cantidad.value);
  $totalAPagar.textContent = descuento;
  mostrarResumen();
}

function calcularDescuento(categoria, cantidad) {
  const DESC_ESTUDIANTE = 0.8;
  const DESC_TRAINEE = 0.5;
  const DESC_JUNIOR = 0.15;

  if (categoria === "estudiante") {
    return cantidad * (VALOR_TICKET - VALOR_TICKET * DESC_ESTUDIANTE);
  }
  if (categoria === "trainee") {
    return cantidad * (VALOR_TICKET - VALOR_TICKET * DESC_TRAINEE);
  }
  if (categoria === "junior") {
    return cantidad * (VALOR_TICKET - VALOR_TICKET * DESC_JUNIOR);
  }
}

let $botonLimpiarFormularioTicket = document.getElementById("limpiarTicket");
$botonLimpiarFormularioTicket.addEventListener(
  "click",
  limpiarFormularioTicket
);

function limpiarFormularioTicket() {
  let $cantidad = document.getElementById("cantidad");
  $cantidad.classList.remove("error");
  ocultarResumen();
}

function mostrarResumen() {
  let $mostrarResumen = document.getElementById("mostrarResumen");
  $mostrarResumen.removeAttribute("hidden");
}

function ocultarResumen() {
  let $mostrarResumen = document.getElementById("mostrarResumen");
  $mostrarResumen.setAttribute("hidden", "");
}

let $seleccionCategoria = document.getElementsByClassName("descuentos").target;

function validarCantidad(cantidad) {
  if (cantidad.value === 0 || cantidad.value === "") {
    cantidad.classList.add("error");
    return true;
  }
}
