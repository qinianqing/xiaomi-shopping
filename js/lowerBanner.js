/**
 * Created by lz on 16/9/1.
 */
$(function () {
    //封装的运动函数
    function animate1(element, target) {
        clearInterval(element.timeId);
        element.timeId = setInterval(function () {
            var step = 30;
            var current = element.offsetLeft;
            step = current < target ? step : -step;
            if (Math.abs(target - current) <= Math.abs(step)) {
                clearInterval(element.timeId);
                element.style.left = target + "px";
            } else {
                current = current + step;
                element.style.left = current + "px";
            }
        }, 5);
    }

//获取轮播图ul元素
    var slidPicUl = document.getElementById("slidPicUl");
//获取左右箭头
    var leftArr = document.getElementById("leftArr");
    var rightArr = document.getElementById("rightArr");

    var target = slidPicUl.offsetWidth / 2;

    var arrow = document.getElementById("arrow");

    //var time1 = null;
    //var time2 = null;
    var time1 = setInterval(function () {
        if (slidPicUl.offsetLeft === 0) {
            animate1(slidPicUl, -target);
            leftArr.className = "arrActive";
            rightArr.className = "";
        }
    }, 8000);

    var time2 = setInterval(function(){
        if(slidPicUl.offsetLeft === -target){
            animate1(slidPicUl,0);
            leftArr.className = "";
            rightArr.className = "arrActive";
        }
    },8000);
//分别为左右箭头注册点击事件
    leftArr.onclick = function () {
        clearInterval(time1);
        clearInterval(time2);
        leftArr.className = "arrActive";
        rightArr.className = "";
        animate1(slidPicUl, -target);

    };
    rightArr.onclick = function () {
        clearInterval(time1);
        clearInterval(time2);
        leftArr.className = "";
        rightArr.className = "arrActive";
        animate1(slidPicUl, 0);
    };
    arrow.onmouseover = function(){
        clearInterval(time1);
        clearInterval(time2);
    };
    arrow.onmouseout = function(){
        time1 = setInterval(function () {
            if (slidPicUl.offsetLeft === 0) {
                animate1(slidPicUl, -target);
                leftArr.className = "arrActive";
                rightArr.className = "";
            }
        }, 8000);

        time2 = setInterval(function(){
            if(slidPicUl.offsetLeft === -target){
                animate1(slidPicUl,0);
                leftArr.className = "";
                rightArr.className = "arrActive";
            }
        },8000);
    };
    rightArr.className = "arrActive";
    //每隔5秒钟，大轮播图移动一次

    //animate1(slidPicUl,-target);


});