// class Vehicle{
//     constructor(manufacturer, model, color){
//         this.miles=0;
//         this.manufacturer=manufacturer;
//         this.model=model;
//         this.color=color;
//     }
//     drive(){
//         this.miles+=10;
//     }
// }

// const car = new Vehicle("Honda","Civic","blue");
// car.drive();
// // console.log(car.miles)

// class Civic extends Vehicle{
//     constructor(color){
//         super("Honda", "Civic", color);
//         this.hp=200;
//     }
//     printSpecSummary(){
//         console.log(
//             `Honda Civic with 2.8 in line 4 packing ${this.hp}HP and 240 lb-ft TQ`
//         );
//     }
// }
// car.Civic.printSpecSummary();

// class Vehicle {
//     constructor(manufacturer, model, color) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.color = color;
//         this.miles = 0;
//     }
//     drive() {
//         this.miles += 10;
//         console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
//     }
// }
// const honda = new Vehicle("Honda", "Civic", "blue");
// // console.log(honda)

class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
const m5 = new M5("Blue");
m5.childFunction();