/**
 * Created by lintry on 15/10/20.
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', 'qrcode'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'), require('qrcode'));
  } else {
    // Browser globals
    factory(jQuery, QRCode);
  }
}(function ($) {
  /**
   * 扩展QRCode在jQuery元素上的应用
   * @param options
   * @returns {$.fn.QRCode}
   * @constructor
   */
  $.fn.QRCode = function(options) {
    var qr = new QRCode(this[0], options);
    this.data('QRCoder', qr);
    return this;
  };
  /**
   * 扩展获取QRCode的对象
   * @returns {*|{}}
   * @constructor
   */
  $.fn.QRCoder = function() {
    return this.data('QRCoder') || {};
  };

}));
