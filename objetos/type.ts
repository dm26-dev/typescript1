(() => {

    type Hero = {
        name: string,
        age: number,
        powers: string[],
        funct: () => string
    }

    let flash: Hero = {
        name: "David",
        age: 23,
        powers: ["Super velocidad"],
        funct: () => 'David'
    };

    let superman: Hero = {
        name: "Clark Kent",
        age: 23,
        powers: ["Super velocidad", "Fuerza"],
        funct() {
            return this.name
        }
    };

    console.log(flash.funct())
    console.log(superman.funct())

})();
