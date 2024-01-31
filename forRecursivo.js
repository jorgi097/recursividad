function forRecPlus(inicio, fin, paso, accion) {
  if (inicio > fin) {
    return;
  }

  accion(inicio);

  forRecPlus(inicio + paso, fin, paso, accion);
}

function forRecMinus(inicio, fin, paso, accion) {
  if (inicio < fin) {
    return;
  }

  accion(inicio);

  forRecMinus(inicio - paso, fin, paso, accion);
}


module.exports = {
  forRecPlus: forRecPlus,
  forRecMinus: forRecMinus
}
