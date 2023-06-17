(() => {
  // TODOS LOS PARAMETROS SI NO SE MANDA EL SIGNO DE INTERROGACIÓN SON REQUERIDOS
  const getFullName = (
    firstName: string,
    lastName: string,
    isDeveloper: string | boolean
  ) => {
    return `${firstName} ${lastName} ${isDeveloper}`;
  };

  //   TENER CUIDADO CON ESTE HACK YA QUE TSC NO ES PERFECTO
  //   let data:any
  //   const fullName = getFullName(data,'Moreno',true)

  const fullName: string = getFullName("David", "Moreno", true);

  console.log({ fullName });
})();
