(() => {

  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Volcan Negro`;

  const superman: null | undefined | string = "Superman";

  //   EN CASO DE VENIR UNDEFINED TRAE EL SEGUNDO VALOR
  const getChart1 = batman[10] || "No viene Nada";

  //SI LA PROPIEDAD EXISTE SE PUEDE APLICAR EL METODO DE TOUPPERCASE
  const getChart2 = linternaVerde[23]?.toUpperCase();

  //   MESCLANDO LOS DOS SOLUCIONES
  const getChart3 = volcanNegro[34]?.toUpperCase() || "No existe la propiedad";

  //SI ES NULO O UNDEFINED DEVUELVE EL VALOR SEGUIDO DE ??, SINO DEVUELVE EL STRING O LO QUE VENGA
  const getChart4 = superman ?? "Es nulo o undefined";

  // ES LO MISMO DE ARRIBA PERO EN MAS LINEAS DE CÓDIGO  
  const getChart5 = (superman !== null && superman !== undefined) ? superman : 'Es nulo o undefined';

  console.log({ getChart1, getChart2, getChart3, getChart4, getChart5 });

})();
