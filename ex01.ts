class Vehicle {
    color: string = "white";
    name: string;
    speed: number;
    mileAge: number;

    constructor(name: string, speed: number, mileage: number) {
        this.name = name;
        this.speed = speed;
        this.mileAge = mileage;
    }
}

let car = new Vehicle('Toyota', 120, 12000);
console.log(car);
