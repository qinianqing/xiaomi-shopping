/*
* 获取当前对象属性的兼容方法
*
* */
function getAttrValue(element, attr) {
    return element.currentStyle ? element.currentStyle[attr] :
    window.getComputedStyle(element, null)[attr];
}
//缓动动画（多对象，多属性同时发生）
function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            if (attr=="opacity") {
                var current = getAttrValue(element, attr) * 100;
                var target = json[attr] * 100;
                var step = (target - current) / 10;//获取不断减缓的步数
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//判断是否有小数，如果有，正数向上取整，负数向下取整
                current += step;
                element.style[attr] = current / 100;

              //  console.log("target:" + target + "step:" + step + "current:" + current);
            } else if (attr=="zIndex") {
                element.style[attr] = json[attr];
            } else {
                var current = parseInt(getAttrValue(element, attr) || 0);//获取当前位置
                var target = json[attr];//获取目标位置
                var step = (target - current) / 10;//获取不断减缓的步数
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//判断是否有小数，如果有，正数向上取整，负数向下取整
                current += step;
                element.style[attr] = current + "px";
                //console.log("target:" + target + "step:" + step + "current:" + current);
            }
            if (current != target) {//判断目标位置和当前位置是否一致
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);
            if (fn) {//判断用户有没有传入回调函数
                fn();//传入则执行这个回调函数
            }
        }
    }, 10);
}