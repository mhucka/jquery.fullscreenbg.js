jquery.fullscreenbg.js
======================

A lightweight plugin for jQuery to provide auto-resized, full-screen or
full-width background image

----

*Author*: Michael Hucka (http://www.cds.caltech.edu/~mhucka) based on code
by Jan Schneiders (http://nanotux.com).  See the bottom of this file for
more information.

*License*:       This file is in the public domain.

*Repository*:    https://github.com/mhucka/jquery.fullscreenbg.js
 
*Dependencies*: This relies on jQuery and the jQuery plugin
"imagesLoaded.js" (commit ff65027665) from
https://github.com/desandro/imagesloaded (2012-02-01).

Usage
-----

This looks for an element with a specific id (default: `#bgimg`).  It
checks that it's an `<img>` element, and if it is, it resizes the image to
the current size of the window.  (Optionally, it will only resize the width
of the image, if the `<img>` element contains the attribute `widthOnly`.)
It binds the resizing function to the "resize" operation so that the image
is continually resized as the user resizes the window.

To avoid the image blinking when the page is first loaded, make sure to set
the image visibility to `hidden` in the CSS style.  This code will
automatically reset visibility to `visible` when the image is loaded and
rescaled.  (See step #5 below.)

~~~~~javascript
$.getScript('js/jquery.imagesloaded.js', function() {
  $.getScript('js/jquery.fullscreenbg.js', function() {
    jQuery.fn.fullscreenbg({ bgID: '#bgimg' });
  });
});
~~~~~

Here is an example of loading this plugin:

1. Download the jquery.imagesload.js plugin and put it in a directory where
   you put Javascript files in your site.  The rest of these instructions
   assume that your Javascript files are located in a subdirectory named "js"
   in the root directory of your site.  Also store this file
   (jquery.fullscreenbg.js) in that same directory.

2. Create a Javascript file that will serve to load other Javascript files
   for your web pages.  The rest of these instructions assume that this file
   is named "main.js".  Put the following code in it:
~~~~~javascript
$.getScript('js/jquery.imagesloaded.js', function() {
  $.getScript('js/jquery.fullscreenbg.js', function() {
    jQuery.fn.fullscreenbg({ bgID: '#bgimg' });
  });
});
~~~~~

3. In the HTML file for the page that will contain the background image, put
   the following in the `<head>` element:
~~~~~HTML
<script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
~~~~~

4. In that same HTML file, put an `<img>` element after your `<body>`
   element that refers to the image you want on the background, and has the
   id `#bgimg`.  Example:
~~~~~HTML
DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
  <script src="js/main.js" type="text/javascript"></script>
</head>
<body>
<img id="bgimg" src="media/images/index-bg.jpg">
  ... rest of page ...
~~~~~

5. In your CSS file (in this example called "css/style.css"), include the
   following to define `#bgimg` with `position: absolute` and `visibility:
   hidden` as discussed above.
~~~~~CSS
#bgimg {
  position: absolute;
  z-index:  -1;
  visibility: hidden;
}
body {
  overflow: hidden; /* Eliminates scrollbars caused by the bkgnd image. */
  position: absolute;
  padding: 0;
  margin: 0;        /* Necessary for the raster to fill the screen. */
  height: 100%;
  width: 100%;
}
~~~~~
If the image should only be scaled to the full width of the browser window,
rather than fitted in both dimensions, add the attribute `widthOnly` to the
`<img>` element.  Example:
~~~~~HTML
<img id="bgimg" widthOnly src="another-image.jpg">
~~~~~
If for some reason you want to use a different identifier than `#bgimg`, change
the value set for `bgID` in the code shown in step #2 above.


History and acknowledgments
---------------------------

The method and the original code are based on "Fullscreenr - lightweight full
screen background jquery plugin" by Jan Schneiders, version 1.0, obtained
from the web page http://nanotux.com/blog/fullscreen/ in late 2011.  I could
find no distribution statement or copyright associated with the file or on
the web page (last checked: 2012-04-06).  The original downloaded file had a
modification date of Nov. 28, 2009.  I've modified the code sufficiently that
the original author might not appreciate having this called by the same name,
hence the renamed file.
