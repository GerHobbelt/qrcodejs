# QRCode.js

QRCode.js is javascript library for making QRCode.

QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM. QRCode.js has no dependencies.

This is a fork of https://github.com/davidshimjs/qrcodejs

In this version, I have added the following features:

- `blockRatio` to change the size of the block. It takes a value between 0 and 1. It's probably not a good idea to use a value smaller than 0.3.
- `cover` is a URL pointing to an image. This image should be the same size as the QR code.
- `overlayOptions` contain the same thing as other options. Because a second layer is drawn on top of the cover image, you can configure additional options here.

Fork of <https://github.com/davidshimjs/qrcodejs>.

* ~Removed SVG and table drawer.~
* Added `margin` option. (normally, if you save the QR code
image on your phone and if the background color of the photo
viewer on the Android phone is also black, then the QR code
can not be scanned; adding a white margin fixes this problem)

Needs IE 9+.

## Basic Usage


One way to use QRCode.js is by declaring a div into which the data will be generated.

    <div id="qrcode"></div>
    <script type="text/javascript">
    new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
    </script>

Options may also be specified as a JSON object in the constructor function:

```
<div id="qrcode"></div>
<script type="text/javascript">
var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "http://raventech.com/",
	cover: "http://raventech.com/public/images/flow_logo.1b0d6d39.png"
	width: 280,
	height: 280,
	colorDark:    "#000000",
	colorLight:   "#ffffff",
	correctLevel: QRCode.CorrectLevel.H,
	margin:       0,
	overlayOptions: {
		blockRatio: 0.4,
	}
});
</script>
```

and given the `qrcode` object you can use methods like `makeCode()` and `clear()` to modify existing code.

```
qrcode.clear(); // clear the code.
qrcode.makeCode("http://naver.com"); // make another code.
```

## Browser Compatibility

IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License

MIT License

## Contact
- twitter @davidshimjs
- twitter @icedwater for documentation
