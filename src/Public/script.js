function toggleMenu() {
	document.getElementById("menu").classList.toggle("active");
}

function startTest(duration) {
	window.location.href = `./src/Public/Pages/${duration}sec.html?duration=${duration}`;
}