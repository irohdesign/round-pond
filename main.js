$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$(document).ready(function() {
	
	var scrollLink = $('.scroll');
	
	scrollLink.click(function(e) {
		e.preventDefault();
		
		$('body,html').animate({
			scrollTop:$(this.hash).offset().top
		} )
	})
	
})