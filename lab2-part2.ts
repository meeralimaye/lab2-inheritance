class SavingsAccount {
	
	private initialBalance:number;
	private ownerName:string;
	private limit:number = 0;

	constructor(initialBalance:number, ownerName:string) {
		this.initialBalance = initialBalance;
		this.ownerName = ownerName;

	}

	deposit(input:number) {
		this.initialBalance += input;
	}

	withdraw(deduct:number) {
		this.limit++;
		if (this.limit > 3) {
			console.log("error: cannot exceed 3 withdrawals");
		} else {
			this.initialBalance = initialBalance - deduct;
		}
		
	}

	checkBalance() {
		console.log(`${this.ownerName} account balance: ${this.balance}`);
	}
}