// Task 1

// ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title = 'Title of the book';
    author = 'Author of the book';
    pages = 777;
    displayInfo = function () {
        console.log(`Title: ${this.title}\nauthor: ${this.author}\namount of pages: ${this.pages}`);
    }
};
const book = new Book();
book.displayInfo();

// Task 2

// ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript
// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo = function () {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    };
}
const student1 = new Student("Jane Doe", 16, "11th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();