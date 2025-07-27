//name ka phela letter capital
function Person(name,age){
    this.name=name;
    this.age=age;
}
function Car(make,model){
    this.make=make;
    this.model=model
}
let myCar=new Car("Toyota","Camry")
console.log(myCar)

function Tea(type){
    this.type=type
    this.describe=function(){
        //here this cuz of that object 
        return `this is a cup of ${this.type}`
    }
}

let lemonTea=new Tea("lemon tea");
console.log(lemonTea.describe())

//##############// OTHER WAT
function Animal(species){
    this.species=species
}
Animal.prototype.sound=function(){
    return `${this.species} makes a sound`
}
let dog=new Animal("dog")
console.log(dog.sound())

//throw error if user forgot to use new keyword with help of new.target nahi hei

function Drink(name){
    if(!new.target){
        throw new Error("drink must be called with new keyword")
    }
    this.name=name
}
let tea=new Drink("Tea")
let coffee=Drink("coffee")