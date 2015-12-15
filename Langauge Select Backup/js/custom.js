$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}

scrolledOnce = 0

function dangosIaith(iaith){

	if (iaith == 1){
		$(".cymraeg").fadeIn()
		$(".saesneg").hide()
		$(".cym .cymraegbotwm").css('background-color', '#dbd7cb');
		$(".saes .cymraegbotwm").css('background-color', '#f3a100');
		if (scrolledOnce == 0) {
			$('body').scrollTo('.dewisIaith');
			scrolledOnce = 1
		}

	}
	else {

		$(".saesneg").fadeIn()
		$(".cymraeg").hide()
		$(".saes .cymraegbotwm").css('background-color', '#dbd7cb');
		$(".cym .cymraegbotwm").css('background-color', '#f3a100');
		if (scrolledOnce == 0) {
			$('body').scrollTo('.dewisIaith');
			scrolledOnce = 1;
		}

	}

}

$( window ).resize(function() {
  if ($( window ).width() >  768) {

  	$(".saesneg").fadeIn()
		$(".cymraeg").fadeIn()

  } else {

  			$(".saesneg").fadeOut()
  			$(".cymraeg").fadeOut()
  			$(".cym .cymraegbotwm").css('background-color', '#f3a100');
  			$(".saes .cymraegbotwm").css('background-color', '#f3a100');
  }
 });
