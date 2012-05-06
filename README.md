jquery.fullscreenbg.js
======================

A lightweight plugin for jQuery to support an automatically-resized
full-screen or full-width background image on a web page.

----

*Author*: Michael Hucka (http://www.cds.caltech.edu/~mhucka) based on code
by Jan Schneiders (http://nanotux.com).  See the bottom of this file for
more information.

*License*:       This fullscreenbg plugin is in the public domain.

*Repository*:    https://github.com/mhucka/jquery.fullscreenbg.js
 
Requirements
------------

This needs jQuery and the jQuery plugin "imagesLoaded.js" to be loaded prior
to use.  (For "imagesLoaded.js" I use the version of commit ff65027665, date
2012-02-01, from https://github.com/desandro/imagesloaded .)  An explanation
of how to load everything is given below.

Usage
-----

This looks for an element with a specific id (default: `#bgimg`).  It checks
that it's an `<img>` element, and if it is, it resizes the image to the
current size of the window.  Optionally, it will only resize the width of the
image if the `<img>` element contains the attribute `widthOnly`.  It binds
the resizing function to the DOM "onresize" event handler so that the image
is continually resized as the user resizes the window.

Note: to avoid the image blinking when the page is first loaded, make sure to
*set the image visibility to `hidden` in the CSS style*.  This code will
automatically reset visibility to `visible` when the image is actually loaded
and rescaled.  (See step #5 below.)

Here is an example of using this plugin in a web page:

*1*\. Place the file "jquery.fullscreenbg.min.js" in a directory where you put
other Javascript files for your web pages.  The rest of these instructions
assume that your Javascript files are located in a subdirectory named "js" in
the root directory of your site.  

*2*\. If you have not already done so, download the "imagesLoaded.js" jQuery
plugin and place it in your "js" directory.  (See
https://github.com/desandro/imagesloaded for the code.)

*3*\. (Optional) Create a Javascript file that will serve to load all the other
Javascript files for your web pages.  The rest of these instructions assume
that this file is named "main.js".  Put the following code in "main.js":

~~~~~javascript
$.getScript('js/jquery.imagesloaded.js', function() {
  $.getScript('js/jquery.fullscreenbg.min.js', function() {
    jQuery.fn.fullscreenbg({ bgID: '#bgimg' });
  });
});
~~~~~

*4*\. In the HTML file for each page that will contain the background image,
put the following in the `<head>` element (again, assuming that you are using
the "main.js" approach and all your JavaScript files are in a directory named
"js"):

~~~~~HTML
<script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
~~~~~

*5*\. In that same HTML file, put an `<img>` element after your `<body>`
element that refers to the image you want on the background, and has the id
`#bgimg`.  Example:

~~~~~HTML
DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
  <script src="js/main.js" type="text/javascript"></script>
</head>
<body>
<img id="bgimg" src="my-background-image.jpg">
  ... rest of page ...
~~~~~

If the image should only be scaled to the full width of the browser window,
rather than fitted in both dimensions, add the attribute `widthOnly` to the
`<img>` element.  Example:

~~~~~HTML
<img id="bgimg"src="another-image.jpg" widthOnly>
~~~~~

*6*\. In your CSS file (in this example called "css/style.css"), include the
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

If for some reason you want to use a different image identifier than
`#bgimg`, then change the value set for `bgID` in the code shown in step #2,
change the value of the `<img>` element's `id` in step #5, and change the CSS
identifier `#bgimg` in step 6.


History and acknowledgments
---------------------------

The method and the original code are based on "Fullscreenr - lightweight full
screen background jquery plugin" by Jan Schneiders, version 1.0, obtained
from the web page http://nanotux.com/blog/fullscreen/ in late 2011.  I could
find no distribution statement, copyright or even an email address associated
with the file or on the web page (last checked: 2012-04-06).  The original
downloaded file had a modification date of Nov. 28, 2009.  I've modified the
code sufficiently that the original author might not appreciate having this
called by the same name, hence the renamed file.

I generated the minified version of jquery.fullscreenbg.js using JSMin.

Contributing
------------

I welcome improvements of all kinds, to the code and to the documentation.
Please feel free to contact me or do the following:

1. Fork this repo.  See the links at the top of the github page.
2. Create your feature branch (`git checkout -b my-new-feature`) and write
your changes to the code or documentation.
3. Commit your changes (`git commit -am 'Describe your changes here'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create a new pull request to notify me of your suggested changes.

License
-------

This code is in the public domain.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
