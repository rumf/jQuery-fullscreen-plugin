#jQuery Simple Fullscreen Plugin

@author Max Schukin
@version 1.2

##How to use:

You can activate fullscreen mode for the whole page:
- `$.fullScreen()` - check *[Full Screen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode)* support
- `$.fullScreen("enable")` - enable fullscreen
- `$.fullScreen("disable")` - disable fullscreen
- `$.fullScreen("toggle")` - toggle fullscreen
- `$.fullScreen("state")` - (string) 'fullscreen' / 'normal'

Or you can use fullscreen for a single HTML element:
- `$("#videoPlayer").fullScreen()`
- `$("#videoPlayer").fullScreen("enable")`
- `$("#videoPlayer").fullScreen("disable")`
- `$("#videoPlayer").fullScreen("toggle")`
- `$("#videoPlayer").fullScreen("state")`

##Examples:

```javascript
if (!$.fullScreen()) {
    alert("Your browser does not support Full Screen API");
};
```

```javascript
if (!$.fullScreen("enable")) {
    alert("Your browser does not support Full Screen API");
};
```

```javascript
if ($.fullScreen("state") == 'fullscreen') {
    alert("You are in fullscreen mode");
};
```

```javascript
if (!$('#videoPlayer').fullScreen("enable")) {
    alert("Your browser does not support Full Screen API");
};
```

##Demo:
*[jQuery Simple Fullscreen demo](http://rumf.github.com/jQuery-fullscreen-plugin/)*
