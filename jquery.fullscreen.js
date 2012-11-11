/**
* @name jQuery Simple Fullscreen Plugin
* @author Max Schukin
* @version 1.1
* @url https://github.com/rumf/jQuery-fullscreen-plugin/
* @license MIT License
*/
;(function($, document) {
    var methods = {
        enable: function() {
            this.setFullScreen();
            return true;
        },
        disable: function() {
            this.cancelFullScreen();
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
    }

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

        setFullScreen: function() {
            this.fullscreenFunc.call(this.element);
        },

        cancelFullScreen: function() {
            this.cancelFunc.call(document);
        },

        toggleFullScreen: function() {
            if (this.getState()) {
                this.cancelFullScreen();
            } else {
                this.setFullScreen();
            }
        }
    }

    $.fullScreen = $.fn.fullScreen = function(method) {
        var element;

        if (typeof this !== 'object' || this == document) {
            element = document.documentElement;
        } else {
            element = this[0];
        }
        var plugin = $(element).data('plugin_fullScreen');

        if (!plugin) {
            plugin = new FullScreen(element);
            $(element).data('plugin_fullScreen', plugin);
        }

        if (method && plugin.supported) {
            if (methods[method]) {
                return methods[method].call(plugin);
            }
        } else {
            return plugin.supported;
        }
    }

})(jQuery, document);