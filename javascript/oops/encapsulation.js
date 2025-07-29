 //Encapsulation

 class BankAcoount{
    #balance=0;
    deposit(amount){
        this.#balance+=amount;
        return this.#balance
    }

    getBalance(){
        return `$${this.#balance}`
    }
 }

 let account=new BankAcoount()
 account.deposit(19);
 console.log(account.getBalance())