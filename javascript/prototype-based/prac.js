let computer={cpu:12}
let lenovo={
    screen:"HD",
    __proto__:computer,
}
let tomHardware={}
console.log(lenovo.__proto__)


let genericCar={tyre:4}
let tesla={
    //own properties
    driver:"AI"
}

Object.setPrototypeOf(tesla,genericCar)
//get its own
console.log(`tesla`,tesla)

//get any
console.log(`tesla`,tesla.tyre )
console.log(`tesla`,tesla.driver )
q