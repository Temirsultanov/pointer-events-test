const button = document.querySelector(".button");
const output = document.querySelector(".output")


function onTouchStart(e) {
  output.textContent = "touchstart"
}

button.addEventListener("touchstart", onTouchStart);