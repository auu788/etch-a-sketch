$(document).ready(function() {
	var init_num_of_rows = 16;
	var pixel_size = 512/init_num_of_rows;
	var user_num_of_rows = init_num_of_rows;
	var user_pixel_size = pixel_size;

	fill(init_num_of_rows, pixel_size);

	$(".box").hover(function() {
		$(this).css({
			"background-color": "#43A047"
		})
	});


	$('#b_reset').on('click', function(){
		fill(init_num_of_rows, pixel_size);
		$(".box").hover(function() {
			$(this).css({
				"background-color": "#43A047"
			})
		});
	});


	$('#b_resize').on('click', function(){
		$('.box').remove();

		user_num_of_rows = prompt("Please write the number of rows [1-100]");
		if(user_num_of_rows > 100) user_num_of_rows = 100;
		else if(user_num_of_rows < 1) user_num_of_rows = 1;
		else if(isNaN(user_num_of_rows)) user_num_of_rows = init_num_of_rows;

		user_pixel_size = 512/user_num_of_rows;

		for(var i=0; i<user_num_of_rows*user_num_of_rows; i++)
		{
			$('#container').append('<div class="box" style="width:' + user_pixel_size + 'px;height:' + user_pixel_size + 'px;"></div>');
		}

		$(".box").hover(function() {
			$(this).css({
				"background-color": "#43A047"
			})
		});
	});


	$('#b_opacity').on('click', function(){
		fill(user_num_of_rows, user_pixel_size);

		$(".box").hover(function() {
			$(this).css({
				"background-color": "#43A047",
				"opacity": "-=0.1"
			})
		});

	});

	$('#b_trail').on('click', function(){
		fill(user_num_of_rows, user_pixel_size);

		$('.box').hover(function(){
			$(this).css({
				"background-color": "#43A047"})
		}).mouseover(function() {
			$(this).stop().animate({'background-color':'#43A047'},700);
		}).mouseout(function() {
			$(this).stop().animate({'background-color':'#E53935'},700);
		});
	});


	$('#b_color').on('click', function() {
		fill(user_num_of_rows, user_pixel_size);
		
		$('.box').hover(function() {
			$(this).css({
				"background-color": randomColor()
			})
		});
	});

	function fill(num_of_rows, pixel_size) {
		$('.box').remove();

		for(var i=0; i<num_of_rows*num_of_rows; i++)
		{
			$('#container').append('<div class="box" style="width:' + pixel_size + 'px;height:' + pixel_size + 'px;"></div>');
		}
	}

	function randomColor() {
		return 'rgb(' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ')';
	}

});