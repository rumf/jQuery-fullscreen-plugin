/**
* @name jQuery Simple Fullscreen Plugin
* @author Max Schukin
* @version 1.1
* @url https://github.com/rumf/jQuery-fullscreen-plugin/
* @license MIT License
*/
(function(a,b){function d(a){return this.init(a)}var c={enable:function(){return this.s(),!0},disable:function(){return this.l(),!0},toggle:function(){return this.t(),!0},state:function(){return this.m()?"fullscreen":"normal"}};d.prototype={init:function(a){return this.element=a,this.k=b.cancelFullScreen||b.webkitCancelFullScreen||b.mozCancelFullScreen,this.k?(this.p=!0,this.x=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen):this.p=!1,this.p},m:function(){return b.fullScreen||b.webkitIsFullScreen||b.mozFullScreen},s:function(){this.x.call(this.element)},l:function(){this.k.call(b)},t:function(){this.m()?this.l():this.s()}},a.fullScreen=a.fn.fullScreen=function(e){var f;f=typeof this!="object"||this==b?b.documentElement:this[0];var g=a(f).data("plugin_fullScreen");return g||(g=new d(f),a(f).data("plugin_fullScreen",g)),e&&g.p?c[e]?c[e].call(g):void 0:g.p}})(jQuery,document)