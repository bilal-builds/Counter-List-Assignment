const increaseButton = document.querySelector('.counter__button--increase');
const decreaseButton = document.querySelector('.counter__button--decrease');
const counterValue = document.querySelector('.counter__value');
const resetButton = document.querySelector('.counter__reset-button');

resetButton.addEventListener("click", function() {
    counterValue.textContent = 0;
});


increaseButton.addEventListener("click", function() {
    const currentValue = +counterValue.textContent; 
    if (currentValue < 5) { 
        counterValue.textContent = currentValue + 1;
    }
});

decreaseButton.addEventListener("click", function() {
    const currentValue = +counterValue.textContent;
    let newValue = currentValue - 1;
    if (newValue < 0) {
        newValue = 0;
    }
    counterValue.textContent = newValue;
});