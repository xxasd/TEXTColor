# TEXTColor.js

我把该函数封装起来了，你可以通过`npm install`或者引入`github`目录下的`textcolor.js`使用。

![效果](https://user-gold-cdn.xitu.io/2019/10/10/16db325a96df5612?w=400&h=324&f=gif&s=886534) 

## 使用场景

自定义主题色时，往往会遇到一个问题就是背景色可能会和文字的颜色重叠。

## 安装

方法一：通过`npm`引入
```
npm install textcolor --save
```

方法二：通过`<script>`引入
```
<script type="type/javascript" src="https://unpkg.com/textcolor@1.0.2/textcolor.js" ></script>
```

## 用法

```
import TEXTColor from 'textcolor-js'

let hex = '#000000';        // or '#666' or 'rgb(12,34,56)'
let textcolor = TEXTColor.findTextColor(hex);
console.log(textcolor)      // #ffffff
```

参考`example`目录下的`demo.html`

引入`TEXTColor.js`后，可以根据`TEXTColor.colorRgb`方法，传入十六进制色值`hex(如：#555、#123456)`或者`rgb(12,34,56)`使用，返回相应的文字色值`textcolor`

为了方便更直观的察觉背景色变化对文字的影响，我在`demo.html`内引入了颜色选择器`colorpicker.js`。可以下载该案例查看背景色的改变对文字改变的影响。

**JavaScript:**
```
var textDom = document.getElementById('color-text');
var obj = document.getElementById("picker");
var a = Colorpicker.create({
    el: "color-picker",
    color: "#0081ff",
    change: function (elem, hex) {
        >textDom.style.color = TEXTColor.findTextColor(hex);
        elem.style.backgroundColor = hex;
    }
})
```

**HTML:**
```
<div class="container">
    <h2>点击下方选择颜色</h2>
    <div class="picker" id="color-picker">
        <div id="color-text">文字颜色</div>
    </div>
</div>
```