// adding reusable functions
//need more time to work on



function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))
  console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))

  //take an array of numbers and return the sum.

  function sumArray(numbers) {
    return numbers.reduce((acc, num)=> acc + num, 0);
  }
  function averageArray(numbers) {
    return sumArray(numbers) / numbers.length;
  }
  function longestString(strings) {
    return strings.reduces((longest, current) =>
        current.length > longest.length ? current : longest, "");
  }
  function stringsLongerThan(strings, minLength) {
    return strings.filter(str => str.length > minlength);
  }
  function printNumbers(n) {
    if(n < 1) return;
    printNumbers(n - 1);
    console.log(n);
  }
  const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  const sortedByAge = data.sort((a,b)=> parseInt(a.age) - parseInt(b.age));
  console.log("Sorted by Age:", sortedByAge);

  const filteredByAge = data.filter(person => parseInt(person.age) <= 50);
  console.log("filtered by AGe <= 50:", filteredByAge);
  
const updatedData = data.map(person => (
    {
        job: person.occupation, age: (parseInt(person.age) + 1)
            .toString()
    }));
console.log("Updated Data:", updatedData);

const sumOfAges = data.reduce((sum, person) => sum + parseInt
(person.age), 0);
console.log("sumOfAges" , sumOfAges);

const averageAge = sumOfAges / data.length;
console.log("Average Age" , averageAge);

function incrementAge(obj) {
    if (!obj.hasOwnProperty('age')) {
        obj.age = 0;
    }
    obj.age++;
    obj.updated_at = new Date();
}
function incrementAgeCopy(obj) {
    let copy = {obj};
    if (!copy.hasOwnProperty('age')) {
        copy.age = 0;
    }
    copy.age++;
    copy.updated_at = new Date();
    return copy;
}
let person = {name: "John"};
console.log("original object:", person);
let personCopy =incrementAgeCopy(person);
console.log("Original after incrementAgeCopy:", person);
console.log("Copy after incrementAgeCopy", personCopy);



