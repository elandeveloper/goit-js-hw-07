const refs = {
  input: document.querySelector("input"),
  createButton: document.querySelector('button[data-action="render"]'),
  deleteButton: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
  controls: document.querySelector("#controls"),
};

function createBoxes(amount) {
  refs.input.value = amount;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = 30 + i * 10 + "px";
    boxEl.style.height = 30 + i * 10 + "px";
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    boxEl.style.backgroundColor = bgColor;
    boxEl.classList.add("box");

    boxes.push(boxEl);
  }

  return refs.boxes.append(...boxes);
}

const onRenderButtonClick = () => {
  createBoxes(refs.input.value);
};

const onDestroyButtonClick = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = 0;
  return;
};

refs.createButton.addEventListener("click", onRenderButtonClick);
refs.deleteButton.addEventListener("click", onDestroyButtonClick);
