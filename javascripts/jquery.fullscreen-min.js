/**
* @name jQuery Simple Fullscreen Plugin
* @author Max Schukin
* @version 1.0
* @url https://github.com/rumf/jQuery-fullscreen-plugin/
* @license MIT License
*/
(function(a,b){function d(){return this.init()}var c={enable:function(){return this.setFullScreen(),!0},disable:function(){return this.cancelFullScreen(),!0},toggle:function(){return this.toggleFullScreen(),!0},state:function(){return this.getState()?"fullscreen":"normal"}};d.prototype={init:function(){var a=b.documentElement;return this.cancelFunc=b.cancelFullScreen||b.webkitCancelFullScreen||b.mozCancelFullScreen,this.cancelFunc?(this.supported=!0,this.fullscreenFunc=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen):this.supported=!1,this.supported},getState:function(){return b.fullScreen||b.webkitIsFullScreen||b.mozFullScreen},setFullScreen:function(){this.fullscreenFunc.call(b.documentElement)},cancelFullScreen:function(){this.cancelFunc.call(b)},toggleFullScreen:function(){this.getState()?this.cancelFullScreen():this.setFullScreen()}},a.fullScreen=function(e){var f=a(b).data("plugin_fullScreen");return f||(f=new d),e&&f.supported?c[e]?c[e].call(f):void 0:f.supported}})(jQuery,document)