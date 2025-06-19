console.log('Happy developing ✨');
console.log('Hello world');

/*window.alert('Hello world');
window.alert('Hello world2');
*/
//document.getElementById("heading").textContent='Welcome to my website';
//document.getElementById("para").textContent='This is a paragraph';
//this is a comment in js

/*
This is a multiline comment
*/

//part 2
//variable is a container that stores a value
// declaration using let keyword
//assignment of the variable using = operator
/*
let name="John";
name="Jane"; //reassigning the variable
const age=30; //constant variable cannot be reassigned

console.log(name);
console.log(age);
console.log(typeof name); //typeof operator returns the data type of the variable
console.log(typeof age);
console.log(`My name is ${name} and I am ${age} years old.`);

 let username;
username=window.prompt("What's your name?");
console.log(username);

*/
//Professional way is
/*let username1;
document.getElementById("btn").onclick=function(){
    username1=document.getElementById("inpusername").value;
    console.log(username1);
}*/

//default js takes the input as string with window.prompt() method
/*
let age1=window.prompt("How old are you");
age1+=1;
console.log(`You will be ${age1+1} next year`);

let x="0";
let y="Saran";
let z="Rahul and Saran";
x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x,y,z, typeof x, typeof y, typeof z);
*/
//If we keep empty string the bool is false and the number is zero

//constants We use this to make sure the constant value cannot be changed in the program like value of pi in circumference calculation
/*let pi=3;
pi=4;//can be changed
console.log(pi);

const pi1=5;
//pi1=6;//cannot be changed
console.log(pi1);
*/
//Counter program

/*let count=0;
const incbtn=document.getElementById("plusbtn");
const decbtn=document.getElementById("minusbtn");
const reset=document.getElementById("resetbtn");

incbtn.onclick=function(){
    count++;
    document.getElementById("counterp").innerHTML=count;
}
decbtn.onclick=function(){
    count--;
    document.getElementById("counterp").innerHTML=count;
}
reset.onclick=function(){
    count=0
    document.getElementById("counterp").innerHTML=count;
}
*/
/*
//Math library
let x=9.87654321;;
console.log(Math.round(x));
console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.trunc(x));
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.abs(-5));
console.log(Math.min(1,2,-3,4,5));
console.log(Math.max(1,2,-3,4,5));
console.log(Math.log(x));
console.log(Math.sin(x));
console.log(Math.cos(x));
console.log(Math.tan(x));
console.log(Math.asin(x));
console.log(Math.acos(x));
console.log(Math.atan(x));
console.log(Math.PI);
console.log(Math.sign(x));
*/
//Random number generator
/*console.log(Math.random());
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10)+1);//to get random numbers from 1-10
function rollDice(){
    return Math.floor(Math.random()*6)+1;
}
console.log(rollDice());
*/

//Rand no gen web
/*const randbtn=document.getElementById("genbtn");
const label1=document.getElementById("rdn1");
const label2=document.getElementById("rdn2");
const label3=document.getElementById("rdn3");
let max=50;
let min=1;
let rand;
let rand1;
let rand2;
randbtn.onclick=function(){
    rand=Math.floor(Math.random()*(max-min))+min;
    rand1=Math.floor(Math.random()*(max-min))+min;
    rand2=Math.floor(Math.random()*(max-min))+min;
    label1.innerHTML=rand;
    label2.innerHTML=rand1;
    label3.innerHTML=rand2;
}
*/
// If statements are normal like other languages just use console.log instead of print
/*if(rand>rand1){
    if(rand>rand2){
        console.log(`${rand} is greater than ${rand1} and ${rand2}`);
    }
    else{
        console.log(`${rand2} is greater than ${rand} and ${rand1}`);
    }
}
    if(rand1>rand2){
        console.log(`${rand1} is greater than ${rand} and ${rand2}`);
    }
    }
}*/

//Ternary Operator is same as python and other languages
/*let adult=true;
adult?console.log("Yes"):console.log("No");*/

