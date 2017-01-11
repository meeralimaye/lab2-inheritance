class CheckingsAccount {

	private balance:number;
	private owner:string;

	constructor(initialBalance:number, private owner:string) {
		this.balance = initialBalance;
		this.owner = ownerName;
	}

	deposit(amount:number) {
		this.balance += input;
	}

	withdraw(amount:number) {
		this.balance = this.balance - amount;
	}

	checkBalance() {
		console.log(`${this.owner} nalance: $${this.balance}`)
	}
}