class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    } else {
      return (
        this.firstName + " e " + otherUser.firstName + " hanno la stessa età"
      );
    }
  }
}
const user1 = new User("Alice", "Rossi", 30, "Roma");
const user2 = new User("Bob", "Bianchi", 25, "Milano");
const user3 = new User("Ron", "Verdi", 30, "Udine");

console.log(user1.compareAge(user2));
console.log(user1.compareAge(user3));
