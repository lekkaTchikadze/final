$(function () {
	$('.multiple-items').slick({
		infinite: true,

		slidesToShow: 3,

		slidesToScroll: 1,

		arrows: true,

		dots: true,

		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

$(".hover").mouseleave(
	function () {
		$(this).removeClass("hover");
	}
);

function ShowOrHide() {
	let menu = document.getElementById("navbar-mobile");
	if (menu.style.display === "none") {
		menu.style.display = "flex";
	} else {
		menu.style.display = "none";
	}
}