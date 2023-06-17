(() => {

  let flash: { name: string; age: number; powers?: string[], funct?: () => string } = {
    name: "David",
    age: 23,
    powers: ["Super velocidad"]
  };

  flash = {
    name: "Felipe",
    age: 23,
    powers: ["Nada"],
    funct: () => 'David'
  };

  //   REVISAR POR QUE FUNCIONA
  console.log(flash.funct!())

  if (!!flash.funct) {
    console.log(flash.funct());
  }

})();
