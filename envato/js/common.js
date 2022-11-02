$(function() {

  $(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('#to-top').addClass('show');
		} else {
			$('#to-top').removeClass('show');
		}
	});
	
	$('#to-top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  })

  $("a[rel='scrollToId']").click(function() {
    var targetDiv = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetDiv).offset().top
    }, 1000);
  });

  containerDays = $('#head-timer').children()[0]
  containerHours = $('#head-timer').children()[1]
  containerMinutes = $('#head-timer').children()[2]
  containerSeconds = $('#head-timer').children()[3]

  currentDate = new Date();

  containerDays.innerHTML = '0'+ currentDate.getDay() +'<span>days</span>';
  containerHours.innerHTML = currentDate.getHours() +'<span>hours</span>';
  containerMinutes.innerHTML = currentDate.getMinutes() +'<span>minutes</span>';
  containerSeconds.innerHTML = currentDate.getSeconds() +'<span>seconds</span>';

})
