function toggleMenu() {
	document.getElementById("menu").classList.toggle("active");
}

function startTest(duration) {
	window.location.href = `src/Public/${duration}sec.html?duration=${duration}`;
}