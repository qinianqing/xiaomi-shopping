//获取元素
var loopPlayerInit = (function () {
    //跳转
    var enter = document.getElementById("enter");
    enter.onclick = function () {
        clearInterval(autoTimer);
        location.href="http://www.baidu.com";
    };

    var $transleft = null,
        $transright = null,
        $imglist = null,
        origin = ["130px", "600px"],
        origin1 = ["130px", "800px"],
    //图片数组
        imgAll = createImg([['images/transformslide1.png', 'images/transformslide2.png',
            'images/transformslide3.png', 'images/transformslide4.png'],
            ['images/transformslide5.png', 'images/transformslide6.png',
                'images/transformslide7.png', 'images/transformslide8.png'],
            ['images/transformslide9.png', 'images/transformslide10.png',
                'images/transformslide11.png', 'images/transformslide12.png']]),
    //图片组的索引
        imgArrIndex = 0,
    //图片每次走过的角度
        imgAng = 40,
    //图片移动的时间
        imgTime = 300,
    //图片组是否加载完的变量
        flag = false,
        autoTimer = null,
        autoInterval = 3800;
    //获取元素
    function init() {
        $transleft = $("#transleft");
        $transright = $("#transright");
        $imglist = $(".transbox ul li");
        confige();
        setEvent();
        autogo();
    }

    //设置图片倾斜角度
    function confige() {
        //每次增加15
        var ang = 15,
        //第一张图的角度
            aint = -15;
        $imglist.transform({origin: origin});
        $imglist.each(function (i) {
            //遍历出的当前元素
            var $this = $(this);
            $this.transform({rotate: aint + (i * ang) + "deg"});
        })
    }

    //绑定事件
    function setEvent() {
        $transleft.bind("click", function () {
            anigo(-1);
            return false;
        })
        $transright.bind("click", function () {
            anigo(1);
            return false;
        })
        $imglist.mouseenter(function () {
            clearInterval(autoTimer);
        })
        $imglist.mouseleave(function () {
            autogo();
        });
    }

    //创建图片函数
    function createImg(arr) {
        var imgArr = [];
        for (var i in arr) {
            imgArr[i] = [];
            for (var j in arr[i]) {
                imgArr[i][j] = new Image();
                imgArr[i][j].src = arr[i][j];
            }
        }
        return imgArr;
    }

    //切换图片函数
    function anigo(d) {
        if (flag) {
            return false;
        }
        flag = true;
        imgArrIndex += d;
        if (imgArrIndex > imgAll.length - 1) {
            imgArrIndex = 0;
        } else if (imgArrIndex < 0) {
            imgArrIndex = imgAll.length - 1;
        }
        $imglist.each(function (i) {
            //记录当前li
            var $this = $(this);
            //记录图片
            var $thisImg = $this.children('img');
            //新图片
            var $targetImg = $(imgAll[imgArrIndex][i]);
            //每个图片出现的时间
            var thisTime = (d === 1) ? imgTime * i : imgTime * ($imglist.length - 1 - i);
            //将新图片装到$thisItme里
            $this.append($targetImg);
            //定义图片初始位置和角度
            $thisImg.transform({origin: origin});
            $targetImg.transform({origin: origin1, rotate: (0 - d) * (imgAng) + "deg"});
            setTimeout(function () {
                //让当前图片旋转出去，新图片旋转进来
                $thisImg.animate1({rotate: 60 * d + "deg"},500, function () {
                    $targetImg.animate1({rotate: -(2*d)+"deg"}, 0, function () {
                        $targetImg.animate1({rotate: "0deg"},100, function () {
                            $thisImg.remove();
                            if (thisTime == ($imglist.length - 1) * imgTime) {
                                flag = false;
                            }
                        })
                        //保证li只有一张图片
                    });
                });
            }, thisTime)
        })
    }

    //自动播放函数
    function autogo() {
        clearInterval(autoTimer);
        anigo(1);
        autoTimer = setInterval(function () {
            anigo(1);
        }, autoInterval)
    }

    return init;
})();

loopPlayerInit();
