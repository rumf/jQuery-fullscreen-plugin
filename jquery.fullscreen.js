/**
* @name jQuery Simple Fullscreen Plugin
* @author Max Schukin
* @version 1.2
* @url https://github.com/rumf/jQuery-fullscreen-plugin/
* @license MIT License
*/
;(function($, document) {
    'use strict';

    var methods = {
        enable: function() {
            this.fullscreenFunc.call(this.element);
            return true;
        },
        disable: function() {
            this.cancelFunc.call(document);
            return true;
        },
        toggle: function() {
            this.toggleFullScreen();
            return true;
        },
        state: function() {
            if (this.getState()) {
                return 'fullscreen';
            } else {
                return 'normal';
            }
        }
    };

    function FullScreen(element) {
        return this.init(element);
    }

    FullScreen.prototype = {
        init: function(element) {
            this.element = element;

            this.cancelFunc = document.cancelFullScreen
                || document.webkitCancelFullScreen
                || document.mozCancelFullScreen;

            if (!this.cancelFunc) {
                this.supported = false;
            } else {
                this.supported = true;

                this.fullscreenFunc = element.requestFullScreen
                    || element.webkitRequestFullScreen
                    || element.mozRequestFullScreen;
            }

            return this.supported;
        },

        getState: function() {
            return document.fullScreen
                || document.webkitIsFullScreen
                || document.mozFullScreen;
        },

        toggleFullScreen: function() {
            if (this.getState()) {
                this.cancelFunc.call(document);
            } else {
                this.fullscreenFunc.call(this.element);
            }
        }
    };

    $.fullScreen = $.fn.fullScreen = function(method) {
        var element = (typeof this !== 'object' || this == document) ? document.documentElement : this[0],
            plugin = $(element).data('pl_fullscreen');

        if (!plugin) {
            plugin = new FullScreen(element);
            $(element).data('pl_fullscreen', plugin);
        }

        if (method && plugin.supported) {
            if (methods[method]) {
                return methods[method].call(plugin);
            }
        } else {
            return plugin.supported;
        }
    };

})(jQuery, document);