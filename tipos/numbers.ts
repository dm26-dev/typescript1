(() => {
  let avengers = 100;

  const villians = 23;

  if (avengers > villians) {
    console.log("Nos salvamos");
  } else {
    console.log("Estamos en problemas");
  }

  //NUMBERS DEVUELVE NAN QUE PARA JS ES CONSIDERADO UN NUMERO
  avengers = Number("4dd");

  console.log({ avengers });
  console.log("Es de tipo : ", typeof avengers);


  avengers > villians
    ? console.log("Nos salvamos")
    : console.log("Estamos en problemas");

})();
