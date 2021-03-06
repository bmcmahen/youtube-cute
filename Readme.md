
# youtube-cute

  A nicer way to embed youtube videos. Very much inspired by [PrettyEmbed.js](https://github.com/mike-zarandona/PrettyEmbed.js), but I
wanted something that worked without jQuery. It uses [bmcmahen/youtube](https://github.com/bmcmahen/youtube) for video playback.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/youtube-cute

## Example

Check `example.html`. 

```javascript
var YoutubeCute = require('youtube-cute');
var el = document.getElementById('target');
var prettyVid = new YoutubeCute('https://www.youtube.com/watch?v=tmocu3lmxr8', target);
```


## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.