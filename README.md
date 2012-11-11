#jQuery Simple Fullscreen Plugin

@author Max Schukin
@version 1.0

##How to use:

- `$.fullScreen()` - check *[Full Screen API](https://developer.mozilla.org/en/DOM/Using_full-screen_mode)* support
- `$.fullScreen("enable")` - enable fullscreen
- `$.fullScreen("disable")` - disable fullscreen
- `$.fullScreen("toggle")` - toggle fullscreen
- `$.fullScreen("state")` - (string) 'fullscreen' / 'normal'

##Example

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