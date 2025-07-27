let car={
    make:"toyota",
    model:"camry",
    year:2020,
    start:function(){
        return `${this.make} car got started in ${this.year}`
    }
}

console.log(car.start())

function Person(name,age){
    this.name=name
    this.age=age
}

let john= new  Person("john,19")
console.log(john)

function Animal(type){
    this.type=type
}
//inject methods
Animal.prototype.speak=function(){
    return `${this.type} make a sound`


}

//############################//
//ADDING METHODS TO ARRAY DAMM
//PROTOYYPE CHAIN
Array.prototype.hitesh=function(){
    return `custom method ${this}`
}

let myArray=[1,2,3]
console.log(myArray.hitesh());

//CLASSS

class Vehicle{
     constructor(make,model){
        this.make=make;
        this.model=model;
     }

     start(){
        return ` ${this.make} is a car`
     }
}
let audi=new Vehicle("Audio","a7")
console.log(audi)


//INHERITANCE EXAMPLE
class Car extends Vehicle{
    drive(){
        return`${this.make}`
    }
}
 
let myCar=new Car("toyota","corolla");
console.log(myCar.drive())