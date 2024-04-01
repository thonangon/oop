// ex01
class Customer{
    firstName:string;
    lastName:string;
    constructor(firsName:string,lastName:string){
        this.firstName=firsName;
        this.lastName=lastName;
    }
}
class Address{
    city:string;
    street: string;
    constructor(city:string,street:string){
        this.city=city;
        this.street=street;
    }
    //setters
    setCity(city:string){
        this.city=city;
    }
    setStreet(street:string){
        this.street=street;
    }
}
class Trip{
    busName:string;
    departurePlace?:Address;
    arrivalPlace?:Address;
    customer?:Customer;
    constructor(busName: string, departurePlace?: Address, arrivalPlace?: Address, customer?: Customer) {
        this.busName = busName;
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
        this.customer = customer;
    }
    setDeparturPlace(departurePlace:Address){
        this.departurePlace=departurePlace;
    }
    setArrivalPlace(arrivalPlace:Address){
        this.arrivalPlace=arrivalPlace;
    }
    setCustomer(customer:Customer){
        this.customer=customer;
    }
}
let departurePlace1 = new Address('Phnom Penh, Cambodia', 'Kamport, Cambodia');
let arrivalPlace1 = new Address('Phnom Penh, Cambodia', 'Siem Reap, Cambodia');

let departurePlace2 = new Address('Phnom Penh, Cambodia', 'takeo, Cambodia');
let arrivalPlace2 = new Address('Phnom Penh, Cambodia', 'Kamport, Cambodia');
let customer1 = new Customer('Thona', 'Ngon');
let customer2 = new Customer('Thonet', 'Ngon');

let trip1 = new Trip('KAKA BUS', departurePlace1, arrivalPlace1, customer1);
let trip2 = new Trip('LYHOR EXPRESS', departurePlace2, arrivalPlace2, customer2);

// Output
console.log(trip1);
console.log(trip2);
