//<=== OOP ===>
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
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child M5 class
// class M5 extends Vehicle { 
//     constructor(color) {
//         super("BMW", "M5", color);
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }
// const m5 = new M5("Blue");
// m5.childFunction();

// setTimeout(function () {
//     console.log("start")
// }, 3000);

// console.log("end");

// var exampleFunction = function (message) {
//     console.log(message);
// };

// exampleFunction("Hello from exampleFunction");

// function parentFunction(callback) {
//     callback("information from the parent function");
// }
// parentFunction( exampleFunction );

// // const arr = [1,2,3,4];
// // arr.push(300); // even though arr is declared with `const` we can still push new values into it 
// // console.log(arr)

// const arr = Object.freeze([1,2,3,4]);
// arr.push(300); // we're no longer allowed to change `arr`

//<=== Spread, Concat, and Slice ===>

// const groceryList = Object.freeze([
//     { "item": "carrots", "haveIngredient": false },
//     { "item": "onions", "haveIngredient": true },
//     { "item": "celery", "haveIngredient": false },
//     { "item": "cremini mushrooms", "haveIngredient": false },
//     { "item": "butter", "haveIngredient": true }
// ]);
// // // const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
// // const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
// // const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
// // const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

// // console.log(notNeceCelery)

// //<== Sorting ===>
// const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// // items.sort(); // this will throw an error 
// const sortedItems = [...items].sort();

// const numbers = [10, 5, 3, 12, 22, 8];
// numbers.sort();
// // this will return [10, 12, 22, 3, 5, 8 ]
// const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1);

// console.log(sortedGroceries)

//<=== Map and Filter ===>
// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map( item => `<li>${item}</li>` );
// const values = [1, 2, 3, 4, 5];
// const cubes = values.map( val => val**3 );
// const evens = values.filter( val => val % 2 === 0 );
// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const oFoods = groceries.filter( item => item.includes("o") );
// console.log(oFoods)


// <=== Currying (Optional) ===>
// function ninjaBelt(ninja, beltColor) {
//     console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
// }
// ninjaBelt('Eileen', 'black');

// function ninjaBelt(ninja) {
//     return function belt(beltColor) { //note the closure here!
//         console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
//     }
// }
// ninjaBelt('Eileen')('black'); //note the double invocation here.

// <=== Closures (Optional) ===>
// here we have a function called "Outer"
// function outer() {
//     let count = 0; // this is a count variable that is scoped to the function
//     // there is an inner function that increments count and then console logs it
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     // we're returning the inner function
//     return inner;
// }

// const counter = outer();   // counter is the function that we returned from calling the outer function
// counter();                 // this will console.log "1"
// counter();                 // this will console.log "2"
// counter();                 // this will console.log "3"
// counter();                 // this will console.log "4"

// // so that means that the count variable still exists! 
// // and it is being changed even though we aren't inside of the Outer function!
// // can we access count out here?
// console.log(); // doesn't work!

//<=== Jsx ===>
class App extends React.Component {
    render() {
        return React.createElement(
            ‘h1’,
            {},
            “Hello World!”
        );
    }
}
// select the root and render the “App” component we defined earlier
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));