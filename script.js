const button = document.querySelector(".button");
const output = document.querySelector(".output")

function onPointerDown() {
  output.textContent = "Последнее событие: pointerdown";
}

function onPointerUp() {
  output.textContent = "Последнее событие: pointerup"
}

function onPointerMove() {
  output.textContent = "Последнее событие: pointermove"
}

function onPointerLeave() {
  output.textContent = "Последнее событие: pointerleave"
}

button.addEventListener("pointerdown", onPointerDown);
button.addEventListener("pointermove", onPointerMove);
button.addEventListener("pointerup", onPointerUp);
button.addEventListener("pointerleave", onPointerLeave);