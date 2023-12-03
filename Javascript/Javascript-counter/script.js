let incrementButton = document.querySelector(".button_action_increment");
let countElement = document.querySelector(".count");

function increment() {
    let currentCount = parseInt(countElement.textContent);
    countElement.textContent = currentCount + 1;
}

incrementButton.addEventListener("click", increment);
// ya begitu caranya membuat counter dengan javascript


