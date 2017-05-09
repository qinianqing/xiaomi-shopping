/**
 * Created by Administrator on 2016/7/27.
 */
/**
 * Created by Administrator on 2016/7/21.
 *
 * 次文件来自  很牛x的程序员 .
 *
 * 作者:无名
 */

/*

 *
 * element,要移动的对象
 * target,目标位置
 * step,每次移动多少px
 *
 * */
function animate(element,target) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var step=8;
        var current=element.offsetLeft;
        step=current<target?step:-step;
        if(Math.abs(target-current)<=Math.abs(step)){
            clearInterval(element.timeId);
            element.style.left=target+"px";
        }else{
            current=current+step;
            element.style.left=current+"px";
        }
    },10);
}