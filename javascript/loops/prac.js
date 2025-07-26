//while loop
let sum=0;
let i=1;
while (i<=5){
    sum+=i
    i++;

}
console.log(sum)

let countdown=[]
let j=5;
while(j>0){
     countdown.push(j);
     j--;
}

console.log(countdown)

//do while
// let teaCollection=[]
// let tea="abc"
// do{
//     tea=prompt("enter your fav tea");
//     if(tea!=="stop"){
//         teaCollection.push(tea)
//     }
    

// }while(tea!=="stop");

//for loop
let multipliedNumbers=[]
let numbers=[2,4,6]

for(let index=0;index<=2;index++){
    multipliedNumbers[index]=numbers[index]*2;
    //multipliedNumbers.push(numbers[index]*2);

}
console.log(multipliedNumbers)

//for of
for (const element of multipliedNumbers) {
    
}

let citiesPopulation={
    "london":890,
    "new york":840,
    "paris":230,
    "berlin":120
}

//for in

for (const key in citiesPopulation) {
    console.log(key)
}

//for each
citiesPopulation.forEach(element => {
    
});

//function in loop
citiesPopulation.forEach((city)=>{

})
citiesPopulation.forEach(function(city){
    if(city=="delhi"){
        return;
    }

    Array.push(city)
})

