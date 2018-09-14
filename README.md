# KIT Locker
Light and easy way to prevent browser window from scrolling

### Demo
:tada: - https://natteke.github.io/kit/locker/demos/

## Installation
### CSS
```HTML
<link rel="stylesheet" href="/styles/kit.locker.min.css">
```
### JS
```HTML
<script src="/js/kit.locker.js"></script>
```
#### Initiation
```javascript
kit.locker.createLocker();
```

Or with callbacks

```javascript
function lockHandler(){
 console.log("Page locked!")
};

kit.locker.createLocker({
    onLock: lockHandler
});
```
#### Activate or deactivate

```javascript
kit.locker.lock();
kit.locker.unlock();
```

### Note
If window have **no scroll** (means that content's height less than window's height), then there is nothing to block, so plugin will not block anything and no callbacks will be fired.

Full guide could be found here:
https://natteke.github.io/kit/locker/docs/

### Licence
The code and the documentation are released under the MIT License.