//Switch case statement
/*switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
    case 2:
        day="Tuesday";
    default:
        day="Unknown Day";
}*/
//console.log(day);
/*

//string methods
let str="Hello World";
console.log(str.length);
console.log(str.indexOf("World"));
console.log(str.lastIndexOf("o"));
console.log(str.slice(0,5)); //slice(start,end) end not included
console.log(str.substring(0,5));//substring(start,end) end not included
console.log(str.substr(0,5));//substr(start,length)
console.log(str.replace("World","Universe"));//replace(old,new)
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str[0]);
console.log(str.split(" "));//split(separator)
console.log(str.concat(" ",str));
console.log(str.includes("World")); //includes(searchValue,startIndex)
console.log(str.startsWith("H"));
console.log(str.endsWith("d"));
console.log(str.trim());//trim() removes whitespace from both sides of a string
console.log(str.repeat(3));//repeat(count)
console.log(str.padStart(10,"*"));//padStart(targetLength,padString)
console.log(str.padEnd(10,"*"));//padEnd(targetLength,padString)
console.log(str.charCodeAt(0));//charCodeAt(index)
console.log(String.fromCharCode(65));//fromCharCode(code)
console.log(str.codePointAt(0));//codePointAt(index)
console.log(str.normalize());//normalize(form)

//method chaining
console.log(str.toUpperCase().toLowerCase().concat(" ","World"));
// without chaining it would have been
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat(" ","World"));

// Logical operators
let temp=30;
if(temp>=30 && temp<=40){
    console.log("It's hot outside");
}
else if(temp<30 || temp>40){
    console.log("It's cold outside");
}
else{
    console.log("It's neither hot nor cold outside");
}
//Logical NOT (!) operator
let loggedIn=false;
if(!loggedIn){
    console.log("User logged out");
}
else{
    console.log("User logged in");
}
//Nullish coalescing operator (??)
let user=null;
user=user ?? "Guest";//if user is null then assign guest otherwise assign user
console.log(user);
//=== strict equality operator checks for datatype also
let num=5;
num=num===5?"Yes":"No";
console.log(num);

//while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}
//do while loop
i=0;
do{
    console.log(i);
    i++;
}while(i<10);
//for loop
for(let j=0;j<10;j++){
    console.log(j);
}
//break and continue
for(let k=0;k<10;k++){
    if(k==5){
        break;
    }
    console.log(k);
}
for(let l=0;l<10;l++){
    if(l%2!=0){
        continue;
    }
    console.log(l);
}
//nested loops
for(let m=0;m<10;m++){
    for(let n=0;n<m;n++){
        console.log(n);
    }
}
// number guessing game web app
const min=1,max=10;
const winningNum=Math.floor(Math.random()*(max-min+1)+min);
let attempts=0;
let guess;
let running=true;
while(running) {
    console.log(winningNum);
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
        continue;
    }
    else if(guess < min || guess > max){
        window.alert(`Please enter a number between ${min} and ${max}`);
        continue;
    }
    attempts++;
    if(guess === winningNum){
        window.alert(`Congratulations! You guessed the correct number ${winningNum} in ${attempts} attempts.`);
        running = false;
    }
    else if(guess < winningNum){
        window.alert("Too low!");
    }
    else{
        window.alert("Too high!");
    }
}
*/
/*
// Function
function greet(){
    console.log("Hello World");
}
greet();
//Function parameters and arguments
function greet1(name){
    console.log(`Hello ${name}`);
}
greet1("Saran");
//Default parameter values
function greet2(name="Guest"){
}
greet2();
//Return statement
function add(a,b){
    return a+b;
}
console.log(add(2,3));
//Anonymous function
const square=function(num){return num*num;};
console.log(square(5));
//Arrow functions
const cube=(num)=>{return num*num*num;};
console.log(cube(5));
//Higher order functions
function higherOrder(callback){
    callback();
}
higherOrder(function(){console.log("Callback called")});
//Array methods
let arr=[1,2,3,4];
arr.forEach((item,index)=>{
    console.log(item,index);
})
//function to check if it is valid email address or not
function isValidEmail(email){
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
console.log(isValidEmail("saran@gmail.com"));
console.log(isValidEmail("saran@.com"));

// Variable scope
let globalVar="Global Var";
function a(){
    let localVar="Local Var";
    console.log(globalVar);
    console.log(localVar);
}
a();
console.log(globalVar);
//console.log(localVar);//error because localVar is local to function a()
*/
/*
//Temperature converter
const textbox=document.getElementById("textbox");
const tof=document.getElementById("tofahrenheit");
const toc=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;
function convert(){
    temp=Number(textbox.value);
    if(tof.checked){
        temp=(temp*9/5)+32;
        result.textContent=temp+"°F";
    }
    else if(toc.checked){
        temp=(temp-32)*5/9;
        result.textContent=temp+"°C";
    }
    else{
        result.textContent="Select a conversion option.";
    }
}
*/
/*
//arrays
let fruits=["Apple","Banana","Orange"];
fruits.push("Mango");//add element at the end
fruits.unshift("Grapes");//add element at the beginning
fruits.pop();//remove last element
fruits.shift();//remove first element
fruits.splice(1,1);//remove elements from index 1 to 1
fruits.reverse();//reverse array
fruits.sort();//sort array alphabetically
console.log(fruits.join("-"));//join array elements into a string separated by -
console.log(fruits.toString());//convert array to string
console.log(fruits.slice(1,3));//slice array from index 1 to 3
console.log(fruits.indexOf("Banana"));//find index of an element
console.log(fruits.includes("Banana"));//check if an element exists in the array
console.log(Array.isArray(fruits));//check if a variable is an array
for(let fruit of fruits){//loop through array
    console.log(fruit);
}
*/
/*
//spread operator
let arr1=[1,2,3];
let arr2=[...arr1];//copy array
arr2.push(4);
console.log(arr1,arr2);
let obj={name:"Saran",age:20};
let newObj={...obj,address:"Chennai"};//copy object
newObj.city="Bangalore";
console.log(obj,newObj);
let str="rahul"
let arr3=[...str];//convert string to array
console.log(arr3);

//rest operator
function sum(...args){
    let total=0;
    for(let arg of args){
        total+=arg;
    }
    return total;
}
console.log(sum(1,2,3,4,5));

//callback function
function greet(name,callback){
    console.log(`Hello ${name}`);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye");
}
greet("Saran",sayGoodbye);
//foreach example to apply a function to each of element of an array
let arr4=[1,2,3,4,5];
arr4.forEach((item,index)=>{
    console.log(item,index);
});
//map example
let arr5=[1,2,3,4,5];
let newArr=arr5.map((item,index)=>{
    return item*2;
});
//filter example creates a new array with all elements that pass the test implemented by the provided function.
let arr6=[1,2,3,4,5];
let newArr1=arr6.filter((item,index)=>{
    return item%2===0;
});
//reduce example reduces the array to a single value
let arr7=[1,2,3,4,5];
let sumArr=arr7.reduce((acc,item,index)=>{
    return acc+item;
},0);
//some example tests whether at least one element in the array passes the test implemented by the provided function.
let arr8=[1,2,3,4,5];
let someArr=arr8.some((item,index)=>{
    return item>3;
});
//every example tests whether all elements in the array pass the test implemented by the provided function.
let arr9=[1,2,3,4,5];
let everyArr=arr9.every((item,index)=>{
    return item>0;
});
//find example returns the value of the first element in the array that satisfies the provided testing function.
let arr10=[1,2,3,4,5];
let findArr=arr10.find((item,index)=>{
    return item>3;
});
//findIndex example returns the index of the first element in the array that satisfies the provided testing function.
let arr11=[1,2,3,4,5];
let findIndexArr=arr11.findIndex((item,index)=>{
    return item>3;
});
//fill example fills all the elements of an array with a static value.
let arr12=[1,2,3,4,5];
arr12.fill(0);
console.log(arr12);
//flat example flattens an array up to the specified depth.
let arr13=[[1],[2],[3]];
arr13.flat();
console.log(arr13);
//flatMap example maps each element using a mapping function, then flattens the result into a new array.
let arr14=[[1],[2],[3]];
arr14.flatMap((item,index)=>{
    return item*2;
});
console.log(arr14);
//sort example sorts the elements of an array in place and returns the sorted array.
let arr15=[3,2,1];
arr15.sort();
console.log(arr15);
//reverse example reverses the order of the elements in an array in place and returns the reversed array.
let arr16=[1,2,3];
arr16.reverse();
console.log(arr16);
//isArray example determines whether the passed value is an Array.
let arr17=[1,2,3];
console.log(Array.isArray(arr17));
//indexOf example returns the first index at which a given element can be found in the array, or -1 if it is not present.
let arr18=[1,2,3];
console.log(arr18.indexOf(2));
//lastIndexOf example returns the last index at which a given element can be found in the array, or -1 if it is not present.
let arr19=[1,2,3];
console.log(arr19.lastIndexOf(2));
//includes example determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let arr20=[1,2,3];
console.log(arr20.includes(2));
//entries example returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let arr21=[1,2,3];
for(const [key,value]of arr21.entries()){
    console.log(key,value);
}
//keyOf example returns an array whose elements are strings corresponding to the enumerable property names defined directly on object.
let arr22={name:"Saran",age:20};
// function declaration is hoisted so it can be used before it is declared
function greet(name){
    console.log(`Hello ${name}`);
}
//function expression is not hoisted so it cannot be used before it is declared
const greet1=function(name){
    console.log(`Hello ${name}`);
};
setTimeout(greet1,1000,"Saran");
setInterval(greet1,1000,"Saran");
//arrow function is not hoisted so it cannot be used before it is declared
const greet2=name=>console.log(`Hello ${name}`);
greet2("Saran");
//object - container for related properties and methods
let person={
    name:"Saran",
    age:20,
    hobbies:["Coding","Reading"],
    talk:function(){
        console.log(this.name,this.age,this.hobbies);
    },
    talk1:()=>{
        console.log(this.name,this.age,this.hobbies);
    }
};
person.talk();
person.talk1();

//this keyword
class Person{
    constructor(name,age,hobbies){
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
    }
    talk(){
        console.log(this.name,this.age,this.hobbies);
    }
}
let p=new Person("Saran",20,["Coding","Reading"]);
p.talk();

//constructor function
function Person1(name,age,hobbies){
    this.name=name;
    this.age=age;
    this.hobbies=hobbies;
}
Person1.prototype.talk=function(){
    console.log(this.name,this.age,this.hobbies);
}
let p1=new Person1("Saran",20,["Coding","Reading"]);
p1.talk();
// static keyword = methods belong to the class rather than objects created from the class(can be accessed without creating an instance of the class)
class Person2{
    constructor(name,age,hobbies){
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
    }
    static talk(){
        console.log("Static Method Called");
    }
}
Person2.talk();
//inheritance
class Animal{
    constructor(name,type,color){
        this.name=name;
        this.type=type;
        this.color=color;
    }
    eat(){
        console.log(`${this.name} eats`);
    }
}
class Dog extends Animal{
    constructor(name,type,color,sound){
        super(name,type,color);
        this.sound=sound;
    }
    bark(){
        console.log(`${this.name} barks ${this.sound}`);
    }
}
let dog=new Dog("Dog","Canine","Brown","Woof");
dog.eat();
dog.bark();
//super keyword refers to the parent class
//static methods are called without instantiating their class and cannot be called through a class instance
//abstract classes are meant to be inherited from but never instantiated themselves
class Vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        console.log(`${this.make} ${this.model} started`);
    }
}
class Car extends Vehicle{
    constructor(make,model,wheels){
        super(make,model);
        this.wheels=wheels;
    }
    drive(){
        console.log(`${this.make} ${this.model} driving`);
    }
}
let car=new Car("Toyota","Camry",4);
car.start();
car.drive();

//getter and setter
class Person3{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
    }
}
let p3=new Person3("Saran",20);
console.log(p3.getName);
p3.setName="John";
console.log(p3.getName);

//destructuring assignment= destructuring allows you to extract data from arrays or objects and assign them to variables in a concise way. [] for arrays {} for objects
let arr23=[1,2,3];
let [x,y,z]=arr23;
console.log(x,y,z);
let obj1={name:"Saran",age:20};
let {name,age}=obj1;
console.log(name,age);
//spread operator ...= spread operator allows you to expand an iterable such as an array or string into individual elements. It is often used when passing arguments to a function or constructing a new array/object.
let arr24=[1,2,3];
let arr25=[...arr24,...arr23]; //combines two arrays
console.log(arr25);
//rest operator ...= rest operator allows you to collect multiple elements into an array. It is often used when defining function parameters.
//nested objects= nested objects allow you to store complex data structures within your JavaScript code. They consist of key-value pairs where the keys are typically strings and the values can be any type of data including other objects.
let obj2={name:"Saran",address:{city:"Chennai",state:"TN"}};
console.log(obj2.address.city);
//array of objects= array of objects allows you to store collections of objects within your JavaScript code. Each object represents a distinct entity with its own properties and values.
let arr26=[
    {name:"Saran",age:20},
    {name:"Rahul",age:21},
    {name:"Rajesh",age:22}
];
console.log(arr26[0].name);
//JSON.stringify()= converts a JavaScript object or value to a JSON string.
let obj3={name:"Saran",age:20};
let jsonStr=JSON.stringify(obj3);
console.log(jsonStr);

//sort()= sort method sorts the elements of an array in place and returns the sorted array. The default sorting behavior is based on converting the elements into strings and comparing their sequences of UTF-16 code units values.
let arr27=[3,2,1];
arr27.sort();
console.log(arr27);
//sort() with compare function= sort method sorts the elements of an array in place and returns the sorted array. The default sorting behavior is based on converting the elements into strings and comparing their sequences of UTF-16 code units values.
let arr28=[3,2,1];
arr28.sort((a,b)=>b-a); //descending order
console.log(arr28);
//sort() with localeCompare()= sort method sorts the elements of an array in place and returns the sorted array. The default sorting behavior is based on converting the elements into strings and comparing their sequences of UTF-16 code units values.
let arr29=["apple","banana","cherry"];
arr29.sort((a,b)=>a.localeCompare(b)); //ascending order
console.log(arr29);
//sort() with Intl.Collator= sort method sorts the elements of an array in place and returns the sorted array. The default sorting behavior is based on converting the elements into strings and comparing their sequences of UTF-16 code units values.
let arr30=["apple","banana","cherry"];
arr30.sort((a,b)=>Intl.Collator().compare(a,b)); //ascending order
console.log(arr30);
// Fisher-Yates shuffle algorithm= Fisher-Yates shuffle algorithm is a simple yet effective way to randomly rearrange the elements of an array. It works by iterating over the array from the last element to the second element, generating a random index between 0 and the current index, swapping the current element with the element at the generated index, and continuing until reaching the first element.
let arr31=[1,2,3,4,5];
for(let i=arr31.length-1;i>0;i--){
    let j=Math.floor(Math.random()*i);
    [arr31[i],arr31[j]]=[arr31[j],arr31[i]];
}
console.log(arr31);
// date object= Date object represents a specific point in time in milliseconds since January 1, 1970 UTC. It provides various methods for working with dates and times.
let d=new Date();
console.log(d.getFullYear()); //get year
console.log(d.getMonth()); //get month
console.log(d.getDate()); //get day
console.log(d.getDay()); //get weekday
console.log(d.getHours()); //get hours
console.log(d.getMinutes()); //get minutes
console.log(d.getSeconds()); //get seconds
console.log(d.getMilliseconds()); //get milliseconds
console.log(d.getTime()); //get timestamp
console.log(d.toDateString()); //get date string
console.log(d.toLocaleString()); //get localized date string
console.log(d.toJSON()); //get ISO-formatted date string
console.log(d.toISOString()); //get ISO-formatted date string
console.log(d.toUTCString()); //get UTC-formatted date string
console.log(d.valueOf()); //get timestamp
d.setFullYear(2023); //set year
d.setMonth(0); //set month
d.setDate(1); //set day
d.setHours(0); //set hours
d.setMinutes(0); //set minutes
d.setSeconds(0); //set seconds
d.setMilliseconds(0); //set milliseconds
d.setTime(Date.now()); //set timestamp
console.log(d);
//date format= date format specifies how a date should be displayed. There are several common formats:
//ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ (e.g., "2023-01-01T12:00:00.000Z")
//closure= closure is a function that has access to its outer lexical environment even after the outer function has finished executing. This means that a closure retains references to variables from its enclosing scope, allowing it to maintain state across multiple invocations.
function outerFunc(){
    let count=0;
    function innerFunc(){
        count++;
        console.log(count);
    }
    return innerFunc;
}
let counter=outerFunc(); //counter is now a reference to the innerFunc function
counter(); //logs 1
counter(); //logs 2
counter(); //logs 3
//set timeout= setTimeout is a built-in JavaScript function that schedules the execution of a function or piece of code after a specified delay. It takes two arguments: the function to execute and the delay in milliseconds.
setTimeout(()=>{
    console.log("Hello");
}
,1000);//delay of 1 second
//clear timeout= clearTimeout is a built-in JavaScript function that cancels a scheduled task initiated by setTimeout. It takes the ID returned by setTimeout as an argument and prevents the associated function from being executed.
let id=setTimeout(()=>{
    console.log("Hello");
}
,1000);//
clearTimeout(id);
 */
