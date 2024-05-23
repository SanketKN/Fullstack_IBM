import Rectangle from "./rectangle"
import Triangle from "./triangle"
import Shape from "./shape"
import LoanRequestHandler from "./loanrequesthandler"
import BusinessLoanValidator from "./businessLoanValidator"
import PersonalLoanValidator from "./personalLoanValidator"


enum LoanType {
    PERSONAL,
    BUSINESS
}

class Main{
    static display(shape: Shape): void{
        console.log(`Area of ${shape.toString()} is ${shape.calculateArea()}`)
    }

    static processLoanApplication(type: LoanType){
        let loanAmount = 4000.0
        switch (type) {
            case LoanType.BUSINESS:
                let handler = new LoanRequestHandler(loanAmount)
                console.log("load", handler.approveLoan(new BusinessLoanValidator(loanAmount)))
                break

            case LoanType.PERSONAL:
                handler = new LoanRequestHandler(loanAmount)
                console.log("loan", handler.approveLoan(new PersonalLoanValidator(loanAmount)))
                break
            default:
                throw new Error('Invalid Loan Type')
        }

    }
}

const rectangle = new Rectangle(23.4,34.5)
const triangle = new Triangle(23.4,34.5)
Main.display(rectangle)
Main.display(triangle)

Main.processLoanApplication(LoanType.PERSONAL)
// below will show error as it only takes type Shape
// Main.display("abc")

