const para = document.querySelector('p');
para.addEventListener('click', updateName);
function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `NAME: ${name}`;
}

 alert("Welcome");

const name = 'Bingo';
console.log ('name');
const hello = ' says hello!';
console.log("hello") ;
const greeting = 'name' + 'hello';
console.log("greeting") ;

console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log('hello ' + 'everyone');
// Expected output: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"

let a = 2;
let b = 'hello';

console.log(a += 3); // Addition
// Expected output: 5

console.log(b += ' world'); // Concatenation
// Expected output: "hello world"
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log(x = y + 1); // 3 + 1
// Expected output: 4

console.log(x = x * y); // 4 * 3
// Expected output: 12

//DOM AbortController
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("Download aborted");
  }
});

function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}

