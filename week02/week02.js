// shallow Equality  จารย์ให้ทำข้อนึง 
let book1 = { 
    isbn: 123456789,
    title: "JavaScript",
}
let book2 = { 
    isbn: 123456789,
    title: "JavaScript",
}

function shallowEquality(object1, object2) {   
    const keys1=Object.keys(object1)
    const keys2=Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true ;
}

console.log(shallowEquality(book1,book2))  // true 
console.log(typeof(book1))
let test1 = JSON.stringify(book1)
let test2 = JSON.stringify(book2)
console.log(test1.length)
console.log(test2.length)


// function calculateTotalPages(items, itemsPerPage) {
//     if (itemsPerPage <= 0 || items <= 0) {
//         throw new Error("Item per page must be greater then zero");
//     }   
//     return Math.ceil(items / itemsPerPage);
// }

function calculateTotalPages(items, itemsPerPage) {
    if(itemsPerPage <= 0) {
        throw new Error("Item per page must be greater then zero");   
    }
    let result = `${items / itemsPerPage}`.split(".");  
    if(result.length === 2) {
        return + result[0] + 1 ;    // index ตัวแรก + 1 
    }
    return result[0]  // แล้วก็ return index ตัวแรก ออกมา 
}

console.log(calculateTotalPages(10, 3))

// 10 / 3 = 3.333333333333333  
// 

let r1 = 3.333333333333333;
let r1str = r1.toString();    
console.log(r1str[0])

console.log("----------------objectTest------------------")

// objectTest.js

// object ไม่มี order (ลำดับ) 
// object เป็น composite valuse    ประกอบกันรวมกัน object ประกอบด้วย ojbect สอนกันได้ เป็น nested ได้ 


const book={isbn:1201, isbn:1111}
console.log(book)

const person={
    name:"jeng",
    age:30,
    cars: [
        {name:"Fiat", models:["500", "Panda"]}
    ]
}

const pets = {
    cat: {
        name: "mongkol",
        // hello: function() { return "hello" } 
        hello(){return "hello"}   // systax ES6 
    }
}
console.log(pets.cat.name)
console.log(pets.cat.hello())  // hello 

pets.dog={name:'abc'}
console.log(pets)

delete pets.dog
console.log(pets)

console.log("---------------- construtor function ------------------")
console.log()
// 1. object literal
const Person1 = {
    firstName: "Panupong",
    lastName: "Chaichun",
    age: 20
}

// 2.constructor function 
function Person2(first, last, age){
    this.first = first;
    this.last = last;
    this.age = age;
}
const me = new Person2("Panupong", "Chaichun", 20);
const you  = new Person2("jeng", "Chaichun", 25);
console.log(me)
console.log(you)

// 3. class 
class Person3 { 
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
} 

const jacky = new Person3("jacky", "ky", 10)
console.log(jacky)


// 4. using Object.create(exitsing object)
const jackystudent = Object.create(jacky)
console.log(jackystudent.firstName)
console.log(jackystudent.lastName)
console.log(jackystudent.age)
jackystudent.studentId = 67130500029;
console.log(jackystudent)

console.log("----------------------------------")

console.log(Person1.firstName)   // object.property 
console.log(Person1["lastName"])  // object["property"] 

// for...in (object)
for (const key in Person1){
    console.log(key)
    console.log(Person1[key])
}

const std1 = { id:1, name: "somchai"} 
const std2 = { id:2, name: "Somchai"}

console.log(std1 == std2) 
console.log(std1 === std2) 
console.log(Object.is(std1, std2))


function dosomething(obj){
    obj = {id:1, name:'yoyo'}
    obj.name = '029' 
}

const pet = {id:1, name:'yoyo'}
console.log(pet.name)
dosomething(pet)
console.log(pet.name)


function compareStudent(std1, std2){
    if (std1.id === std2.id && 
        std1.name.toLowercase() === std2.name.toLowercase()
    )
    return true 
    else return false
}
console.log(compareStudent(std1, std2))