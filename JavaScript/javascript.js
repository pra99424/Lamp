
// const para = document.querySelector('p');
// para.addEventListener('click', updateName);
// function updateName() {
//     const name = prompt('Enter a new name');
//     para.textContent = `NAME: ${name}`;
// }

// alert("Welcome");

const name = 'Bingo';
console.log('name');
const hello = ' says hello!';
console.log("hello");
const greeting = 'name' + 'hello';
console.log("greeting");

console.log(2 + 2);


console.log(2 + true);


console.log('hello ' + 'everyone');


console.log(2001 + ': A Space Odyssey');


let a = 2;
let b = 'hello';
// Addition by anonymous '+' operator in prefix of equal to  
console.log(a += 3);

// Concatenation also done the this format using string
console.log(b += ' world');

let x = 2;
const y = 3;

console.log(x);
console.log(x = y + 1);
//multiply * operator
console.log(x = x * y);

const myInt = 5;

console.log(typeof myInt);



const myFloat = 6.667;

console.log(typeof myFloat);





const lotsOfDecimal = 1.766584958675746364;

lotsOfDecimal;



const twoDecimalPlaces = lotsOfDecimal.toFixed(3); //to fixed is used to round up the number

console.log(twoDecimalPlaces);





// let myNumber = "74";

// myNumber += 3;

// console.log(myNumber)



let myNumber = "74";

myNumber = Number(myNumber) + 3;

console.log(myNumber)



const num1 = 10

const num2 = 5

let add;

let sub;

let div;

let mul;

let pow;

let comp1;

let comp2;

let comp3;



add = num1 + num2;

console.log(add)



sub = num1 - num2;

console.log(sub)



div = num1 / num2;

console.log(div)



mul = num1 * num2;

console.log(mul)



pow = num1 ** num2;

console.log(pow)



comp1 = 5 + 10 * 3;

console.log(comp1);



comp2 = (num2 % 9) * num1;

console.log(comp2)



comp3 = num2 + num1 / 8 + 2;

console.log(comp3)

//DOM AbortController
let controller;
const url = "video.mp4";

// const downloadBtn = document.querySelector(".download");
// const abortBtn = document.querySelector(".abort");

// downloadBtn.addEventListener("click", fetchVideo);

// abortBtn.addEventListener("click", () => {
//   if (controller) {
//     controller.abort();
//     console.log("Download aborted");
//   }
// });

// function fetchVideo() {
//   controller = new AbortController();
//   const signal = controller.signal;
//   fetch(url, { signal })
//     .then((response) => {
//       console.log("Download complete", response);
//     })
//     .catch((err) => {
//       console.error(`Download error: ${err.message}`);
//     });
// }
//using innerHTML and GetElementById we can see the text in webpage
// let text = "Pradeep T";  // String written inside quotes
// document.getElementById("texting in website").innerHTML = text;

/* datatype */


console.log(Number.isFinite(1 / 0));


console.log(Number.isFinite(10 / 5));


console.log(Number.isFinite(0 / 0));

//String 

const str_1 = "Pradeep T";
//length of the string
console.log(str_1.length);
//String.prototype.at()
console.log(str_1.at(-1));
console.log(str_1.at(-5));
console.log(str_1.at(5));
//String.prototype.big()
console.log(str_1.big());
console.log(str_1.small());
console.log(str_1.fontsize(7));
//String.prototype.blink()
console.log(str_1.blink());
console.log(str_1.bold());
console.log(str_1.italics());
//String.prototype.charAt()
console.log(str_1.charAt(3));
//String.prototype.charCodeAt()
console.log(str_1.charCodeAt(0));
console.log("Pradeep".charCodeAt(0));
//String.prototype.concat()
const str_2 = "Pradeep ";
const str_3 = "Thirumoorthy";
console.log(str_2.concat(" , ", str_3));
//String.prototype.endsWith() true or false
console.log(str_2.endsWith('p'));
console.log(str_3.endsWith('y'));
//String.prototype.fixed()
console.log(str_1.fixed());

//Array



array

let arr = ['nokia', 'samsung', 'realme', 'redmi', 'oneplus', 'vivo', 'apple', 'iqoo']

let category = [1, 2, 3, [4, 5, 6, 7]]

console.log(arr);

console.log(category);



console.log(arr.length)

console.log(category.length)



arr[0] = 'micromax';

console.log(arr)



const random = ['tree', 795, [0, 1, 2]];

console.log(random[2][0]);

console.log(random[2][1])

console.log(random[2][2])



console.log(arr.indexOf('samsung'))

arr.push('techno')

console.log(arr)





