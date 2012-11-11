/**
* @name jQuery Simple Fullscreen Plugin
* @author Max Schukin
* @version 1.1
* @url https://github.com/rumf/jQuery-fullscreen-plugin/
* @license MIT License
*/
(function(a,b){function d(a){return this.init(a)}var c={enable:function(){return this.setFullScreen(),!0},disable:function(){return this.cancelFullScreen(),!0},toggle:function(){return this.toggleFullScreen(),!0},state:function(){return this.getState()?"fullscreen":"normal"}};d.prototype={init:function(a){return this.element=a,this.cancelFunc=b.cancelFullScreen||b.webkitCancelFullScreen||b.mozCancelFullScreen,this.cancelFunc?(this.supported=!0,this.fullscreenFunc=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen):this.supported=!1,this.supported},getState:function(){return b.fullScreen||b.webkitIsFullScreen||b.mozFullScreen},setFullScreen:function(){this.fullscreenFunc.call(this.element)},cancelFullScreen:function(){this.cancelFunc.call(b)},toggleFullScreen:function(){this.getState()?this.cancelFullScreen():this.setFullScreen()}},a.fullScreen=a.fn.fullScreen=function(e){var f;f=typeof this!="object"||this==b?b.documentElement:this[0];var g=a(f).data("plugin_fullScreen");return g||(g=new d(f),a(f).data("plugin_fullScreen",g)),e&&g.supported?c[e]?c[e].call(g):void 0:g.supported}})(jQuery,document)