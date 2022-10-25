// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// //AFTER HOISTING BY THE INTERPRETER
// // var example;
// // console.log(example); // logs undefined
// // example = "I'm the example!";

// // GIVEN 
// console.log(example);
// let example = "I'm the example!"; 
// //AFTER HOISTING BY THE INTERPRETER
// //let example = "I'm the example!";
// //console.log(example);

// GIVEN #1
// console.log(hello);                                   
// var hello = 'world';                                 
// //AFTER HOISTING BY THE INTERPRETER
// //var hello = 'world';                                 
// //console.log(hello);                                   


// // GIVEN #2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// //AFTER HOISTING BY THE INTERPRETER
// //var needle = 'haystack';
// //test();
// //function test(){
// //    var needle = 'magnet';
// //    console.log(needle);
// //}

// // GIVEN #3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //AFTER HOISTING BY THE INTERPRETER
// //console.log(brendan);
// // var brendan='super cool';

// // GIVEN #4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// //AFTER HOISTING BY THE INTERPRETER
// console.log("PREDICTION:"+"var food = 'chicken';\
//     console.log(food)\;\
//     eat();")


// // GIVEN #5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// // //AFTER HOISTING BY THE INTERPRETER
// console.log("PREDICTION:"+"Undefined")


// // // GIVEN #6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//         genre = "rock";
//         console.log(genre);
//         var genre = "r&b";
//         console.log(genre);
//     }
//     // console.log(genre);
//     // // //AFTER HOISTING BY THE INTERPRETER
//     console.log("PREDICTION:"+"disco \
//     rock \
//     r&b");

//Given #7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// //AFTER HOISTING BY THE INTERPRETER
// console.log("PREDICTION:"+"san jose \
// Burbank \
// Seattle \
// ");

// // // GIVEN #8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// // //AFTER HOISTING BY THE INTERPRETER
// console.log("PREDICTION:"+"Chicago=hirring = true \
// Berkeley= closed for now ");