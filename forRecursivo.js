function forRecPlus(inicio, fin, paso, accion) { //SIMULA LA FUNCION DE UN CICLO FOR
  if (inicio > fin) { //CONDICION DE SALIDA
    return;
  }

  accion(inicio); // TAREA A REALIZAR EN CADA ITERACION DEL CICLO

  forRecPlus(inicio + paso, fin, paso, accion);
}

function forRecMinus(inicio, fin, paso, accion) { //CONDICION DE SALIDA
  if (inicio < fin) {
    return;
  }

  accion(inicio); // TAREA A REALIZAR EN CADA ITERACION DEL CICLO

  forRecMinus(inicio - paso, fin, paso, accion);
}


module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
  forRecPlus: forRecPlus,
  forRecMinus: forRecMinus
}
