/**
 * 作者：王琦
 * 功能：实现第一页页全屏轮播，点击进入首页
 * 修改时间：2016-09-02
 */
$(function () {
    (function (win, doc) {
        // 全屏轮播部分

        // 初始化相关变量
        var $fullScr = $("#fullScreen");    // 全屏轮播层
        var $sldBox = $("#fstSlide");   // 视窗
        var $wrap = $("#fstWrap");  // 包裹轮播图片的ul
        var $fstBtn = $("#fstBtn"); // 中间按钮
        var $shouYe = $("#shouYe");

        // 页面加载后给wrap追加第一个li的克隆节点，以实现无缝滚动
        $wrap.append($wrap.find("li").eq(0).clone());

        // 获取轮播图的所有li
        var $lis = $wrap.find("li"); // 轮播图片的lis

        // 获取浏览器可视窗口的宽高
        // var scrW = doc.body.clientWidth || doc.documentElement.clientWidth || 0;
        var scrW = win.innerWidth;
        // var scrH = doc.body.clientHeight || doc.documentElement.clientHeight || 0;
        var scrH = win.innerHeight;

        // 设置轮播图可视区域的宽高
        $sldBox.css({"width": scrW, "height": scrH});
        // 设置包裹轮播图片的ul的宽高
        $wrap.css({"width": scrW * $lis.length});
        // 给每个轮播li设置宽高为浏览器窗口可视宽高
        $lis.css({"width": scrW, "height": scrH, "minWidth": 1226});

        // 初始化轮播图所需的计数器
        var idx = 1;
        // 初始化切换间隔
        var interval = 4000;
        // 页面加载等待interval时间开始切换图片
        var timer = setTimeout(slide, interval);

        // 鼠标移入按钮全屏虚化，鼠标移开恢复
        $fstBtn.mouseenter(function () {
            $wrap.css({"opacity": 0.8});
        }).mouseleave(function () {
            $wrap.css({"opacity": 1});
        });

        // 鼠标点击按钮进入首页
        $fstBtn.click(function () {
            // 全屏轮播虚化
            $fullScr.css({"opacity": 0});
            setTimeout(function () {
                // 0.8s后彻底消失
                $fullScr.css({"display": "none"});
                // 首页显现
                location.replace("index.html");
            }, 800);
        });

        /**
         * 图片轮播函数
         */
        function slide() {
            // 若轮播图播到尾部，则从头开始继续
            if (parseInt($wrap.css("left")) === -($lis.length - 1) * scrW) {
                $wrap.css("left", 0);   // 重置ul的left为0
                idx = 1;
                slide();
            } else {
                $wrap.animate({"left": -scrW * idx++}, 1000, "swing", function () {
                    timer = setTimeout(slide, interval);
                });
            }
        }
    })(window, document);
});
