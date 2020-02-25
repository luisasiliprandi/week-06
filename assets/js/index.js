const button = document.querySelector("#click-button");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
let counter = number.innerText;

console.log(counter);

function addOneToNumber() {
    counter = parseInt(counter, 10);
    counter = counter + 1;
    number.innerText = counter;

    updateMessage();
}

function updateMessage() {
    message.innerText = "Way to go!";
}

button.addEventListener("click", addOneToNumber);
