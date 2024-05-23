import LoanValidator from "./loadValidator";

export default class LoanRequestHandler{
    constructor(private balance: number){

    }
//Loan validator can be replaced according to the type of loan needed
    approveLoan(validator: LoanValidator): boolean{
        return validator.validateLoan(this.balance)
    }
}