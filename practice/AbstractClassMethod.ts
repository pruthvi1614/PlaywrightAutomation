abstract class Vehicle {
    abstract startEngine(): void
    stopEngine() {
        console.log("Engine stopped")
    }
}

class Car extends Vehicle {
    startEngine() {
        console.log("Car Engine started")
    }
}

class Bike extends Vehicle {
    startEngine(): void {
        console.log("Bike Engine started")
    }
}

let car = new Car()
car.startEngine()
car.stopEngine()

let bike = new Bike()
bike.startEngine()
bike.stopEngine()