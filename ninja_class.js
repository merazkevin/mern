class Ninja{
    constructor(name){
        this.name=name;
        this.health=0;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`Ninja: ${this.name}`);
    }
    showStats(){
        console.log(
    `Name: ${this.name}, 
    Strength: ${this.strength},
    Health: ${this.health}`
    )
    }
    drinkSake(){
        this.health+=10;
        console.log(`You drank sake! ${this.name } now you gained ${this.health}+ health.`);
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom=10;
    }
    speakWisdom(){
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// superSensei.showStats();

setTimeout(function () {
    console.log("start")
}, 3000);

console.log("end");