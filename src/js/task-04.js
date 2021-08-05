let counterValue = 0;

const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;

const incrementButtonEl = document.querySelector('[data-action="increment"]');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const countEl = document.querySelector("#value");

incrementButtonEl.addEventListener("click", () => {
    countEl.textContent = increment();
}
);

decrementButtonEl.addEventListener("click", () => {
    countEl.textContent = decrement();
}
);

// В качестве эксперимента :)
// window.addEventListener('click', function (event) {

//     let counter;

//     if (event.target.dataset.action === 'decrement' || event.target.dataset.action === 'increment') {
//         const counterWrapper = event.target.closest('#counter');

//         counter = counterWrapper.querySelector('#value');
//     };
        
//     if (event.target.dataset.action === 'decrement') {
        

//         if (parseInt(counter.innerText) > 1 ) {
//             counter.innerText = --counter.innerText;
//         }

//     };

//     if (event.target.dataset.action === 'increment') {

//             counter.innerText = ++ counter.innerText;
//     }
// })

