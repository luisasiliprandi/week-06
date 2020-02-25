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

    if (counter >= 10) {
        message.innerText = "Way to go!";

    }

    if (counter >= 20) {
        message.innerText = "Wooop.";
    }

    if (counter >= 30) {
        message.innerText = "Yayy!";
    }

    if (counter >= 40)
        message.innerText = "Nice job!";

    if (counter >= 50) {
        message.innerText = "You are awesome!";
    }

    if (counter >= 60) {
        message.innerText = "You got this!";
    }
}

button.addEventListener("click", addOneToNumber);
