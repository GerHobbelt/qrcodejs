# QRCode.js
QRCode.js is a JavaScript library for generating QRCode images. The result is a PNG image saved as a `base64`-encoded `data` URL.

>! It is usable across browsers and supports the HTML5 canvas as well as table in DOM. 

QRCode.js has no dependencies, but the `$('#text')` example in `index.html` uses jQuery functionality. Therefore a minified version of the jquery library, v 1.8.3, has been included here.

## Basic Usage

One way to use QRCode.js is by declaring a div into which the data will be generated.

    <div id="qrcode"></div>
    <script type="text/javascript">
    new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
    </script>

Options may also be specified as a JSON object in the constructor function:

    var qrcode = new QRCode("test", {
	    text: "http://jindo.dev.naver.com/collie",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

and given the `qrcode` object you can use methods like `makeCode()` and `clear()` to modify existing code.

    qrcode.clear(); // clear the code.
    qrcode.makeCode("http://naver.com"); // make another code.

## Browser Compatibility
IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License
MIT License

## Contact
- twitter @davidshimjs
- twitter @icedwater for documentation
