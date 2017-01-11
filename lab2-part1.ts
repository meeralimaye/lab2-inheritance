class CheckingsAccount {
	
	private initialBalance:number;
	private ownerName:string;

	constructor(private initialBalance:number, private ownerName:string) {
		this.initialBalance = initialBalance;
		this.ownerName = ownerName;
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