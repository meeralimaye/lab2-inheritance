class SavingsAccount {
	
	private initialBalance:number;
	private ownerName:string;
	private limit:number;

	constructor(private initialBalance:number, private ownerName:string, private limit:number) {
		this.initialBalance = initialBalance;
		this.ownerName = ownerName;
		this.limit = limit;

	}

	deposit(input:number) {
		this.initialBalance += input;
	}

	withdraw(deduct:number) {
		this.limit++;
		if (limit > 3) {
			console.log("error: cannot exceed 3 withdrawals");
		} else {
			this.initialBalance = initialBalance - deduct;
		}
		
	}

	checkBalance() {
		console.log(${this.initialBalance} + ${this.ownerName})
	}
}