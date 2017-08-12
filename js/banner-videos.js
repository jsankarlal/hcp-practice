        $(document).ready(function() {
            scaleVideoContainer();
           // initBannerVideoSize('.video-container .filter');
            initBannerVideoSize('.video-container video');
            $(window).on('resize', function() {
                scaleVideoContainer();
                scaleBannerVideoSize('.video-container .poster img');
             //   scaleBannerVideoSize('.video-container .filter');
                scaleBannerVideoSize('.video-container video');
            });

        });

        function scaleVideoContainer() {
            var height = $(window).height() + 5,
                unitHeight = parseInt(height) + 'px';
            $('.homepage-hero-module').css('height', unitHeight);
        }

        function initBannerVideoSize(element) {
            $(element).each(function() {
                $(this).data('height', $(this).height());
                $(this).data('width', $(this).width());
            });
//jscs:disable
            scaleBannerVideoSize(element);
            /* affix the navbar after scroll below header */
            $('#nav').affix({
                  offset: {
                    top: $('.homepage-hero-module').height()
                  }
            });	

            /* highlight the top nav as scrolling occurs */
            $('body').scrollspy({ target: '#nav' })

            /* smooth scrolling for scroll to top */
            $('.scroll-top').click(function(){
              $('body,html').animate({scrollTop:0},1000);
            })

            /* smooth scrolling for nav sections */
            $('#nav .navbar-nav li>a').click(function(){
              var link = $(this).attr('href');
              var posi = $(link).offset().top+20;
              $('body,html').animate({scrollTop:posi},700);
            })
//jscs:enable
        }

        function scaleBannerVideoSize(element) {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height() + 5 + $('.brand-header').height(),
                videoWidth,
                videoHeight;
            // console.log(windowHeight);
            $(element).each(function() {
                var videoAspectRatio = $(this).data('height') / $(this).data('width');
                $(this).width(windowWidth);
                if (windowWidth < 1000) {
                    videoHeight = windowHeight;
                    videoWidth = videoHeight / videoAspectRatio;
                    $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});
                    $(this).width(videoWidth).height(videoHeight);
                }

                $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
            });
        }