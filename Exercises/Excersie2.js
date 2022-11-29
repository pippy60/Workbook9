class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }
   
    getFullName(){
        return this.firstName + " "+ this.lastName;
    }
 
Promote(newJobTitle,newPayRate){
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
    }
}



 //test 
 let employee1 = new employee1(1, "Ronald","Streets","Head Honcho", 42.50);

    //Create a NEW INSTANCE OF EMPLYOYEE AND ASSIGN TO LOYAL VARIABLE
employee1.promote("Sr","Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);