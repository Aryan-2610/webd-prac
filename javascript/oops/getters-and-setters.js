//GETTERS AND SETTERS
class Employee{
    constructor(name,salary){
        if(salary<0){
            throw new Error("invalid salary")
        }
        this.name=name;

        this._salary=salary
    }
    get salary(){
        return "you are not allowed to see salary";
    }
    set salary(value){
        if(value<0){
            console.error("INVALID SALARY")
        }
        else{
            this._salary=value
        }
    }

}

let emp=new Employee("ALice",5000)
console.log(emp._salary)
//you cant access salary like emp.salary
//but u can access by emp._salary
//this _ is just a programming community knwoledge
//no special

//to make it truly hideable use #


class Employee2{
    #salary
    constructor(name,salary){
        if(salary<0){
            throw new Error("invalid salary")
        }
        this.name=name;

        this.#salary=salary
    }
    get salary(){
        return "you are not allowed to see salary";
    }
    set salary(value){
        if(value<0){
            console.error("INVALID SALARY")
        }
        else{
            this.#salary=value
        }
    }

}