const refs = {
  value: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const increment = () => (counterValue += 1);

const decrement = () => (counterValue -= 1);

const valueIncrementing = refs.incrementBtn.addEventListener("click", () => {
  refs.value.textContent = increment();
});
const valueDecrementing = refs.decrementBtn.addEventListener("click", () => {
  refs.value.textContent = decrement();
});
