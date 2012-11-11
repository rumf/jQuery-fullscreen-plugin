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

    function FullScreen() {
        return this.init();
    }

    FullScreen.prototype = {
        init: function() {
            var docElement = document.documentElement;

            this.cancelFunc = document["cancelFullScreen"]
                || document["webkitCancelFullScreen"]
                || document["mozCancelFullScreen"];

            if (!this.cancelFunc) {
                this.supported = false;
            } else {
                this.supported = true;

                this.fullscreenFunc = docElement["requestFullScreen"]
                    || docElement["webkitRequestFullScreen"]
                    || docElement["mozRequestFullScreen"];
            }

            return this.supported;
        },

        getState: function() {
            return document.fullScreen
                || document.webkitIsFullScreen
                || document.mozFullScreen;
        },

        setFullScreen: function() {
            this.fullscreenFunc.call(document.documentElement);
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

    $.fullScreen = function(method) {
        var plugin = $(document).data('plugin_fullScreen');

        if (!plugin) {
            plugin = new FullScreen();
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