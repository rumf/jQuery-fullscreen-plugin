/**
* @name jQuery Simple Fullscreen Plugin
* @author Max Schukin
* @version 1.2
* @url https://github.com/rumf/jQuery-fullscreen-plugin/
* @license MIT License
*/
;(function(e,t){function n(e){return this.i(e)}var l={enable:function(){return this.k.call(this.o),!0},disable:function(){return this.l.call(t),!0},toggle:function(){return this.m(),!0},state:function(){return this.n()?"fullscreen":"normal"}};n.prototype={i:function(e){return this.o=e,this.l=t.cancelFullScreen||t.webkitCancelFullScreen||t.mozCancelFullScreen,this.l?(this.p=!0,this.k=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen):this.p=!1,this.p},n:function(){return t.fullScreen||t.webkitIsFullScreen||t.mozFullScreen},m:function(){this.n()?this.l.call(t):this.k.call(this.o)}},e.fullScreen=e.fn.fullScreen=function(c){var u="object"!=typeof this||this==t?t.documentElement:this[0],r=e(u).data("pl_fullscreen");return r||(r=new n(u),e(u).data("pl_fullscreen",r)),c&&r.p?l[c]?l[c].call(r):void 0:r.p}})(jQuery,document);