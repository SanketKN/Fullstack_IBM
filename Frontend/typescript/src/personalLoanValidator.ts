import LoanValidator from "./loadValidator";

export default class PersonalLoanValidator implements LoanValidator{
    constructor(public balance: number){

    }
    validateLoan(amount: number): boolean {
        if(this.balance>=5000.0){
            return true
        }
        return false
    }
}