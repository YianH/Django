$(document).ready(function() {
	// alert("here");
	// alert($('button').length);

	$('.detail').on('click', 'button', function(event) {
		event.preventDefault();
		$(this).closest('.detail').find('.uin').slideToggle();
	});
	// $('.span').on('click', 'h3', function(event) {
	// 	event.preventDefault();
	// 	$(this).closest('.span').find('.slidedown').slideToggle();
	// });

	// $('.search').on('click', '#searchbtn', function(event) {
	// 	event.preventDefault();
	// 	$(this).closest('.search').find('.slidedown').slideDown();
	// 	// event.preventDefault();
		// alert('Success')
		// $('.is_target p').toggleClass('highlight');
	});

});