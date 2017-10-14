    $(document).ready(function() {
         var windowWidth = $(window).width();
          if (windowWidth > 991) {
              insertVideoElement();
              scaleVideoContainer();
           // initBannerVideoSize('.video-container .filter');
            initBannerVideoSize('.hero-video-banner video');
          } else {
              $('.homepage-hero-module').removeAttr('style');
          }

          $(window).on('resize', function() {
              windowWidth = $(window).width();
              if (windowWidth > 991) {
                  insertVideoElement();
                  scaleVideoContainer();
             // initBannerVideoSize('.video-container .filter');
                  initBannerVideoSize('.hero-video-banner video');
                  scaleBannerVideoSize('.hero-video-banner video');
              } else {
                  $('.homepage-hero-module').removeAttr('style');
              }
          });
    });

        function insertVideoElement() {
               var  videoEl = '<video autoplay="" loop="" class="fillWidth visible-md visible-lg">' 
                   + '<source src="build/assets/videos/snowfall/snowfall.mp4" type="video/mp4">'
                   + 'Your browser does not support the video tag. I suggest you upgrade your browser.</video>';
               $('.hero-video-banner').html(videoEl);
        }
        
        function scaleVideoContainer() {
            var height = $(window).height(),
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
               // windowHeight = $(window).height() + 5 + $('.brand-header').height(),
            windowHeight = $(window).height(),
            videoWidth,
                videoHeight;
            // console.log(windowHeight);
            $(element).each(function() {
                var videoAspectRatio = $(this).data('height') / $(this).data('width');
                $(this).width(windowWidth);
                $('.homepage-hero-module').css('height', $(this).height());
/*                if (windowWidth < 1000) {
                    videoHeight = windowHeight;
                    videoWidth = videoHeight / videoAspectRatio;
                    $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});
                    $(this).width(videoWidth).height(videoHeight);
                }*/

                $('.homepage-hero-module video').addClass('fadeIn animated');
            });
        }