/*
// Digital Clock using JS
function updateClock(){
    const currentTime=new Date();
    let hours=currentTime.getHours().toString().padStart(2,'0');
    let meridiem;
    if(hours>=12){
        meridiem='PM';
        if(hours>12){
            hours-=12;
        }
    }
    else{
        meridiem='AM';
    }
    const minutes=currentTime.getMinutes().toString().padStart(2,'0');
    const seconds=currentTime.getSeconds().toString().padStart(2,'0');
    const timestring=`${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent=timestring;
    setTimeout(updateClock,1000);
}
updateClock();
*/
/*
//eventlistener= Listen for specific events to create interactive webpages events: click,mouseover,mouseout we use addeventlistener method
// we can use a seperate callback to function or make it there itself or use arrow function
const myboxx=document.getElementById("mybox");
myboxx.addEventListener("click", function(event){
    event.target.style.backgroundColor="lime";
    event.target.textContent="Bye Rahul";
    event.target.textContent.color="red";
});
myboxx.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor="orange";
    event.target.textContent="Dont come";
    event.target.textContent.color="red";
});
myboxx.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor="blue";
    event.target.textContent="Dont";
    event.target.textContent.color="red";
});
 */
//Keyevents in event listener
//use keyup keydown etc to move the buttons as the keys are pressed
/*
//nodeList= similar to array but no chnge automatically and also no map filter anol
let button=document.querySelectorAll(".mybutton");
button.forEach(button=>{
    button.addEventListener("mouseover", (event)=>{
        event.target.style.backgroundColor="tomato";
        event.target.textContent="tomato";
    })
})
*/
/*
//classList= we can dynamically add and remove classes
const mybuttonn=document.getElementById('mybutton');
mybuttonn.classList.add('enabled');
mybuttonn.classList.remove('enabled');

 */
