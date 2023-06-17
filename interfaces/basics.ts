(() => {

    // TENER CUIDADO YA QUE LOS MEZCLA Y NO TIENE EXACTAMENTE LOS MISMOS DATOS
    type hero = {
        name: string,
        powers: string[]
    }

    interface hero2 {
        age: number,
        msg: string
    }

    const heroe1 = {
        name: "Hulk",
        powers: ["Fuerza"],
        age: 23,
        msg: "Nad",
        // ADEMAS SE DEJA EXPANDIR Y NO GENERA ERROR REVISAR
        friends: []
    }

    let heroeTemp: hero | hero2

    // // EN CASO DE CUANDO SE ESPERE UNA VARIABLES
    // // QUE TENGA CUALQUIERA DE LOS TIPOS DE DATOS 
    heroeTemp = heroe1

    console.log({ heroe1 })

})()