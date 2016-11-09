var $overlay = $('<div id="overlay"></div>');
	
var $image = $('<img>');

var $caption = $('<p></p>');

$overlay.append($image);

$overlay.append($caption);

$('body').append($overlay);

$('#imageGallery a').click(function(e){
	e.preventDefault();

	

	var href = $(this).attr("href");

	$image.attr('src' , href);
	$overlay.show();

	var captionText = $(this).children('img').attr("alt");

	$caption.text(captionText);

	$overlay.click(function(){
		$(this).hide();
	})	
});