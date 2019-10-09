# TEXTColor.js

根据背景色修改字体颜色

## install

通过`npm`引入
```
npm install TEXTColor-js --save
```

通过`<script>`引入
```
<script type="type/javascript" src="" ></script>
```

## 用法

参考`example`目录下的`demo.html`

引入`TEXTColor.js`后，可以根据`TEXTColor.colorRgb`方法，传入十六进制色值`hex`，返回相应的文字色值`textcolor`

为了方便更直观的察觉背景色变化对文字的影响，我在`demo.html`内引入了颜色选择器`colorpicker.js`。可以下载该案例查看背景色的改变对文字改变的影响。

### JavaScript
```
var textDom = document.getElementById('color-text');
var obj = document.getElementById("picker");
var a = Colorpicker.create({
    el: "color-picker",
    color: "#0081ff",
    change: function (elem, hex) {
        textDom.style.color = TEXTColor.colorRgb(hex);
        elem.style.backgroundColor = hex;
    }
})
```

### HTML
```
<div class="container">
    <h2>点击下方选择颜色</h2>
    <div class="picker" id="color-picker">
        <div id="color-text">文字颜色</div>
    </div>
</div>
```