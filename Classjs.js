
// console.log("saloni");
// console.error("0 division error");
// console.warn("error may occure");
// console.info;

// let student={name:"saloni",age:20,course:"cse"};
// console.table(student);
// console.table(["apple","b","c"]);
// console.time("test");
// for(let i=0;i<10000;i++){}
//     console.timeEnd("test");

// console.group("cse24");
// console.log("name:saloni");
// console.groupEnd()  ;
// console.count("click");
// console.count("click");
// console.count("click");
// console.count("click");
// console.count("click");
// console.log(1+2);

//function
function add(a,b){
    return a+b;
}
console.log(add(5,6));
//arrow function
const multiply=(a,b)=> a*b;    //Why we are using here constant?--->Fot not changing the work of this function.
console.log("a * b =", multiply(5,6));
 
//array
let arr=[10,20,30,40,50];
console.log(arr[0]);
arr.push(20);
arr.pop();
console.log(arr);
//object
let student={
    name:"saloni",
    age:20,
    course:"b.tech"
};

console.log(student["age"]);
//date

let today=new Date();
console.time("teat");
for (let i=0;i<10000;i++){}
console.timeEnd("teat");
//math function
console.log(Math.sqrt(25),Math.pow(2,3),Math.random());

// string
text="Hello I am using JS";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("I"));

//type conversion
let num="123";
let convert= Number(num);
console.log(convert+10);

//Nan
console.log(isNaN("abes"));
console.log(isNaN(10));

//dom manipulation
setTimeout(()=>{
    console.log("This is a delayed meesage by 2 seconds");
},2000);

//for loop
for(let i=0;i<5;i++){
    console.log(i);
}

//while loop 
let j=0;
while(j<5){
    console.log(j);
    j++;
}

//if else
let a=20;
if(a%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//switch case
d=1;
switch(d){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}

//try catch
try{
    let result=x/0;
    console.log(result);
}
catch(error){
    console.log("Error");
}