// unshift to push in an start of an array

arr.unshift('poco')

console.log(arr)





// Remove an item

arr.pop()
// last will remove

console.log(arr)



// shift used to remove an item first in an array

arr.shift()

console.log(arr)



// splice is used to remove an item by using an index number 
splice(start, end)

arr.splice(1, 3)

console.log(arr)

var array = [1, 2, 3, 4, 5];
var array_2 = ['pradesh', 'praveen balaji', 'gokul', 'naresh', 'saravanan', 'Arul'];
console.log(array);//printing all the elements in the array
console.log(array.length); //length of the array
console.log(array_2[1]); // indexing element
//updating 
array_2[0] = 'Pradeep';
console.log(array_2);
console.log(array_2.indexOf('pradeep')); //index of character
array_2.push('deepok'); // adding element in the last
array_2.pop(); // removing element in last position
array_2.shift(); // removing element in first position
console.log(array_2);
//accessing every element in the array
for (var elements of array) {
  console.log(elements);
}
// map()
function double(number) {
  return number * 3;
}
var numbers = [2, 4, 6, 8, 10];
var twice = numbers.map(double);
console.log(twice);
//filter
function long(companies) {
  return companies.length > 3;
}
const companies = ['aspire', 'tcs', 'cts', 'zoho', 'dell'];
const filteration = companies.filter(long);
console.log(filteration);
//split()
const text = "My name is Dinesh K";
const spliting = text.split(" ", 3); //my , name , dinesh
document.getElementById("store").innerHTML = spliting;
//join()
console.log(companies.join('-'));
//to string
console.log(numbers.toString());
//creating empty array
const player = new Array(3);
//Array.prototype.at()
console.log(companies.at(-1)); // finding the last item
//Array.prototype.concat()
const number_1 = [1, 3, 5, 7, 9];
const number_2 = [2, 4, 6, 8, 10];
console.log(number_1.concat(number_2));  //merge two arrays
//Array.prototype.copyWithin()
console.log(number_1.copyWithin(0, 3));//7,9,5,7,9
console.log(number_1.copyWithin(0, 3, 4));
//Array.prototype.entries()
const array1 = ["a", "b", "c"];
const arrayEntries = array1.entries();
for (const element of arrayEntries) {
  console.log(element);
}
//Array.prototype.every()
const check = [2, 4, 6, 8, 10]
const every_ele = check.every(finding)
console.log(every_ele);
function finding(result) {
  return result >= 2;
}
//Array.prototype.fill()
console.log(number_1.fill(5));
console.log(number_1.fill(1, 3));
//Array.prototype.find()
const array_3 = [5, 1, 8, 130, 44];
const found = array_3.find(element => element > 10);
console.log(found);
//Array.prototype.findIndex()
const index = array_3.findIndex(element => element > 10);
console.log(index);
//Array.prototype.findLast()
const array_4 = [5, 12, 50, 130, 44];
const founds = array_4.findLast((element) => element > 45);
console.log(founds);
//Array.prototype.flat()
const arr_1 = [0, 1, 2, [3, 4]];
console.log(arr_1.flat());
// Array.from()
const string = "dinesh";
console.log(Array.from(string));
//Array.prototype.includes()
console.log(arr_1.includes(2)); //checking whether the number is there or not
console.log(arr_1.includes(0, 0));
// array is array
console.log(Array.isArray(arr_1));
//Array.of()
console.log(Array.of('dinesh', '1', 3, 4, 5));
//reverse
console.log([1, 2, 3, 4, 5].reverse());
//slice
console.log([1, 2, 3, 4, 5].slice(0, 3));
//splice
const arr_2 = ['mon', 'wednes', 'thur'];
arr_2.splice(1, 0, 'tues')
console.log(arr_2);
//unshift
const arr_3 = [4, 5, 6, 7, 8, 9, 10];
arr_3.unshift(1, 2, 3);
console.log(arr_3);

//if-else
const choice = document.getElementById("food");
const paragraph = document.getElementById("list");
choice.addEventListener('change', details);
function details() {
  const info = choice.value;
  if (info == 'Idly') {
    paragraph.textContent = 'Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka.';
    paragraph.style.backgroundColor = "pink";
  }
  else if (info == 'Dosai') {
    paragraph.textContent = 'A dosa, also called dosai, dosey, or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice.';
    paragraph.style.backgroundColor = "red";
  }
  else if (info == 'Pongal') {
    paragraph.textContent = 'Pongal, also referred to as Thai Pongal, is a multi-day Hindu harvest festival celebrated by Tamils in India and Sri Lanka.';
    paragraph.style.backgroundColor = "brown";
  }
  else if (info == 'Briyani') {
    paragraph.textContent = 'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent as a variety of Persian pilaf.';
    paragraph.style.backgroundColor = "powderblue";
  }
  else if (info == 'Poori') {
    paragraph.textContent = 'Poori or Puri is a traditional Indian fried bread that is delicious to enjoy with almost any main dish.';
    paragraph.style.backgroundColor = "orange";
  }
}

