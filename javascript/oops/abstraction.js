class CoffeeMachine{
    start(){
        //call database
        //filter
        return `starting the machine `;
    }
    brewCoffee(){
        //complex calciton
        return `BRewing coffee`
    }
    startButton(){
        let msone=this.start();
        let mstwo=this.brewCoffee();
        return `${msone}+${mstwo}`
    }
}

let myMachine=new CoffeeMachine();
console.log(myMachine.start)
console.log(myMachine.brewCoffee)

console.log(myMachine.startButton)