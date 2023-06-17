(() => {
  // OBLIGO A QUE EL DATO QUE VA EN ESA POSICION SEA DEL TIPO QUE LE ASIGNÉ
  // NOTE QUE ES DIFERENTE A LOS ARRAYS 
  //   (STRING, NUMBER, BOOLEAN)[] --- [STRING, NUMBER, BOOLEAN]
  const hero: [string, number, boolean] = ["Iron Man", 85, true];

  hero[0] = "Captain America";
  hero[1] = 90;
  hero[2] = false;

  //MSG CON MAS CLARIDAD
  console.log({ hero });
})();
