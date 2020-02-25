const button = document.querySelector("#click-button");
const number = document.querySelector("#number");
let counter = number.innerText;

console.log(counter);

function addOneToNumber() {
    counter = parseInt(counter, 10);
    counter = counter + 1;
    number.innerText = counter;
}

addOneToNumber();

button.addEventListener("click", addOneToNumber);
