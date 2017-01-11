class checkingAccount {
	
	private initialBalance:number;
	private ownerName:string;

	constructor(private initialBalance:number, private ownerName:string) {
		this.initialBalance = initialBalance;
		this.ownerName = owner.name;
	}

	deposit(input:number) {
		this.initialBalance += input;
	}

	withdraw(deduct:number) {
		this.initialBalance = initialBalance - deduct;
	}

	checkBalance() {
		console.log(${this.initialBalance} + ${this.ownerName})
	}
}