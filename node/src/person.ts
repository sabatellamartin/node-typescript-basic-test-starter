export default class Person {
    // Properties
    firstName: string;
    lastName: string;
    age: number;

    // Constructor
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Method to get the full name
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // Method to describe the person
    describe(): string {
        return `${this.getFullName()} is ${this.age} years old.`;
    }
}