//Switch

const select = document.querySelector('select');
const textselecting = document.querySelector('#forecast');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      textselecting.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      textselecting.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      textselecting.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      textselecting.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      textselecting.textContent = '';
  }
}

//Ternary operator

const selecting = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

selecting.addEventListener('change', () => selecting.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);

//while
let n = 0;
while (n < 3) {
  n++;
}
console.log(n);

//do while
let pattern = '';
let i = 0;
do {
  i = i + 1;
  pattern = pattern + i;
} while (i < 5);
console.log(result);

//for
let cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
for (let cat of cats) {
  console.log(cat);
}

let object = { a: 1, b: 2, c: 3 };
for (let property in object) {
  console.log(`${property}: ${object[property]}`);
}

let str = '';
for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);


//function

//Function keydown is using to display which key is pressed
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey);


//Alternate method

textBox.addEventListener('keydown', function (event) {
  console.log(`You pressed "${event.key}".`);
});

//using an arrow function
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});

//single line arrow function
textBox.addEventListener("keydown", (event) => console.log(`you pressed ${event.key}".`));

//the function take only one parameter so omit the bracket

textBox.addEventListener("keydown", event => console.log(`You pressed ${event.key}".`));


//using an map
const list = [1, 2, 3, 4, 5]
const result = list.map((re => re * 2))
console.log(result);

//alert the user
alert("Hello ")



const body = document.body;

const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
body.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));


const res = document.querySelector('.btn');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

res.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});


//Remove the listeners
btn.removeEventListener('click', changeBackground);

//Event objects
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);


//display the key pressed
const textBox = document.querySelector("#textBox");
const outputt = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => outputt.textContent = `You pressed "${event.key}".`);


//prevent the event
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});


//Event Bubbling
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container1 = document.querySelector('#container');
const button1 = document.querySelector('button');
document.body.addEventListener('click', handleClick);
container1.addEventListener('click', handleClick);
button1.addEventListener('click', handleClick);


//fixing the event bubbling
const btw = document.querySelector('button');
const box = document.querySelector('div');
const video = document.querySelector('video');

btw.addEventListener('click', () => box.classList.remove('hidden'));
video.addEventListener('click', () => video.play());
box.addEventListener('click', () => box.classList.add('hidden'));


//stop propogation()
const btn1 = document.querySelector('button');
const box1 = document.querySelector('div');
const video1 = document.querySelector('video');

btn1.addEventListener('click', () => box1.classList.remove('hidden'));

video1.addEventListener('click', (event) => {
  event.stopPropagation();
  video1.play();
});

box1.addEventListener('click', () => box1.classList.add('hidden'));


//Event capture least nested to highest nested
const output1 = document.querySelector('#output');
function handleClick(e) {
  output1.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container2 = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick, { capture: true });
container2.addEventListener('click', handleClick, { capture: true });
button.addEventListener('click', handleClick);

//Event Delegation random color change
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector('#container');

container.addEventListener('click', (event) => event.target.style.backgroundColor = bgChange());

//dyamic Function
function myFunc() {
  let para = document.createElement('h2');
  para.textContent = 'You clicked ';
  document.body.appendChild(para);
}
//OOPS
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; 
walsh.introduceSelf(); 

lillian.teaches; 
lillian.introduceSelf(); 

//Inhertince
class Professor extends Person {

  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }

}

walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); 

summers = new Student("Summers", 1);
summers.introduceSelf(); 

pratt = new Person("Pratt");
pratt.introduceSelf(); 

//Encapsulation
function Student(name,marks)  
{  
  var s_name=name;  
  var s_marks=marks;  
  Object.defineProperty(this,"name",{  
    get:function()  
    {  
      return s_name;  
    },  
  set:function(s_name)  
  {  
    this.s_name=s_name;  
  }  
    
});  
   
    Object.defineProperty(this,"marks",{  
    get:function()  
    {  
      return s_marks;  
    },  
  set:function(s_marks)  
  {  
    this.s_marks=s_marks;  
  }  
    
});  
    
}  
  var stud=new Student("John",80);  
  document.writeln(stud.name+" "+stud.marks);  

  //
