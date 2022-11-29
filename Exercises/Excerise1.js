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
 }

 //test 

    //Create a NEW INSTANCE OF EMPLYOYEE AND ASSIGN TO LOYAL VARIABLE
let employee1 = new Employee = new type(arguments); Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
        //ACCESS A PROPERTY AND PRINT IT IN A TEMPLATE STREAM
        console.log(`Employee ${employee1.firstName} created`);

        ///NEXT
        //ORGINAL console.log( `Employess ${ Employee1. fullName}.vreated);
        console.log(`Employee ${employee1.getFullName()}created`);

        console.log(`Job title is ${employee1.jobTitle}`);
        console.log(`Pay rate is $${employee1.payRate}`);

        //SECOND EMPLOYEE
        let employee2 = new Employee(2, "Ronald","Streets","Head Honcho", 150.00);
        console.log(`Employee ${employee2.getFullName()}created`);
        console.log(`Job title is ${employee2.jobTitle}`);
        console.log(`Pay rate is $${employee2.payRate}`);

        