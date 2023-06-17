(() => {
  // VOID ES LO MISMO QUE RETORNAR UNDEFINED, PERO NO ES LO MISMO QUE NULL
  // TODA FUNCION EN JS QUE NO DEVUELVA NADA, DEVUELVE UNDEFINED

  //SE COLOCA DESPUES DE LOS PARENTESIS EL TIPO DE DATO QUE REGRESA
  function callBatman(): void {
    // AL COLOCAR RETURN TAMBIEN SIGNIFICA QUE DEVUELVE UNDEFINED
    return undefined;
  }

  console.log(callBatman());

  // FUNCIÓN FLECHA
  const callSuperman = (): void => {
    return undefined;
  };

  console.log(callSuperman());
})();
