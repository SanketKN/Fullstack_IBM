import LoanValidator from "./loadValidator";

export default class BusinessLoanValidator implements LoanValidator{
    constructor(public balance: number){

    }
    validateLoan(amount: number): boolean {
        if(this.balance>=50000.0){
            return true
        }
        return false
    }
}