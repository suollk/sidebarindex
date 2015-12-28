requirejs.config({
	paths: {
		jquery: "jquery-2.1.4.min"
	}
})

requirejs(["jquery","backtop"], function($,backtop) {
	$("#backtop").backtop({
		mode:'move'
	})
     
	
//	$("#backtop").on("click",  $.proxy(scroll.move,scroll));
//	$(window).on("scroll", function() {
//		checkPosition($(window).height());
//	});
//	
//	checkPosition($(window).height());
//	
//	function checkPosition(pos) {
//		if ($(window).scrollTop() > pos) {
//			$("#backtop").fadeIn();
//		} else {
//			$("#backtop").fadeOut();
//		}
//	}
})