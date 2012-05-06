// ============================================================================
// @file    jquery.fullscreenbg.js
// @brief   jQuery plugin for auto-resized, full-screen or full-width bg image.
// @author  Michael Hucka (mhucka@caltech.edu), Caltech
// @author  Jan Schneiders (http://nanotux.com)
//
// See http://mhucka.github.com/jquery.fullscreenbg.js/ for more information.
// 
// This file is in the public domain.
// ============================================================================

(function($) {
  $.fn.fullscreenbg = function(opts) {
    var defaults = { bgID: '#bgimg', widthOnly: false };
    var options = $.extend({}, defaults, opts); 

    // Resize image when it's first loaded.
    $(options.bgID).imagesLoaded(function($images, $proper, $broken) {
        var img = $proper[0];
        if (! img.width || ! img.height) return;
        options.width = img.width;
        options.height = img.height;
        $(options.bgID).fullscreenbgResizer(options);
    });
    $(window).bind("resize", function() { 
        $(options.bgID).fullscreenbgResizer(options); });
    return this;
  };

  $.fn.fullscreenbgResizer = function(options) {
    // Make the image visible.
    $(options.bgID)[0].style.visibility = 'visible';

    // Width-only option can be indicated in 2 ways:
    if (options.widthOnly
        || ($(options.bgID).attr('widthOnly') != null)) {
      // Get browser window size.
      var browserwidth = $(window).width();

      // Scale the image width only.
      $(this).width(browserwidth);
      $(this).css('left', (browserwidth - $(this).width())/2);
    } else {                            // Both dimensions.
      // Get browser window size.
      var browserwidth = $(window).width();
      var browserheight = $(window).height();

      // Scale the image in both dimensions.
      var ratio = options.height / options.width;
      if ((browserheight/browserwidth) > ratio) {
        $(this).height(browserheight);
        $(this).width(browserheight / ratio);
      } else {
        $(this).width(browserwidth);
        $(this).height(browserwidth * ratio);
      }

      // Center the image.
      $(this).css('left', (browserwidth - $(this).width())/2);
      $(this).css('top', (browserheight - $(this).height())/2);
    }

    return this;                
  };
 })(jQuery);
