"use strict";
class User {
    constructor(firstName, lastName) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`,
        };
    }
}
const user1 = new User("md", "muhiuddin");
const user2 = new User("ns", "web Developer");
console.log(user2.methods.fullName());
console.log(user1.methods.fullName());
