
export default class Message {

    public message:string;

    constructor(message:string) {
        this.message = message;
    }

    typescript() {
        this.message = "Its a statically typed superset of Javascript developed by Microsoft."
        +"Adds features like typing, classes, interfaces, inheritances."
        +"Includes compiler tsc that transpiles Typescript into Javascript that can run in browsers or Node.js."
    }

}