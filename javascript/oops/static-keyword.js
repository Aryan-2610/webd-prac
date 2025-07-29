//static method
class calculator{
    static add(a,b){
        return a+b
    }
}

let miniCalc=calculator()
console.log(miniCalc.add(2,3)) //error
console.log(calculator.add(2,3))//no error