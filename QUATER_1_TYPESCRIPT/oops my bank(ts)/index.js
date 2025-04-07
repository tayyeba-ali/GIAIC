#! /usr/bin/env node
//class
class Bankaccount {
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    //publically credit
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit sucessfully get into new account and your balance is :" + this.accountbalance);
        }
        else {
            console.log("credit unsucessful");
        }
    }
    //publically debit
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit sucessfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("debit unsucessfully");
        }
    }
}
//customer details
class Customer {
    constructor(person, age, gender, mobile_number, bankaccount) {
        //this property utalization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    //publically user access
    display() {
        console.log("Name:" + this.person.firstname + "" + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobile_number);
        console.log("Amount In Bank:" + this.bankaccount.accountbalance);
        console.log();
    }
}
const a1 = new Bankaccount(800);
const c1 = new Customer({ firstname: "Tayyeba", lastname: "Ali" }, 20, "female", 3150454353, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
const a2 = new Bankaccount(500);
const c2 = new Customer({ firstname: "Maryam", lastname: "Khan" }, 25, "female", 314565553, a2);
c2.display();
c2.bankaccount.debit(200);
console.log();
export {};
