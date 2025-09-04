// function echo(msg) {
//     return msg;
// }
// function say() {
//     console.log('Hello');
// }
// function getLength(str) {
//     return str.length
// }
// const GPAAverage = 3.0
// class Book {
//     constructor(isbn) {
//         this.isbn = isbn
//     }
// }
// class people{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//utilities.js

//named export
export function echo(msg) {
    return msg
}
//default export
export default function getLength(str) {
    return str.length
}
const GPAAverage = 3.0
class Book {
    constructor(isbn) {
        this.isbn = isbn
    }
}
export { echo, getLength as default, GPAAverage, Book as BookManagement }
// module.exports = { echo, say, people, getLength, GPAAverage };