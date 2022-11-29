class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    Promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;

    }
    getIntro() {
        return "Hi my name is" + this.fullName + ",I am a" + this.jobTitle;
    }
}
//TEST
let employee1 = new employee1(1, "Ronald", "Streets", "Head Honcho", 42.50);
//EXERCISE 3
let intro = employee1.getIntro();
console.log(intro);

//EXERCISE 2 output

employee1.promote("Sr", "Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

