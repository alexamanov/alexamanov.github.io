$('.menu-btn').on('click', function(e) {
	$(this).toggleClass('menu-btn-active');
});

$('.sl').slick();

var $window = $(window);
$window.on('load scroll', function() {
    var top = $window.scrollTop();
    var height = $window.height();
    if (top + height >= 1920) {
        $('header').addClass('black');
    } else {
    	$('header').removeClass('black');
    }
});
