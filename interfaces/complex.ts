(() => {

    interface client {
        name: string,
        age: number,
        address: Address
    }

    interface Address {
        country: string,
        department: string,
        city: string,
        postalCode: number
    }

})()