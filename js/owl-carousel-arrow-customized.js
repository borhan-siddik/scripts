(function ($) {
	$(document).ready(function () {
		$('.owl-carousel').owlCarousel({
			loop: true, // Infinity loop. Duplicate last and first items to get loop illusion. (Type: Boolean, Default: false)
			margin: 10, // margin-right(px) on item. (Type: Number, Default: 0)
			nav: true, // Show arrow navigations or next/prev buttons. (Type: Boolean, Default: false)
			dots: true, // Show pagination dots. (Type: Boolean, Default: true)
			dotsEach: false, // Show dots for each number of items. (Type: Number/Boolean. Default: false)
			lazyLoad: true, // Lazy load images. data-src and data-src-retina for highres. Also load images into background inline style if element is not <img>. (Type: Boolean, Default: false)
			autoplay: true, // Autoplay. (Type: Boolean, Default: false)
			autoplayTimeout: 1500, // Autoplay interval timeout. (Type: Number in miliseconds, Default: 5000)
			autoplayHoverPause: true, // Pause on mouse hover. (Type: Boolean, Default: false)
			center: false, // Center item. Works well with even an odd number of items. (Type: Boolean, Default: false)
			mouseDrag: true, // Mouse drag enabled. (Type: Boolean, Default: true)
			touchDrag: true, // Touch drag enabled. (Type: Boolean, Default: true)
			startPosition: 0, // Start position or URL Hash string like '#id'. (Type: Number/String, Default: 0)
			rewind: true, // Go backwards when the boundary has reached. (Type: Boolean, Default: true)
			slideBy: 1, // Navigation slide by x number. (Type: Number/String, Default: 1)
			video: true, // Enable fetching YouTube/Vimeo/Vzaar videos. (Type: Boolean, Default: false)
			navText: [ "<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>" ], // Change navigation arrow content. Any HTML allowed. (Type: Array, Default: [&#x27;next&#x27;,&#x27;prev&#x27;])
			responsive: { // Object containing responsive options. Can be set to false to remove responsive capabilities (Type: Object, Default: empty object)
				0: {
					items: 1 // The number of items you want to see on the screen 0px to 574px
				},
				575: {
					items: 2 // The number of items you want to see on the screen 575px to 767px
				},
				768: {
					items: 3 // The number of items you want to see on the screen 768px to 991px
				},
				992: {
					items: 4 // The number of items you want to see on the screen 992px to above
				}
			}
		})
	});
}(jQuery)); 