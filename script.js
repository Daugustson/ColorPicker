window.onload = function() {
	initColorPicker();
};

function initColorPicker() {
	let colorbox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	setColorPickerEventsListeners(colorBox, rgb);
}

function setColorPickerEventsListeners(colorBox, rgb) {
	rgd.red.addEventListener('change', () => {
		console.log("red value: ", rgb.red.value);
	});
	rgd.green.addEventListener('change', () => {
		console.log("green value: ", rgb.green.value);
	});
	rgd.blue.addEventListener('change', () => {
		console.log("blue value: ", rgb.blue.value);
	});

}
