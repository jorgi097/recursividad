function hanoi(aros, origen, objetivo, auxiliar) { //n
    
    if (aros > 0) { //NO SE PUEDE TENER 0 AROS

      hanoi(aros - 1, origen, auxiliar, objetivo);
  
      console.log(`Mueve el aro ${aros} desde ${origen} a ${objetivo}`);

      hanoi(aros - 1, auxiliar, objetivo, origen);
    }

  }
  
module.exports = { //EXPORTA LA FUNCION PARA SER USADA EN EL MENU PRINCIPAL
    hanoi:hanoi
}