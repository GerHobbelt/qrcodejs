serve:
	python -m SimpleHTTPServer

install-uglifyjs:
	npm install uglify-js -g

uglify:
	uglifyjs qrcode.js --screw-ie8 --mangle -o qrcode.min.js
