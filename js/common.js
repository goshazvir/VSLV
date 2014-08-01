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
	 $(".trust__row").removeClass("is-hide");
	 return false;
	});
});