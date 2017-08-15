    $(document).ready(function() {
         var windowWidth = $(window).width();
          if (windowWidth > 991) {
              insertVideoElement();
              scaleVideoContainer();
           // initBannerVideoSize('.video-container .filter');
            initBannerVideoSize('.video-container video');
          }

          $(window).on('resize', function() {
              windowWidth = $(window).width();
              if (windowWidth > 991) {
                  insertVideoElement();
                  scaleVideoContainer();
             // initBannerVideoSize('.video-container .filter');
                  initBannerVideoSize('.video-container video');
                  scaleBannerVideoSize('.video-container video');
              }
          });
    });

        function insertVideoElement() {
               var  videoEl = '<video autoplay="" loop="" class="fillWidth video-container visible-md visible-lg">' 
                   + '<source src="build/assets/videos/snowfall/snowfall.mp4" type="video/mp4">'
                   + 'Your browser does not support the video tag. I suggest you upgrade your browser.</video>';
               $('.hero-video-banner').html(videoEl);
        }
        
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