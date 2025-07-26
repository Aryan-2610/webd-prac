//passin a function as a parameter and returning function
function makeTea(TypeOfTea){
    console.log(TypeOfTea)
}

function processTeaOrdder(teaFunction){
    return teaFunction("earl-gray")
}

let order=processTeaOrdder(makeTea)//passing a function
console.log(order);

//A FIRST CLASS FUNCTION
//A PROGRMMING LANGUAGE IS SAID TO HAVE A FIRSZT CLASS FUNCTION WHEN
//A FUNCTION CAN BE TREAED LIKE ANY OTHER VAIRABLE 
//if a function is passed in a loop or other function then it is higher order or first class


//closure property and higher order/first class functions

function createTeaMaker(name){
    let score=100
    return function(teaType){
        return `Making ${teaType} ${name} ${score}`
    }
}
let teaMaker=createTeaMaker("hitesh");
let result=teaMaker("green tea")
