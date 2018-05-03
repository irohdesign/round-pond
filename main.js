$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$(document).ready(function() {
	$("a.scroll").on('click', function(event) {
		if(this.hash !== "") {
			event.preventDefault();
			
			var hash = this.hash;
			
			$('html,body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
});