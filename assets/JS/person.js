const persons = [];

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    setTitle(title) {
        if (this.gender === "Lelaki") {
            this.name = title + this.name;
        } else if (this.gender === "Perempuan") {
            this.name = title + this.name;
        }
    }

    static find(name) {
        return persons.find(person => person.name === name);
    } 
}
const person1 = new Person("Budi", "Lelaki");
person1.setTitle("Mr. ");
persons.push(person1);

const person2 = new Person("Jane Smith", "Perempuan");
person2.setTitle("Ms. ");
persons.push(person2);

console.log(persons);

const foundPerson = Person.find("Mr. Budi");
console.log(foundPerson);
