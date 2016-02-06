$(document).ready(function() {
	$('body').append('<p>PYK</p>');
	$('body').prepend('<p>PYK1</p>');
	$('.new').css({
		width: '32px',
		height: '32px',
		background-color: 'red'
	});
	/*$("button").on("click" function() {
		$(this).fadeOut();
		$("<div class="new">PYK</div>").appendTo("#container");*/
	});
});