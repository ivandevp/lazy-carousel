// var imgArray = [".img1", ".img2", ".img3"];
// var contador = 0;

// var mostrar = function (img) {
// 	$(img).ready(function() {
// 		$(imgArray[contador]).fadeIn(1500);
// 	});
// };

// var ocultar = function (img) {
// 	$(img).ready(function() {
// 		$(imgArray[contador]).fadeOut(1500);
// 	});
// };

// var avanzaSlide = function() {
// 	ocultar(imgArray[contador]);
// 	contador = (contador+1) % 3;
// 	mostrar(imgArray[contador]);
// };

// var generateRandomHash = function (imgs) {
// 	[].forEach.call(imgs, function (img) {
// 		var timestamp = new Date().getTime();
// 		img.src += "?" + timestamp;
// 	})
// };

// // var imgs = document.getElementsByClassName("img");
// // generateRandomHash(imgs);

// setInterval(avanzaSlide, 5000);

$(".lazy").lazyload();

+(function() {
	var container = document.querySelector(".catalog");
	var next = container.querySelector(".next");
	var prev = container.querySelector(".prev");
	var items = container.querySelectorAll(".content li");
	var counter = 0;
	var totalItems = items.length;
	var current = items[0];

	var goTo = function (number) {
		current.classList.remove("current");
		counter += number;
		if (number === -1 && counter < 0) {
			counter = totalItems - 1;
		} 
		if (number === 1 && !items[counter]) {
			counter = 0;
		}
		current = items[counter];
		current.classList.add("current");
	};

	next.addEventListener("click", function () {
		goTo(1);
	});
	prev.addEventListener("click", function () {
		goTo(-1);
	});
})();