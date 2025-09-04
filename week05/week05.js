const stundetScores = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 68 },
    { name: "Eve", score: 78 },
]
function passScores() {
    let result = [];
    for (let i = 0; i < stundetScores.length; i++) {
        if (stundetScores[i].score >= 70) {
            result.push(stundetScores[i].name.toUpperCase());
        }
    }
    return result;
}

console.log(passScores());

console.log(Array.isArray([]));
console.log(Array.isArray(["a", 12, false]));
console.log(Array.isArray(new Array(1)));

console.log(Array.isArray("[]"));
console.log(Array.isArray(123));
console.log(Array.isArray(false));
console.log(Array.isArray("1"));
console.log(Array.isArray({}))

const num1 = [1, 2, 3];
const num2 = [3, 5, 7];

console.log([...num1, ...num2])
console.log(num1.concat(num2));

console.log(num1.toString());   // convert array to string data type
console.log(num1.toString());
console.log(num1.join("."));
console.log(num1.join(","));

c("------------------------------------------------")

function c(a) {
    console.log(a);
}

const month2 = ['March','jan', 'feb', 'Dec']
month2.sort();
c(`months2: ${month2}`);

const arr4 = [1, 30, 4, 21, 10000]
function maxtomin(num) {
    return num.sort((a, b) => b - a);
}
const test = ((num) => {
    return num.sort((a, b) => b - a);
})
c(maxtomin(arr4))
c(test(arr4));

c("------------------------------------------------")
// 16272936
// 029
const students = [
    { id: 66500102, name: "Suda", gpa: 2.5 },
    { id: 66500555, name: "ada", gpa: 2.8 },
    { id: 66500589, name: "pornchai", gpa: 3.25 },
    { id: 66500104, name: "Pornsak", gpa: 3.8 },
]
function Sortstd() {
    return students.sort((a, b) => a.name.localeCompare(b.name));
}
c(Sortstd());

/*
    " LocaleCompare " คืออะไร ? LocaleCompare คือ prototype function ที่มีอยู่แล้วใน ตัวแปรประเภท string ของ
    javascript ซึ่ง function นี้เอาไว้สำหรับเปรียบเทียบระหว่าง string 2 ตัวว่าตัวไหนมาก่อนตามหลักของแต่ละภาษา
*/

c("------------------------------------------------")
// 16272936
