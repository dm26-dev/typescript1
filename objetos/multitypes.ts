(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        funct: () => string
    }

    // SE LE PUEDEN ASIGNAR VARIOS TIPOS
    let myCustomVariable: string | number | Hero = "David"

    myCustomVariable = 'Juliana'
    console.log(myCustomVariable)

    myCustomVariable = 34
    console.log(myCustomVariable)

    // TSC AVISA QUE PARAMETROS FALTAN EN EL TIPO HEROE
    myCustomVariable = {
        name: "Hulk",
        age: 34,
        powers: [],
        funct: () => 'Algo'
    }

})()