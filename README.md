# catch-if.js
A catIf syntactic sugar for Javscrip promises

## Installation
```
npm i catch-if -S
```

## Usage 

### Step:1 - Monkeypatch your Promise class
```javascript
require('catch-if')(Promise);
```

### Step:2 - Use catchIf method
```javascript
Promise.reject( new TypeError() )
.catchIf( TypeError, function handler(err){ console.log('TypeError handled')} )
.catchIf( RangeError, function handler(err){ console.log('RangeError handled')} )
```

