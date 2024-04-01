class Customers {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class DateTime {
    date: string;
    time: string;
    constructor(date: string, time: string) {
        this.date = date;
        this.time = time;
    }
}

class AddressDepartArri {
    city: string;
    street: string;
    date?: DateTime;
    constructor(city: string, street: string, date?: DateTime) {
        this.city = city;
        this.street = street;
        this.date = date;
    }
    // Setters
    setCity(city: string) {
        this.city = city;
    }
    setStreet(street: string) {
        this.street = street;
    }
    setDate(date?: DateTime) {
        this.date = date;
    }
}

class Trips {
    busName: string;
    departurePlace?: AddressDepartArri;
    arrivalPlace?: AddressDepartArri;
    customer?: Customers;
    constructor(busName: string, departurePlace?: AddressDepartArri, arrivalPlace?: AddressDepartArri, customer?: Customers) {
        this.busName = busName;
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
        this.customer = customer;
    }
    setDeparturePlace(departurePlace: AddressDepartArri) {
        this.departurePlace = departurePlace;
    }
    setArrivalPlace(arrivalPlace: AddressDepartArri) {
        this.arrivalPlace = arrivalPlace;
    }
    setCustomer(customer: Customers) {
        this.customer = customer;
    }
}

// Creating DateTime instances for departure and arrival times
let dateDepart1 = new DateTime('2024-04-11', '1:30 AM');
let dateArri1 = new DateTime('2024-04-11', '3:30 AM');
let dateDepart2 = new DateTime('2024-04-01', '6:30 AM');
let dateArri2 = new DateTime('2024-04-01', '5:30 AM');

// Creating AddressDepartArri instances with specified departure and arrival times
let departurePlace1 = new AddressDepartArri('Phnom Penh, Cambodia', 'Kamport, Cambodia', dateDepart1);
let arrivalPlace1 = new AddressDepartArri('Phnom Penh, Cambodia', 'Siem Reap, Cambodia', dateArri1);

let departurePlace2 = new AddressDepartArri('Phnom Penh, Cambodia', 'Takeo, Cambodia', dateDepart2);
let arrivalPlace2 = new AddressDepartArri('Phnom Penh, Cambodia', 'Kamport, Cambodia', dateArri2);

// Creating Customers instances
let customer1 = new Customers('Thona', 'Ngon');
let customer2 = new Customers('Thonet', 'Ngon');

// Creating Trips instances with provided details
let trip1 = new Trips('KAKA BUS', departurePlace1, arrivalPlace1, customer1);
let trip2 = new Trips('LYHOR EXPRESS', departurePlace2, arrivalPlace2, customer2);

// Output
console.log(trip1);
console.log(trip2);
