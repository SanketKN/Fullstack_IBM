
// This is Function constructor
function Person(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    const adultAge = 18

    let isAdult = () => this.age >= adultAge
    this.isEligibleForVoting = () => isAdult()
//difference between the above 2 functions
//isAdult is a private function which can't be accessed from outside
//But isEligible is an instance member of person object

}

let utkarsh = new Person('Utkarsh', 'lal', 17)
console.log(utkarsh.isEligibleForVoting())

//Assignment : convert objextliteralstyle.js to functional
//constructor style

class PersonA{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    fullName = () => `${this.firstName} ${this.lastName}`
}


class Student extends PersonA{
    constructor(firstName, lastName, age){
        super(firstName, lastName, age)
        this.enrolledCourse = []
    }

    enroll = (course) => this.enrolledCourse.push(course)
    toString = () => `${this.enrolledCourse.map((c) => c.courseName)}`

}

let sanket = new Student('Sanket', 'Nayak', 23)
sanket.enroll({courseName: 'java'})
sanket.enroll({courseName: 'Python'})

console.log(`Student ${sanket.fullName()} enrolled for ${sanket}`)