class Addresses {
    city: string;
    street: string;
    country: string;
    constructor(city: string, street: string, country: string) {
        this.city = city;
        this.street = street;
        this.country = country;
    }
}

class Student {
    name: string;
    address?: Addresses;

    constructor(name: string, address?: Addresses) {
        this.name = name;
        this.address = address;
    }
}

let street = new Addresses('Phnom Pehn', 'Norodom Blvd', "Cambodia");
let student = new Student("Sok Seyha", street);
console.log(student);
