
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

body.style.backgroundColor = "red";
button.addEventListener("click", changeColor);

function changeColor() {
	const colorNumber = parseInt(Math.random()*colors.length);
	body.style.backgroundColor = colors[colorNumber];
}