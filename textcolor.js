/**
 * Return dark or light color according to the current hex.
 * Author: A mile
 * 
 * @since 1.1.0
 * @param {string} hex current hex.
 * @returns {string} Return dark or light.
 * @example
 * 
 * findTextColor(rgb(255, 255, 255))
 * // => black
 * 
 * findTextColor('#000')
 * // => white
 */
(function() {
    var root = this;

    var TEXTColor = function(obj) {
        if(obj instanceof TEXTColor) return obj;
        if(!(this instanceof TEXTColor)) return new TEXTColor(obj);
    }

    if(typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = TEXTColor;
        }
        exports.TEXTColor = TEXTColor;
    } else {
        root.TEXTColor = TEXTColor;
    }

    function resBgColor(rgbArr) {
        var color = 0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2;
        return color? '#000000': '#ffffff'
    };

    TEXTColor.findTextColor = function findTextColor(colorValue) {
        // #123456或者rgb(12,34,56)转为rgb数组[12,34,56]
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var that = colorValue;
        if (/^(rgb|RGB)/.test(that)) {
            // 处理rgb转为数组
            var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            return resBgColor(aColor);
        } else if (reg.test(that)) {
            // 处理十六进制色值
            var sColor = colorValue.toLowerCase();
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            // 处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return resBgColor(sColorChange);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    if (typeof define === 'function' && define.amd) {
        define('color-js' ,[], function() {
            return TEXTColor;
        });
    }
})();