const counterValue = {
    value: 0,
    increment() {
         this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBTN = document.querySelector('[data-action="decrement"]')
const incrementBTN = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')

console.log(decrementBTN);
console.log(incrementBTN);
console.log(valueEl);

decrementBTN.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementBTN.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});