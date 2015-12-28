define(['jquery'], function($) {
	function ScrollTo(opts) {
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
		this.$el = $("html,body");
	}

	ScrollTo.prototype.move = function() {
		var opts = this.opts;

		if ($(window).scrollTop() != opts.dest) {
			if (!this.$el.is(':animated')) {
				$("html,body").animate({
					scrollTop: opts.dest
				}, opts.speed);
			}
		}
	}

	ScrollTo.prototype.go = function() {
		var dest = this.opts.dest;
		if ($(window).scrollTop() != dest) {
			$("html,body").scrollTop(dest);
		}
	}

	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800
	};

	return {
		ScrollTo: ScrollTo
	}
})