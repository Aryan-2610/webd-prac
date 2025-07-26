const calculateTotal=(price,quantity)=>{
    return price*quantity;
}

let totalCost=calculateTotal(499*100)

//for 1 line 
const calculateTotal2=(price,quantity)=>price*quantity
let totalCost2=calculateTotal(499,100)

console.log(totalCost2)

