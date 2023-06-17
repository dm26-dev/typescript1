(() => {
  const greet = (): void => console.log("Welcome to the app");
  const getFullName = (fn: string, ln: string): string => `${fn} ${ln}`;

  //NO IMPORTA LOS NOMBRES DE LOS PARAMETROS PERO SI EL TIPO
  let functionT: (a: string, b: string) => string;
  let myFunction: () => void;

  // SE HACE REFERENCIA A LA FUNCIÓN NO COLOCAR LOS PARENTESIS YA
  // QUE SE INICIALIZARIA LA FUNCIÓN
  functionT = getFullName;
  myFunction = greet;

  // GETNAME RECIBIRIA LAS MISMAS REGLAS QUE LA FUNCION REFERENCIADA
  const getName = functionT;
  const getGreet = myFunction;

  // INICIALIZANDO LA FUNCIÓN
  console.log(getGreet());
  console.log(getName("Juli", "Gomez"));
})();
