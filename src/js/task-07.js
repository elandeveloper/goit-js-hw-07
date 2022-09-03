const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", changeTextSize);

function changeTextSize(event) {
  const eventValue = event.currentTarget.value;

  text.style.fontSize = `${eventValue / 3}px`;
}
