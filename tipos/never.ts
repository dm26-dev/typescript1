// ESTA FUNCIÓN SIEMPRE RETORNA UN ERROR Y DE AHI EL CÓDIGO SIGUIENTE SE DEJA DE EJECUTAR

// const error1= (): never => {
//   throw new Error("auxilio");
//   console.log("Este codigo no se ejecuta");
// };

// error1();

// SI SE QUIERE QUE DEVUELVA UN ERROR O UN NUMERO SE CAMBIA
const error2 = (msg: string): never | number => {
  if (false) {
    throw new Error(msg);
  }
  return 1;
};

const result = error2("Estamos en problemas");
console.log(result);
