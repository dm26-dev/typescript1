(() => {
  // SE COLOCA ANTES DEL SIGNO DE : EL ? PARA ESPECIFICAR QUE UN PARAMETRO ES OPCIONAL
  // UN PARAMETRO OBLIGATORIO NO PUEDE SEGUIR A UN OPCIONAL
  // RECORDAR ESTO O TIRARLOS DE ULTIMO
  // LOS PARAMETROS OPCIONALES EN TS NO SE PUEDEN INICIALIZAR COMO EN JS -- firstName=""
  // LOS PARAMETROS REQUERIDOS SI SE PUEDEN 
  const getFullName = (
    firstName: string,
    lastName?: string,
    // lastName: string = "",
    // isDev?:boolean = true DA UN ERROR YA QUE SIEMPRE VENDRIA - NUNCA SERIA OPCIONAL
  ) => {
    // COMO ES OPCIONAL ESTE IGUAL TIENE QUE IMPRIMIRLO Y DEVUELVE UNDEFINED
    // PARA ESTO APLICAMOS LA DOBLE TUBERIA POR SI ALGO VIENE UNDEFINED
    return `${firstName} ${lastName || 'No lastName'}`;
  };

  //   TENER CUIDADO CON ESTE HACK YA QUE TSC NO ES PERFECTO
  //   let data:any
  //   const fullName = getFullName(data,'Moreno',true)

  const fullName: string = getFullName("David", "Moreno");
  const fullName2: string = getFullName("David");

  // UTILIZANDO TERNARIOS EN CASO DE QUE EL RESULTADO VENGA -1 OSEA MENOR A 0 DEVUELVA FALSE
  const validateFN: number | boolean = fullName.indexOf('ar') < 0 ? false : fullName.indexOf('a')

  console.log({ fullName, fullName2, validateFN });

})();
