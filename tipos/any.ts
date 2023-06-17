(() => {
  // CONS ESTE TIPO DE DATO EL COMPILADOR NO ES CAPAZ DE DARME LA AYUDA
  // Y ES DE LÓGICA, POR QUE LE ESTAMOS DICIENDO QUE ES DE CUALQUIER TIPO DE DATO

  let avengers: any = "Avengers";

  let power: any = 123.345;

  //   CASTEAR EN CASO DE QUE SE NECESITA ASIGNAR EL TIPO DE DATO ANY PERO
  //  NECESITEMOS LAS AYUDA, LE DECIMOS QUE QUIERO QUE TRATE EL DATO COMO UN
  //   STRING O EN OTRO CASO PODRIA SER UN NUMBER
  // ESTE METODO DICE QUE RECIBE UN PARAMETRO QUE ES OBLIGATORIO DE TIPO NUMBER Y DEVUELVE UN STRING
  //   (method) String.charAt(pos: number): string
  (avengers as string).charAt(3);

  // OTRA FORMA DE CASTEAR PERO ES UN POCO MAS CONFUSA
  // ESTE METODO DEVUELVE UN STRING POR ESO UTILIZAMOS LA FUNCIÓN DE NUMBER
  // Y  EL RESULTADO LO GUARDAMOS EN UNA CONSTANTE
  // TSC ME AYUDA DICIENDO QUE ESTA FUNCION RECIBE UN PARAMETRO QUE ES OPCIONAL
  // PERO QUE EL PARAMETRO ES DE TIPO NUMBER O UNDEFINED Y DEVUELVE UN STRING
  // (method) Number.toFixed(fractionDigits?: number | undefined): string
  const numberFixed: Number = Number((<number>power).toFixed(2));
  console.log(typeof numberFixed);

  // TS INDICA QUE RECIBE DOS PARAMETROS, PERO UNO ES OPCIONAL Y DEVUELVE UN NUMERO
  //String.indexOf(searchString: string, position?: number | undefined): number
  const searchResult = (avengers as string).indexOf("Av");

  console.log({ avengers, numberFixed, searchResult });
})();
