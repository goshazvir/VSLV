head.ready(function() {
	window.dima = baron({

	}).fix({

	}).pull({

	});

	baron({
	    scroller: '.wrapper .scroller',
	    bar: '.scroller__bar',
	    barOnCls: 'baron'
	}).fix({

	}).baron({
	    barOnCls: 'baron_h',
	    bar: '.scroller__bar_h'
	});

	// $('.fancybox').fancybox();

	$('.fancybox').fancybox({
	  // padding: 0,
	  helpers: {
	    overlay: {
	      locked: false
	    }
	  }
	});

	$('.js-more').on('click', function() {
	 $(".trust__1").hide();
	 $(".trust__2").show();
	 return false;
	});

	$('.js-send').on('click', function() {
	 $(".overlay").addClass("is-active");
	 $(".popup_send").addClass("is-active");
	 return false;
	});

	$('.js-cross').on('click', function() {
		$(".popup").removeClass("is-active");
		$(".overlay").removeClass("is-active");
		return false;
	});

	$('.js-succes').on('click', function() {
		$(".overlay").addClass("is-active");
		$(".popup_succes").addClass("is-active");
		return false;
	});

	$('.js-gallery').on('click', function() {
		$(".overlay").addClass("is-active");
		$(".popup_gallery").addClass("is-active");
		return false;
	});

	$('.js-text').on('click', function() {
		$(".overlay").addClass("is-active");
		$(".popup_text").addClass("is-active");
		return false;
	});
});