class Account {
	
	balance:number;
	ownerName:string;

	constructor(initialBalance:number, ownerName:string) {
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
		console.log(`${this.initialBalance} + ${this.ownerName}`)
	}
}
class CheckingsAccount extends Account {
	

	constructor(initialBalance:number, ownerName:string) {
		super(initialBalance, owner);

	}
}

class SavingsAccount extends Account {
	
	private deduct: number = 0;
	constructor(initialBalance: number, ownerName: string) {
		super(initialBalance,owner);
	}


	withdraw(deduct:number) {
		this.limit++;
		if (limit > 3) {
			console.log("error: cannot exceed 3 withdrawals");
		} else {
			this.initialBalance = initialBalance - deduct;
		}
		
	}

}