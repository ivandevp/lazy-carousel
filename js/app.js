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
	var slideTo = container.querySelector(".slide-to");
	var items = container.querySelectorAll(".content li");
	var counter = 0;
	var totalItems = items.length;
	var current = items[0];

	var goTo = function (number) {
		current.classList.remove("current");
		if (counter <= 0) {
			counter = totalItems - 1;
		}
		if (number >= totalItems) {
			counter = 0;
		}
		current = items[counter];
		current.classList.add("current");
		slideTo.selectedIndex = counter;
	};

	next.addEventListener("click", function () {
		counter += 1;
		goTo(counter);
	});
	prev.addEventListener("click", function () {
		counter -= 1;
		goTo(counter);
	});
	slideTo.addEventListener("change", function () {
		var slide = parseInt(this.selectedOptions[0].getAttribute("data-slide-to"));
		counter = slide;
		goTo(counter);
	});
})();