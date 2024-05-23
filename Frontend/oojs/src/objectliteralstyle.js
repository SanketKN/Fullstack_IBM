let Person = {
    firstName: '',
    lastName: '',
    age: 0,
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

//Object Literal Style
let Student = {
    enrolledCourse: [],
    enroll(course){
        this.enrolledCourse.push(course)
    },
    toString(){
        return `${this.enrolledCourse.map((c)=>c.courseName)}`
    }
}

//Establishes a link between student and person
Object.setPrototypeOf(Student, Person)
//prototype chaining
//Copies the protoptype of person into student

let sanket = {firstName: 'Sanket', lastName: 'Nayak', age: 23}
Object.setPrototypeOf(sanket, Student)
sanket.enroll({courseName: 'Cloud fullstack'})
sanket.enroll({courseName: 'SAP testing'})
sanket.enroll({courseName: 'How to  become a CEO'})
sanket.enroll({courseName: 'Watson X'})

console.log(`Student ${sanket.fullName()} enrolled for ${sanket}`)