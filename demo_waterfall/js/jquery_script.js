$(window).on("load", function() {
	waterfall();
	var dataInt = {"data":
                     [{"src":"17.jpg"},{"src":"16.jpg"},{"src":"15.jpg"}]
                  };
	$(window).on("scroll", function() {
		if(checkScrollSlide()) {
			$.each(dataInt.data, function(key,value) {
				var oBox = $("<div>").addClass('box').appendTo($('#main'));
				var opic = $("<div>").addClass('pic').appendTo($(oBox));
				$("<img>").attr({src: 'images/' + $(value).attr("src")}).appendTo($(opic));
			});
			waterfall();
		}
	});
});

function checkScrollSlide() {
	var $lastBox = $("#main>div").last();
	var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return lastBoxDis < scrollTop + documentH;
}

function waterfall() {
	var $boxs = $("#main>div");
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width() / w);
	$("#main").width(w * cols).css("margin", "0 auto");
	var hArr = [];
	$boxs.each(function(index, value) {
		var h = $boxs.eq(index).outerHeight();

		if(index < cols) {
			hArr[index] = h;
		} else {
			var minH = Math.min.apply(null, hArr);
			var minHIndex = $.inArray(minH, hArr);
			$(value).css({"position": "absolute",
		                  "left": minHIndex * w + "px",
		                  "top": minH + "px"});
			hArr[minHIndex] += $(value).outerHeight();
		}
	});

}