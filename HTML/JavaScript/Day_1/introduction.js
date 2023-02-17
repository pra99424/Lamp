
// const para = document.querySelector('p');
// para.addEventListener('click', updateName);
// function updateName() {
//     const name = prompt('Enter a new name');
//     para.textContent = `NAME: ${name}`;
// }

// alert("Welcome");

const name = 'Bingo';
console.log ('name');
const hello = ' says hello!';
console.log("hello") ;
const greeting = 'name' + 'hello';
console.log("greeting") ;

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
// Expected output: false

console.log(Number.isFinite(10 / 5));
// Expected output: true

console.log(Number.isFinite(0 / 0));
// Expected output: false
