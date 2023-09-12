// Exercise 1
function globalFunction() {
    console.log(this);
}
const myObject = {
    method: function() {
        console.log(this);
    },

    arrowFunction: () => {
        console.log(this);
    }
}

globalFunction();
myObject.method();
myObject.arrowFunction();

/* The value of the global function is the window
object, it inherits it from the global object. 

The value of the method is the object, as it inherits this
from the object that encloses it, in this case, myObject

The value of the arrow function also inherits from the 
window, as arrow functions do no have their own this context.
*/ 



// Exercise 2
class Person2 {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
    }
    greet() {
        console.log("Hello there, my name is " + this.name + " and Im " + this.age + " years young");
    }
}

const Thommy = new Person2("Thommy", "32");
Thommy.greet();
const Margaret = new Person2("Margit the fell omen", "162");
Margaret.greet();



// Exercise 3
/* I had already created a constructor in ex. 2, so I just copied with new instances. */
class Person3 {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
    }
    greet() {
        console.log("Hello there, my name is " + this.name + " and Im " + this.age + " years young");
    }
}

const Queen = new Person3("Queen of Yharnam", "200");
Queen.greet();
const rom = new Person3("Rom, the vacuous spider", "-2");
rom.greet();



// Exercise 4
class Person4 {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
    }
    greet() {
        console.log("Hello there, my name is " + this.name + " and Im " + this.age + " years young");
    }
    static info() {
        return "This is a person class";
    }
    info2() {
        return "This is a person object";
    }
}

const neil = new Person4("Actor and director Neil Breen", "64");
neil.greet();

console.log(Person4.info());
console.log(neil.info2());

/* In this exercise, it shows that objects cannot use static methods. Static methods
are methods that belong to the class as a whole but cannot be used by one particular
object, instead normal methods have to used with them. 
*/



// Exercise 5
class Person5 {
    constructor(name) {
        this.name = name; 
    }
    age = {
        get() {
            return this.name;
        },
        set(value) {
            this.name = value;
        }
    }
    greet() {
        console.log("Hello there, my name is " + this.name + " and Im " + this.age + " years young");
    }
    static info() {
        return "This is a person class";
    }
    info2() {
        return "This is a person object";
    }
}

const Huel = new Person5("Huel");
Huel.age.set("25");
console.log("My name is " + Huel.name + " and im " + Huel.age.get());



// Exercise 6
/* See private-fields-in-classes for code */



// Exercise 7
class Book {
    constructor(isbn, title, author, yearPublished) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
}

class Library {
    books = [];

    addBook(isbn, title, author, yearPublished) {
        let book = new Book(isbn, title, author, yearPublished);
        this.books.push(book);
    }

    removeBook(name) {
        let indie = this.books.;
        this.books.pop(indie);
        console.log(indie);
    }

    listBooks() {
        return this.books;
    }

}

const Morris = new Library;
Morris.addBook("19395213", "The Alchemist", "Paulo Coelho", "1988");
console.log(Morris.listBooks());
Morris.addBook("142141", "Alchemy and Symbols", "Carl Jung", "1950");
console.log(Morris.listBooks());
Morris.addBook("1534124124", "Red Dragon", "Harris", "1990");
console.log(Morris.listBooks());
Morris.removeBook(new Book("142141", "Alchemy and Symbols", "Carl Jung", "1950"));
console.log(Morris.listBooks());



// Exercise 8
// Not finished yet.