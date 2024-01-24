const button = document.querySelector(".button");
const output = document.querySelector(".output")


function onPointerDown(event) {
  output.textContent = "Тип нажатия: " + (event.pointerType);
}

button.addEventListener("pointerdown", onPointerDown);