/*
//Rock paper scissor game
const choices = ['rock', 'paper', 'scissor'];
const playerdisp = document.getElementById("playerdisp");
const compdisp = document.getElementById("compdisp");
const resdisp = document.getElementById("resdisp");

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Tie";
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissor') ? "You Win" : "You Lose";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "You Win" : "You Lose";
                break;
            case 'scissor':
                result = (computerChoice === 'paper') ? "You Win" : "You Lose";
                break;
        }
    }

    // Update display
    playerdisp.textContent = `Player: ${playerChoice}`;
    compdisp.textContent = `Computer: ${computerChoice}`;
    resdisp.textContent = `Result: ${result}`;

    // Reset classes
    resdisp.classList.remove("greentext", "redtext", "tieText");

    // Update score and result style
    if (result === "You Win") {
        playerScore++;
        playerScoreEl.textContent = `Player: ${playerScore}`;
        resdisp.classList.add("greentext");
    } else if (result === "You Lose") {
        computerScore++;
        computerScoreEl.textContent = `Computer: ${computerScore}`;
        resdisp.classList.add("redtext");
    } else {
        resdisp.classList.add("tieText");
    }
}
*/
//Image Slider
/*
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dotsContainer = document.getElementById('dots');

function createDots() {
    slides.forEach((_, index) => {
        let dot = document.createElement('span');
        dot.addEventListener('click', () => showSlides(index));
        dotsContainer.appendChild(dot);
    });
}
createDots();

let dots = document.querySelectorAll('.dots span');

function showSlides(index) {
    slideIndex = (index + slides.length) % slides.length;

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Auto-slide every 4 seconds
setInterval(() => {
    plusSlides(1);
}, 4000);

// Initial display
showSlides(slideIndex);
*/
// Callback HELL= Nested callbacks that is a callback within another callback. USe promises + async/wait to avoid callback hell
//Promises = An object that manages async operations
//           Wrap a promise object around{async code} "I promise to return a value" new Promise((resolve,reject)->{async code})
