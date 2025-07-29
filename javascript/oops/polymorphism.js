class Bird{
    fly(){
        return `fly...`
    }
}

class Penguin extends Bird{
    fly(){
        return `penguins cant fly`
    }
}

let bird=new Bird()
let penguin=new Penguin()

console.log(bird.fly())
console.log(penguin.fly())

