document.addEventListener("DOMContentLoaded", function () {

	let logo = document.querySelector('.logo');

	for (let i = 1; i <= 5; i++) { // write var and check
		let item = document.createElement('span');

		logo.appendChild(item);
	}

});

let offSet = 2900

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube1").addClass("cube-1");
		$(".cube-text1").addClass("cube-text-1");

	} else {
		$(".cube1").removeClass("cube-1");
		$(".cube-text1").removeClass("cube-text-1");

	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube2").addClass("cube-2");
		$(".cube-text2").addClass("cube-text-2");
	} else {
		$(".cube2").removeClass("cube-2");
		$(".cube-text2").removeClass("cube-text-2");

	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube3").addClass("cube-3");
		$(".cube-text3").addClass("cube-text-3");
	} else {
		$(".cube3").removeClass("cube-3");
		$(".cube-text3").removeClass("cube-text-3");
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube4").addClass("cube-4");
		$(".cube-text4").addClass("cube-text-4");
	} else {
		$(".cube4").removeClass("cube-4");
		$(".cube-text4").removeClass("cube-text-4");
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube5").addClass("cube-5");
		$(".cube-text5").addClass("cube-text-5");
	} else {
		$(".cube5").removeClass("cube-5");
		$(".cube-text5").removeClass("cube-text-5");
	}
});


let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

let bg2 = document.querySelector('.mouse-parallax-bg2');
window.addEventListener('mousemove', function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bg2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});
