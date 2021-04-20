mini-number-counter
========
## 关于
[mini-number-counter](https://www.npmjs.com/package/mini-number-counter)
是一个适用于小程序的数字滚动效果的插件。

## 使用说明
```bash
npm install mini-number-counter --save
```

```javascript
import numberCounter from 'mini-number-counter';

Page({
  data: {
    num: 0,
  },
  onLoad: function () {
    const num_obj = new numberCounter({
      from: 12.45,
      target: 38.88,
      speed: 1500,
      refreshTime: 100,
      decimals: 2,
      onUpdate:() => {
        this.setData({
          num: num_obj.temp,
        });
      },
      onComplete: function() {},
    });
  },
})
```
## License

Releasing under the <b>MIT License</b>.
