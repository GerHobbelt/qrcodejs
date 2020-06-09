1.0.1-1 / 2018-01-30
====================

  * Merge pull request [#63](https://github.com/davidshimjs/qrcodejs/issues/63) from markvantilburg/patch-1
    Update README.md
  * Update README.md
    Made the 2nd sample match the first sample.
  * Merge pull request [#50](https://github.com/davidshimjs/qrcodejs/issues/50) from TriAnMan/remove-jquery-dep
    Remove unneeded jquery dependency
  * Merge pull request [#44](https://github.com/davidshimjs/qrcodejs/issues/44) from ysangkok/patch-1
    Swap col and row in SVG output so that the display equals the PNG output
  * Merge pull request [#43](https://github.com/davidshimjs/qrcodejs/issues/43) from teambition/master
    fix the error format of bower.json
  * Merge pull request [#39](https://github.com/davidshimjs/qrcodejs/issues/39) from pirosikick/master
    Fixed syntax error in bower.json
  * Remove unneeded jquery dependency
  * Merge pull request [#46](https://github.com/davidshimjs/qrcodejs/issues/46) from tptee/master
    Fixes invalid bower.json
  * Fixed another comma
  * Fixed invalid bower.json
  * Swap col and row in SVG output so that the display equals the PNG output
  * fix the error format of bower.json
  * Fixed syntax error in bower.json
  * Merge pull request [#38](https://github.com/davidshimjs/qrcodejs/issues/38) from dwilkie/add_bower
    add bower.json
  * Merge pull request [#25](https://github.com/davidshimjs/qrcodejs/issues/25) from ghigo/master
    Fix to allow closure compile pass
  * Merge pull request [#24](https://github.com/davidshimjs/qrcodejs/issues/24) from sembrestels/background-svg
    Added support for lightColor in SVG QR codes
  * Merge pull request [#23](https://github.com/davidshimjs/qrcodejs/issues/23) from sembrestels/svg-html
    Added support for SVG QR codes into HTML.
  * add author, homepage and description to bower.js
  * add bower.json
  * Merge pull request [#20](https://github.com/davidshimjs/qrcodejs/issues/20) from lukem512/patch-1
    Added alt tag
  * Fix to allow closure compile pass
    Minor fixes to allow closure compile
  * Added support for lightColor in SVG QR codes
  * Added support for SVG QR codes into HTML.
  * Added alt tag
    This now conforms to standards complience
  * Merge pull request [#16](https://github.com/davidshimjs/qrcodejs/issues/16) from bitdeli-chef/master
    Add a Bitdeli Badge to README
  * Add a Bitdeli badge to README
  * Merge pull request [#12](https://github.com/davidshimjs/qrcodejs/issues/12) from taku0/unicode_corruption_bug
    Fixed Unicode corruption bug
  * Fixed Unicode corruption bug
  * Minified with uglifyjs
  * [[#6](https://github.com/davidshimjs/qrcodejs/issues/6)] Add to support UTF-8 Characters
  * Merge pull request [#5](https://github.com/davidshimjs/qrcodejs/issues/5) from ysangkok/master
    Add SVG support
  * Merge pull request [#4](https://github.com/davidshimjs/qrcodejs/issues/4) from EvanHahn/patch1
    Add gitignore and ignore Aptana projects
  * add SVG support
  * Add gitignore and ignore Aptana projects
  * Minified qrcode.js with uglifyjs
  * Merge pull request [#3](https://github.com/davidshimjs/qrcodejs/issues/3) from qthru/master
    It works. Thank you @davidcl64
  * Store off reference to this for use with callbacks
    Had forgotten to save of reference to this so that callbacks would have
    a reference to the original instance.
  * Revert "Store off reference to this for use with callbacks"
    This reverts commit 95b47b9a19afe6e117aab1a26b9416f9713d6150.
  * Store off reference to this for use with callbacks
    In _safeSetDataURI forgot to save off reference to this so callbacks
    could keep a reference to the original this.
  * Scoped all variables to object instance to allow multiple QR Codes
    Fixes [#2](https://github.com/davidshimjs/qrcodejs/issues/2)
    Previously, private variables were trapped by the outer function
    closure that returns the Drawing constructor.
    I removed these declarations and scoped them to the object instance.
    This has the side affect of making them public.  If that is
    undesirable, the code can be refactored further to keep these private.
    I haven't fully tested all codepaths (table based drawing, android
    specific logic), so more regression should probably be done before
    merging this in to your codebase.
  * Android 2.x doesn't support Data-URI
  * Adds Comment about Browser Compatibility
  * Edit layout
  * modified CorrectLevel name
  * Add minified file with uglifyJS
  * init project

Author: Ger Hobbelt <ger@hobbelt.com>
Date:   Tue Jan 30 01:19:44 2018 +0100

  * add `npm` `pub` script task for publishing the library
  * bumped build revision & made this a SCOPED NPM PACKAGE so we can easily track & manage our clone/fork releases.
  * Merge commit '452cee910f536510007c12c355f566673a82a341'
  * extend merged functionality: always invoke a `success` or `error` user callback (specified in the options) when rendering a QRCode: the `error` callback is invoked to signal there's no DATA URL / image produced, because all QRCodes are generated successfully in any other sense or the code would have thrown an exception!
  * invoked the `success` callback under all circumstances when no `error` callback has been provided.
  * added the `hasImageSupport()` API to check if there's support for image data URIs: using this function allows userland code to act in step with the QRCode library behaviour.
  * Merge remote-tracking branch 'remotes/JackZhang1988/master'
  * code cleanup and some refactoring + completion: now SVG and CANVAS renderers both support all options, including the new introduced ones which serve to replace the many CANVAS-specific APIs, e.g. `drawBlackOnly`.
  * add the `useTABLE` override option, similar to `useSVG`. Default renderer choice is still the same: use SVG when referencing a SVG target node, use CANVAS when available, use TABLE as fallback when nothing else goes. `useSVG` is a force flag which instructs the lib to use the SVG renderer no matter what (and thus inject an SVG node/DOM tree as child of the referenced element), `useTABLE` is another force flag which essentially DISABLES the CANVAS renderer. Hence `useSVG` will have precedence over `useTABLE` when both these options are set.
  * TABLE renderer has been adjusted and corrected for observed browser quirks: do note that the generated QRcode (rendered as HTML TABLE) MAY not be exactly visually square due to browser quirks which cannot be fixed. (Chrome behaves a little odd, for example, though output is always ALMOST square at least!)
  * augment the sample page (docs/index.html) to include the new flags
  * removed many canvas-specific APIs which are now supported through new options: noSmoothing, removeAntiAliasing, drawOnlyDark. Only the offline render APIs are not yet covered by additional options: this functionality is now removed/obsoleted.
  * added checks for NodeJS on Windows, which MAY NOT load/have properly installed the 'canvas' module: when executed in a NodeJS environment, this should not cause QRCode to fail dramatically. The SVG and TABLE render methods will still be available in such a limited environment anyway.
  * Merge branch 'gh-pages' into mix-in
  * clean up and fix the canvas rendering code: now we properly render each QR dot, anti-aliased by default due to NOT rounding the pixel size calculations: this also produces a much more legible/decodable QR code image for any display resolution, particularly at small sizes or sizes which are not a multiple of the QR modulus (QR pixel count)
  * `border` and `margin` options now both are in QR pixel units: '1' means the same size as 1 QR barcode pixel. (`border` already had this property; it's `margin` that got changed)
  * `border` and `margin` are now both accounted for: the total margin rendered around the QR barcode is `margin + border`. Negative values are accepted, but MAY render illegible QR codes: YMMV!
  * still some drawing APIs are TODO following this cleanup & code deduplication activity.
  * move index-svg.html to same directory as index.html demo page: docs/...
  * manually complete merge of commit SHA-1: 79b2df8d74c734f4451143619ab2e8bf6e485af3
  * fix bug introduced in this merge/cherry-pick:
    
    > 7393c599c1f56353f48d1ff877d9e403f2a77db3 is the first bad commit
    > commit 7393c599c1f56353f48d1ff877d9e403f2a77db3
    > Author: Angela Wang <angelawang@raventech.com>
    > Date:   Fri Jun 3 14:32:14 2016 +0800
  * correct for merge
  * Merge branch 'beautified' into mix-in
  * Merge remote-tracking branch 'remotes/daamazing1/master' into mix-in
  * Merge remote-tracking branch 'remotes/KeeeX/master' into mix-in
  * Merge remote-tracking branch 'remotes/liu-ning/master' into mix-in
  * Merge remote-tracking branch 'remotes/aasdkl/master' into mix-in
  * Merge remote-tracking branch 'remotes/zaihui/master' into mix-in
  * Merge remote-tracking branch 'remotes/icedwater/master' into mix-in
  * Merge remote-tracking branch 'remotes/sesche/master' into mix-in
  * Merge remote-tracking branch 'remotes/houxinjie/master' into mix-in
  * remove test code
  * update authors and readme
  * remove _bIsPainted and add option to draw cover image
  * add `blockRatio` option
  * Merge remote-tracking branch 'remotes/hammerandchisel/master' into mix-in
  * Prevent double render with react
  * Merge remote-tracking branch 'remotes/imyelo/bug' into mix-in
  * Merge remote-tracking branch 'remotes/robert-denney/length_bug' into mix-in
  * Merge remote-tracking branch 'remotes/lintry/develop' into beautified
  * Merge remote-tracking branch 'remotes/Pol7/gh-pages' into gh-pages
  * Merge remote-tracking branch 'remotes/nullboundary/master' into mix-in
  * fix for 'strict mode'
  * aded use strict and fix use strict bugs
  * Added class name to output img
    
    useful to have a class name on the output image to manipulate the image with css
  * Merge remote-tracking branch 'remotes/oat-sa/master' into mix-in
  * fix a merge mistake which caused canvas support detection to become broken + augmented demo HTML page to test all options and show both canvas and image rendered output.
  * Merge remote-tracking branch 'remotes/GaiaMagic/gh-pages' into mix-in
  * Merge remote-tracking branch 'remotes/piratefsh/master' into mix-in
  * Merge remote-tracking branch 'remotes/nosrevi/border' into mix-in
  * Merge remote-tracking branch 'remotes/aldomendez/master' into mix-in
  * Merge remote-tracking branch 'remotes/beeleelee/master' into mix-in
  * Merge remote-tracking branch 'remotes/TriAnMan/master' into mix-in
  * Merge remote-tracking branch 'remotes/MeasureChina/master' into mix-in
  * Merge remote-tracking branch 'remotes/mgcrea/master' into beautified
  * Merge remote-tracking branch 'remotes/mackers/master' into mix-in
  * Merge remote-tracking branch 'remotes/koreinnovations/custom-title-tag' into mix-in
  * Merge remote-tracking branch 'remotes/mpierre/master' into mix-in
  * Merge remote-tracking branch 'remotes/mayosmith/master' into mix-in
  * reformat QRModel et al to produce readable code from the minified chunks in the source.
  * remove minified version from repo: everyone minifies using their own workflow anyway and this can only lag behind.
  * Merge remote-tracking branch 'remotes/martin-naumann/master'
  * add qrcode data url render callback
    
    QRCode data render async, so we need a callback function to notice the QRCode had rendered
  * enhancement: allow for window context to bypass IE blocking createElement from different window
  * Updated README.md
  * Fixed Code Length Overflow Error
  * Update index.html
  * fix getUTF8Length  always add 3 length
  * update qrcode.clear() method and it can be used when `useSVG=false`
  * add the `useSVG` in options and update the README.md
  * fix error
  * fix bug in strict mode, add node mudule support
  * Set default complexity to M and dimensions to 160px.
  * Update index.html
  * Added missing tag: `</html>`
  * notaddtitle
  * remove test code
  * remove unnecessary files
  * update package.json and bower.json
  * format code
  * Merge pull request #1 from TheSisb/master
  * Prevent double render with react
  * importable
  * Allows to switch drawer by `useSVG`.
  * Fixed a context bug


?1.0.0?
=======

  * Merge pull request #63 from markvantilburg/patch-1
  * Update README.md
  * Merge pull request #67 from coolaj86/patch-1
  * fixed broken script link
  * When data is too long, it was attempting to access QRCodeLimitLength[40][3].
  * Create gh-pages branch via GitHub
  * add class and targetImage in options
  * add jquery plugin for qrcode
  * fixed broken script link
  * The current demo doesn't work at https://davidshimjs.github.io/qrcodejs/ because there is a broken link to the codepen.io javascript.
  * http:// -> https:// fixes broken link to https://codepen.io/assets/embed/ei.js
  * Update README.md
  * Made the 2nd sample match the first sample.
  * Merge pull request #50 from TriAnMan/remove-jquery-dep
  * Remove unneeded jquery dependency
  * Merge pull request #44 from ysangkok/patch-1
  * Swap col and row in SVG output so that the display equals the PNG output
  * Merge pull request #43 from teambition/master
  * fix the error format of bower.json
  * Merge pull request #39 from pirosikick/master
  * Fixed syntax error in bower.json
  * aded use strict and fix use strict bugs
  * Delete jquery.min.js
  * Delete qrcode.min.js
  * Added class name to output img
    
    useful to have a class name on the output image to manipulate the image with css
  * Amdify
  * add correction control
  * add more options for index.html
  * add margin option
  * move jquery to vendor
  * Throw error if makeCode() isn't passed a param
  * Remove debug statement
  * Added quiet zone / border option
  * Update README.md
  * Removed tracker
  * check if it's own property
  * make qrcode available by use node canvas
  * Merge branch 'fix-svg-mirroring'
  * Fix SVG render mirroring
  * Remove unneeded jquery dependency
  * Merge pull request #46 from tptee/master
  * Fixes invalid bower.json
  * Fixed another comma
  * Fixed invalid bower.json
  * Swap col and row in SVG output so that the display equals the PNG output
  * fix the error format of bower.json
  * Fixed syntax error in bower.json
  * Merge pull request #38 from dwilkie/add_bower
  * add bower.json
  * Merge pull request #25 from ghigo/master
  * Fix to allow closure compile pass
  * Merge pull request #24 from sembrestels/background-svg
  * Added support for lightColor in SVG QR codes
  * Merge pull request #23 from sembrestels/svg-html
  * Added support for SVG QR codes into HTML.
  * add author, homepage and description to bower.js
  * add bower.json
  * remove coment
  * add support - commonjs and requirejs
  * Merge pull request #1 from mackers/svg-html
  * Added support for SVG QR codes into HTML.
  * allow for custom title tags
  * Added package.json
  * Added bower config
  * Merge pull request #20 from lukem512/patch-1
  * Added alt tag
  * Fix to allow closure compile pass
  * Minor fixes to allow closure compile
  * Added support for lightColor in SVG QR codes
  * Added support for SVG QR codes into HTML.
  * Added alt tag
    
    This now conforms to standards complience
  * chore(jshint): use strict equality checks
  * feat(merge): merge optimizations from davidcl64
  * chore(indent): convert to spaces
  * block to inline QR display
  * Merge pull request #16 from bitdeli-chef/master
  * Add a Bitdeli Badge to README
  * First basic cleanup of readme to make it standard markdown, not just for github.
  * Merge pull request #12 from taku0/unicode_corruption_bug
  * Fixed Unicode corruption bug
  * Changes to recent scripts
  * [#6] Add to support UTF-8 Characters
  * Merge pull request #5 from ysangkok/master
  * Add SVG support
  * Merge pull request #4 from EvanHahn/patch1
  * Add gitignore and ignore Aptana projects
  * Removed bogus ',' in package.json


?0.0.1?
=======

  * Bumped version number to 0.0.1
  * Adding a package.json to make this a npm module
  * Add gitignore and ignore Aptana projects

    Adopt a pull request #3 from qthru/master

    Merge pull request #3 from qthru/master
    
    It works. Thank you @davidcl64

    Store off reference to this for use with callbacks
    
    Had forgotten to save of reference to this so that callbacks would have
    a reference to the original instance.

    Revert "Store off reference to this for use with callbacks"
    
    This reverts commit 95b47b9a19afe6e117aab1a26b9416f9713d6150.

    Store off reference to this for use with callbacks
    
    In _safeSetDataURI forgot to save off reference to this so callbacks
    could keep a reference to the original this.

    Scoped all variables to object instance to allow multiple QR Codes
    
    Fixes #2
    
    Previously, private variables were trapped by the outer function
    closure that returns the Drawing constructor.
    
    I removed these declarations and scoped them to the object instance.
    This has the side affect of making them public.  If that is
    undesirable, the code can be refactored further to keep these private.
    
    I haven't fully tested all codepaths (table based drawing, android
    specific logic), so more regression should probably be done before
    merging this in to your codebase.

    Android 2.x doesn't support Data-URI

    Adds Comment about Browser Compatibility

    Add Sample code

    Add Library files

    Add google analytics script

    Create gh-pages branch via GitHub

    Edit layout

    modified CorrectLevel name

    Add minified file with uglifyJS

    init project
