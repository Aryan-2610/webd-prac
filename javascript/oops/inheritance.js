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