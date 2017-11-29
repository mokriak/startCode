$(document).ready(function() {
	
	$('.price__button--basic').mouseover(function() {
		$('.item__price--basic').addClass('item__price--hover');

	});
	$('.price__button--basic').mouseleave(function() {
		$('.item__price--basic').removeClass('item__price--hover');
	});

	$('.price__button--pro').mouseover(function() {
		$('.item__price--pro').addClass('item__price--hover');
	});

	$('.price__button--pro').mouseleave(function() {
		$('.item__price--pro').removeClass('item__price--hover');
	});

	$('.price__button--premium').mouseover(function() {
		$('.item__price--premium').addClass('item__price--hover');
	});

	$('.price__button--premium').mouseleave(function() {
		$('.item__price--premium').removeClass('item__price--hover');
	});
	//fix menu
	$(function(){
		$(window).scroll(function() {
			if($(this).scrollTop() >= 100) {
				$('.header').addClass('header--fixed');
			}
			else{

				$('.header').removeClass('header--fixed');
			}
		});
	});
	//Скролл до id, указанного в hash URL
	$(document).ready(function(){
    // = Вешаем событие прокрутки к нужному месту
    	//	 на все ссылки якорь которых начинается на #
    	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    		e.preventDefault();
    		var target = this.hash,
    		$target = $(target);

    		$('html, body').stop().animate({
    			'scrollTop': $target.offset().top -100
    		}, 900, 'swing', function () {
    			window.location.hash = target.offset().top -100;
    		});
    	});

    });


	$('.about-us-slider').owlCarousel({
		nav: true,
		loop: true,
		items: 1,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
	
	$('.content__item').equalHeights();//EqualHeights
	
	$('.toggle-mnu').click(function() {
		$(this).toggleClass('on');
		$('.mobile-navigation').slideToggle(500);
		return false;
	});
	
});	













