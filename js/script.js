(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
	
	//Change Header Style
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 1) {
				$('.main-header').addClass('header-fixed');
			} else {
				$('.main-header').removeClass('header-fixed');
			}
		}
	}
	
	
	//Main Slider
	if($('#main-slider').length){

		jQuery('.tp-banner').show().revolution({
		  delay:7000,
		  startwidth:1170,
		  startheight:650,
		  hideThumbs:1400,
	
		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,
	
		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",
	
		  touchenabled:"on",
		  onHoverStop:"off",
	
		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,
	
		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	
		  keyboardNavigation:"off",
	
		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:20,
	
		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,
	
		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,
	
		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",
	
		  spinner:"spinner4",
	
		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,
	
		  shuffle:"off",
	
		  autoHeight:"off",
		  forceFullWidth:"on",
	
		  hideThumbsOnMobile:"off",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"off",
		  hideThumbsUnderResolution:0,
	
		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"../video/",
		  fullScreenOffsetContainer: "#main-slider"
	  });

		
	}
	
	//Curved Carousel Slider
	if($('.curved-carousel .slider').length){
		$('.curved-carousel .slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: false,
			mode:'fade',
			pause: 7000,
			speed: 1000,
			pager:true
		});
	
	}
	
	//Tweets Slider
	if($('.tweets-slider').length){
		$('.tweets-slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: false,
			mode:'fade',
			pause: 5000,
			speed: 1000,
			pager:false
		});
	}
	
	//Image Scroller
	if($(".image-scroller").length){
		
		$('.image-scroller').bxSlider({
		  minSlides: 1,
		  maxSlides: 1,
		  slideWidth: 600,
		  slideMargin: 0,
		  useCSS: false,
		  ticker: true,
		  autoHover:true,
		  tickerHover:true,
		  speed: 30000,
		  infiniteLoop: true
		});
	}
	
	//Logo Scroller
	if($(".logo-scroller").length){
		
		$('.logo-scroller .slider').bxSlider({
		  minSlides: 1,
		  maxSlides: 1,
		  slideWidth: 250,
		  slideMargin: 5,
		  useCSS: false,
		  ticker: true,
		  autoHover:true,
		  tickerHover:true,
		  speed: 50000,
		  infiniteLoop: true
		});
	}
	
	
	//Jquery Knob animation -- Fact Counter
	if($('.dial').length){
		$('.dial').appear(function(){
          var elm = $(this);
          var color = elm.attr("data-fgColor");  
          var perc = elm.attr("value");  
 
          elm.knob({ 
               'value':0, 
                'min':0,
                'max':100,
                "skin":"tron",
                "readOnly":true,
                "thickness":.15,
				'dynamicDraw': true,
				"displayInput":false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 1000,
              easing: 'swing',
              progress: function () {
				  elm.val(Math.ceil(this.value)).trigger('change')
              }
          });

          //circular progress bar color
          $(this).append(function() {
              elm.parent().parent().find('.circular-bar-content').css('color',color);
              elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
          });

          },{accY: 10});
    }
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				}
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				$.post($(form).attr('action'), $(form).serialize(), function (response) {
					$(form).parent('div').append(response);
				});
				return false;
			}
		});
	}
	
	// Google Map Settings
	if($('#map-location').length){
		var map;
		 map = new GMaps({
			el: '#map-location',
			zoom: 18,
			scrollwheel:false,
			//Set Latitude and Longitude Here
			lat: -37.817085,
			lng: 144.955631
		  });
		  
		  //Add map Marker
		  map.addMarker({
			lat: -37.817085,
			lng: 144.955631,
			infoWindow: {
			  content: '<p style="color:#3b3b3b; text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
			}
		 
		});
	}
	
	//Add Scroll Bar To Schedule
	if($('.schedule-box').length){
		$(".schedule-box").mCustomScrollbar({
			axis:"x",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

	// faq page toggler
	if($('.toggle').length){
		$('.toggle').find('.toggle-content').hide();
		$('.toggle-title').on('click', function () {
			$(this).find('i').toggleClass('fa-plus fa-minus');
			$(this).parent().find('.toggle-content').slideToggle();
		});
	}
	


	// custom tab for what we do section 
    function sideTab () {
        if ($('.side-tab').length) {
            var tabWrap = $('.side-tab .col-lg-9');
            var tabClicker = $('.side-tab .col-lg-3 ul li a');
            
            tabWrap.find('div').hide();
            tabWrap.find('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.parent().removeClass('active');
                $(this).parent().addClass('active');
                var id = '#'+ tabName;
                tabWrap.find('div').not(id).hide();
                tabWrap.find('div'+id).fadeIn('800');
                return false;
            });
            tabClicker.each(function () {
            	$(this).addClass('hvr-bounce-to-right');
            });
        }
    }
    // custom gallery image activer
    function GalleryImgActivator () {
    	if($('#gallery-page').length) {
			$('#gallery-page a').fancybox();
    	}    	
    }
    // testimonial page carsoule
    function TestimonialPageCarsoule () {
    	if ($('#testimonials-page .owl-carousel').length) {
	    	$('#testimonials-page .owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:false,
			    autoplay: 5000,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:3
			        }
			    }
			});    		
    	}

    }
    // back to top 
    function backToTop () {
	    var offset = 1;
	    var duration = 700;
	    $(window).on('scroll', function() {
	        if ($(this).scrollTop() > offset) {
	            $('.back-to-top').fadeIn(duration);
	        } else {
	            $('.back-to-top').fadeOut(duration);
	        }
	    });

	    $('.back-to-top').on('click', function(event) {
	        event.preventDefault();
	        $('html, body').animate({scrollTop: 0}, duration);
	        return false;
	    });
    }
    // gallery filter activation
    function GalleryFilter () {
    	if($('#image-gallery').length){
    		$('#image-gallery').mixItUp();
    	}
    	
    }

    // scrolling navigation
    function scrollingNav () {
    	if ($('body.home-one-page-version').length) {
    		// $('.navbar-collapse ul > li').each(function () {
    		// 	$(this).addClass('scroll');
    		// });
			$('.navbar-collapse ul > li > a').click(function() {  
				$('.navbar-collapse ul > li > a').parent().removeClass('current');
				$(this).parent().addClass('current');
				$('html, body').animate({scrollTop: $(this.hash).offset().top -60}, 1000);
				return false;
			});
    	};
    }
	// User define function
	function ScrollToActiveMenu () {
		var scrollPosition = $(document).scrollTop();
		$('.navbar-collapse .scroll > a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			console.log(refElement);
			if (refElement.position().top-80 <= scrollPosition) {
				$('.navbar-collapse ul li.scroll > a').parent().removeClass("current");
				currentLink.parent().addClass("current");
			}
			else{
				currentLink.parent().removeClass("current");
			}
		});

	}
	


/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {
		headerStyle();
		sideTab();
		GalleryImgActivator();
		TestimonialPageCarsoule();
		backToTop();
		GalleryFilter();
		scrollingNav();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function(event) {
		headerStyle();
		ScrollToActiveMenu();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	

})(window.jQuery);


