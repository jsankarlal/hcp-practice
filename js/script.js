//JS
(function(global) {
    function G3() {
    };
    
    G3.prototype.validateForm = function(hash) { 
        var _this = this;
        $('#popup-template').find('.modal-title').html('Thanks for contacting us');
        $('#popup-template').find('.modal-body').html('<p> We have Received your query. We will get back to you shortly</p>');
        $('#contact-us-form.collapse').collapse('toggle'); //$('#contact-us-form.collapse').collapse("hide");
        $('#popup-template').modal('show');
        
    };
    
    G3.prototype.smoothScroll = function(hash) {
        var _this = this,
            hash = hash || location.hash,
            position = 0,
            navigationHeight = $('#global-navigation').height();
        
        if (hash != '' && hash != 'undefined') {
            position = $(hash).offset().top - navigationHeight;
            $('body,html').animate({scrollTop: position}, 1500);
        }
    }
    
    G3.prototype.bindEvents = function() {
        var _this = this,
            $videoPopup = $('#video-popup-template'),
            $formelement = '';
        //on resize event
        _this.$window.on('resize', function() {
           
        });
        
        //on scroll event
         _this.$window.on('scroll', function() {
             _this.showBackToTop.call(_this);
         });

         $(document).click(function(){
             $('#contact-us-form.collapse').collapse('hide');
         });

         $('.scroll-top').click(function() {
             event.preventDefault();
             $('body,html').animate({scrollTop:0}, 1000);
         });
         
         $('body').scrollspy({target: '#nav'});
         
         $('#contact-us-submit').on('click', function(event) {
             $formelement =  $('#contact-us-form');
             _this.validateForm($formelement);
         });
         
         /* smooth scrolling for nav sections */
          $('#nav .navbar-nav li>a').click(function(event) {
              var link = $(this).attr('href');
              _this.smoothScroll(link);
              event.preventDefault();
          });
         
         $('#video-popup-template').on('hide.bs.modal', function(event) {
            $videoPopup.find('.modal-body').html('');
         });
         
         $(document).on('click', '[data-video-popup]', function(event) {
             var videoPath = $(this).data('video-popup') || '',
                 iframeElement = '';
             if (videoPath != '' && videoPath != 'undefined') {
                 iframeElement = '<iframe width="100%" src="' + videoPath + '" frameborder="0" allowfullscreen></iframe>';
                 $videoPopup.find('.modal-body').html(iframeElement);
                 $videoPopup.modal('show');
             }
         });
         
         $(document).on('submit', '.authentication-form', function(event) {
             //$(this).find('.authentication-modal-submit').trigger('click');
            event.preventDefault();
             _this.submitAuthenticateForm(location.hash);
         });
         
         $(document).on('click', '.authentication-modal-submit', function(event) {
             _this.submitAuthenticateForm();
         });
         
         //jscs:disable
         
         /*Page Preloading*/
 		/*$(window).load(function() {
 			$('.preloader').fadeOut();
 		});
 		*/
 		/* niceScroll */
 		/*$(".tabs_scroll").niceScroll({
 			touchbehavior: false,
 			scrollspeed: 60,
 			mousescrollstep: 38,
 			cursorwidth: 12,
 			cursorborder: 0,
 			autohidemode: false,
 			zindex: 99999999,
 			horizrailenabled: false,
 			cursorborderradius: 0,
 			cursorcolor: "#3B5998"
 		});*/
 		
 		/* ---------------------------------------------------------------------- */
 		/* ---------------------- redimensionnement ----------------------------- */
 		/* ---------------------------------------------------------------------- */

 		/*function redimensionnement() {

 			if (window.matchMedia("(max-width: 768px)").matches) {
 				$('.VerticalTab_hash_scroll .resp-tabs-container').removeClass('tabs_scroll');
 				$(".VerticalTab_hash_scroll .tabs_scroll").niceScroll().remove();
 			} else {
 				$('.VerticalTab_hash_scroll .resp-tabs-container').addClass('tabs_scroll');
 				$(".VerticalTab_hash_scroll .tabs_scroll").getNiceScroll().resize();
 			}

 		}

 		// On lie l'événement resize à la fonction
 		window.addEventListener('load', redimensionnement, false);
 		window.addEventListener('resize', redimensionnement, false);*/
 	
 		
        /* ---------------------------------------------------------------------- */
        /*	------------------------- Horizontal Tab --------------------------- */
        /* ---------------------------------------------------------------------- */
 	   
         $('.HorizontalTab').easyResponsiveTabs({
             type: 'default', //Types: default, vertical, accordion
             width: 'auto', //auto or any width like 600px
             fit: true, // 100% fit in a container
             tabidentify: 'hor_1', // The tab groups identifier
 			active_Hash: false,// activate hash
             activate: function(event) { // Callback function if tab is switched
                 var $tab = $(this);
                 var $info = $('#nested-tabInfo');
                 var $name = $('span', $info);
                 $name.text($tab.text());
                 $info.show();
             }
         });
 		
 		
 		/* ---------------------------------------------------------------------- */
 		/* ------------------------- Effect tabs -------------------------------- */
 		/* ---------------------------------------------------------------------- */

 		var animation_style_1 = 'bounceIn';
 		
 		$('.HorizontalTab_1 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.HorizontalTab_1 .resp-tabs-container').addClass('animated ' + animation_style_1);
 			$('.HorizontalTab_1 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.HorizontalTab_1 .resp-tabs-container').removeClass('animated ' + animation_style_1);
 			});


 			return false;
 		});
 		
 		var animation_style_2 = 'fadeInLeft';
 		
 		$('.HorizontalTab_2 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.HorizontalTab_2 .resp-tabs-container').addClass('animated ' + animation_style_2);
 			$('.HorizontalTab_2 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.HorizontalTab_2 .resp-tabs-container').removeClass('animated ' + animation_style_2);
 			});


 			return false;
 		});
 		
 		var animation_style_3 = 'fadeInUp';
 		
 		$('.HorizontalTab_3 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.HorizontalTab_3 .resp-tabs-container').addClass('animated ' + animation_style_3);
 			$('.HorizontalTab_3 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.HorizontalTab_3 .resp-tabs-container').removeClass('animated ' + animation_style_3);
 			});


 			return false;
 		});
 		
 		var animation_style_4 = 'fadeIn';
 		
 		$('.HorizontalTab_4 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.HorizontalTab_4 .resp-tabs-container').addClass('animated ' + animation_style_4);
 			$('.HorizontalTab_4 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.HorizontalTab_4 .resp-tabs-container').removeClass('animated ' + animation_style_4);
 			});


 			return false;
 		});
 		
 		var animation_style_5 = 'fadeInDown';
 		
 		$('.HorizontalTab_5 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.HorizontalTab_5 .resp-tabs-container').addClass('animated ' + animation_style_5);
 			$('.HorizontalTab_5 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.HorizontalTab_5 .resp-tabs-container').removeClass('animated ' + animation_style_5);
 			});


 			return false;
 		});


 		
 		/* ---------------------------------------------------------------------- */
 		/*	--------------------------- Vertical Tab ---------------------------- */
 		/* ---------------------------------------------------------------------- */	

 		$('.fc_VerticalTab').easyResponsiveTabs({
 			type: 'vertical', //Types: default, vertical, accordion
 			width: 'auto', //auto or any width like 600px
 			fit: true, // 100% fit in a container
 			closed: '', // accordion or '' Start closed if in accordion view
 			tabidentify: 'hor_1', // The tab groups identifier
 			active_Hash: false,// activate hash
 			activate: function(event) { // Callback function if tab is switched
 				var $tab = $(this);
 				var $info = $('#nested-tabInfo2');
 				var $name = $('span', $info);
 				$name.text($tab.text());
 				$info.show();
 			}
 		});
 		
 		$('.VerticalTab_6').easyResponsiveTabs({
 			type: 'vertical', //Types: default, vertical, accordion
 			width: 'auto', //auto or any width like 600px
 			fit: true, // 100% fit in a container
 			closed: '', // accordion or '' Start closed if in accordion view
 			tabidentify: 'hor_1', // The tab groups identifier
 			active_Hash: true,// activate hash
 			activate: function(event) { // Callback function if tab is switched
 				var $tab = $(this);
 				var $info = $('#nested-tabInfo3');
 				var $name = $('span', $info);
 				$name.text($tab.text());
 				$info.show();
 			}
 		});
 			
 		/* ---------------------------------------------------------------------- */
 		/* ------------------------- Effect tabs -------------------------------- */
 		/* ---------------------------------------------------------------------- */

 		var animation_style_1 = 'bounceIn';
 		
 		$('.VerticalTab_1 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.VerticalTab_1 .resp-tabs-container').addClass('animated ' + animation_style_1);
 			$('.VerticalTab_1 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.VerticalTab_1 .resp-tabs-container').removeClass('animated ' + animation_style_1);
 			});


 			return false;
 		});
 		
 		var animation_style_2 = 'bounceIn';
 		
 		$('.VerticalTab_2 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.VerticalTab_2 .resp-tabs-container').addClass('animated ' + animation_style_2);
 			$('.VerticalTab_2 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.VerticalTab_2 .resp-tabs-container').removeClass('animated ' + animation_style_2);
 			});


 			return false;
 		});
 		
 		var animation_style_3 = 'bounceIn';
 		
 		$('.VerticalTab_3 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.VerticalTab_3 .resp-tabs-container').addClass('animated ' + animation_style_3);
 			$('.VerticalTab_3 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.VerticalTab_3 .resp-tabs-container').removeClass('animated ' + animation_style_3);
 			});


 			return false;
 		});
 		
 		var animation_style_4 = 'bounceIn';
 		
 		$('.VerticalTab_4 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.VerticalTab_4 .resp-tabs-container').addClass('animated ' + animation_style_4);
 			$('.VerticalTab_4 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.VerticalTab_4 .resp-tabs-container').removeClass('animated ' + animation_style_4);
 			});


 			return false;
 		});
 		
 		
 		var animation_style_5 = 'bounceIn';
 		
 		$('.VerticalTab_5 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.VerticalTab_5 .resp-tabs-container').addClass('animated ' + animation_style_5);
 			$('.VerticalTab_5 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.VerticalTab_5 .resp-tabs-container').removeClass('animated ' + animation_style_5);
 			});


 			return false;
 		});
 		
 		var animation_style_6 = 'fadeIn';
 		
 		$('.VerticalTab_6 ul.resp-tabs-list li[class^=tabs-]').click(function() {

 			$('.VerticalTab_6 .resp-tabs-container').addClass('animated ' + animation_style_6);
 			$('.VerticalTab_6 .resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
 				$('.VerticalTab_6 .resp-tabs-container').removeClass('animated ' + animation_style_6);
 			});


 			return false;
 		});
 		
 		
 		/* ---------------------------------------------------------------------- */
 		/* ---------------------------- icon menu ------------------------------- */
 		/* ---------------------------------------------------------------------- */

 		$(".resp-tabs-container h2.resp-accordion").each(function() {

 			if ($(this).hasClass('resp-tab-active')) {
 				$(this).append("<i class='fa fa-angle-up arrow-tabs'></i>");
 			} else {
 				$(this).append("<i class='fa fa-angle-down arrow-tabs'></i>");
 			}
 		});

 		$(".resp-tabs-container h2.resp-accordion").click(function() {
 			if ($(this).hasClass('resp-tab-active')) {
 				$(this).find("i.arrow-tabs").removeClass("fa-angle-down").addClass("fa-angle-up");
 			}

 			$(".resp-tabs-container h2.resp-accordion").each(function() {

 				if (!$(this).hasClass('resp-tab-active')) {
 					$(this).find("i.arrow-tabs").removeClass("fa-angle-up").addClass("fa-angle-down");
 				}
 			});


     });

         //jscs:enable
    };
    
    G3.prototype.showBackToTop = function() {
        var _this = this,
            $floatingBackCta = $('.fixed-buttons-group');
        if (_this.$window.scrollTop() > 100) { 
            $floatingBackCta.addClass('scroll-top-active');
        } else { 
            $floatingBackCta.removeClass('scroll-top-active');
        }
    }
    
    G3.prototype.submitAuthenticateForm = function(hash) {
        var _this = this,
            user = $('.authentication-text-field').val()
            pass = $('.authentication-password-field').val();
        if (user === 'g3admin' && pass === 'Designer') {
            _this.$body.removeClass('authentication-modal-open');
            $('#authentication-modal').hide();
            _this.smoothScroll(hash);
        }

    };
    
    G3.prototype.initializeCarousel = function() {
        var _this = this,
            $item = $('.carousel .item'),
            $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight); 
        $item.addClass('full-screen');

        $('.carousel img').each(function() {
            var $src = $(this).attr('src'),
            $color = $(this).attr('data-color');
            $(this).parent().css({
                'background-image': 'url(' + $src + ')',
                'background-color': $color
            });
            $(this).remove();
        });

        $(window).on('resize', function() {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });

        $('.carousel').carousel({
            interval: 6000,
            pause: 'false'
        });
    };
    
    G3.prototype.initializeCarousel = function() {
        var _this = this;
    }
    
    //init
    G3.prototype.init = function() {
        var _this = this;
        _this.$window = $(window), 
        _this.$html = $('html'),
        _this.$body = $('body');
        _this.smoothScroll(location.hash);
        _this.bindEvents();
       //_this.initializeCarousel();
    };
    
  //  _.extend(G3.prototype, Utility.prototype);
    global.G3 = G3;
}(this));

$(function() {
    var g3 = new G3();
    g3.init();
});