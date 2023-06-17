(() => {
  const addHeros = (firstHero: string, ...rest: string[]): string => {
    // EL OPERADOR REST CUANDO SE UTILIZA EN LA FUNCION ES UN ARRAY CON EL OPERADOR SPREAD ...
    // PARA QUE VENGA COMO UN ARRAY SE UTILIZA SIN EL OPERADOR ... , SINO VIENE COMO UN STRING

    // EL METODO JOIN SEPARA UN ARRAY CONVIRTIENDOLO EN UN STRING Y SE LE PUEDE AÑADIR UN
    // PARAMETRO OPCIONAL QUE ES EL SEPARADOR

    return `${firstHero} ${rest.join(" ")}`;
  };

  const heros: string = addHeros("Hulk", "Batman", "Superman", "Iron Man");

  console.log({ heros });
})();
