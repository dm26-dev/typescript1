(() => {

    //UNA FUNCIÓN GENÉRICA RETORNA EL MISMO DATO DE ENTRADA
    function getDataf<T>(args: T): T {
        return args
    }

    // GENÉRICOS CON FUNCIONES TIPO FLECHA
    const getData = <T>(args: T): T => args

    console.log(getData('Hola').toUpperCase())
    console.log(getData(5).toFixed(2))
    console.log(new Date().getMonth())

})()
