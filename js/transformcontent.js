//��ȡԪ��
var loopPlayerInit = (function () {
    //��ת
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
    //ͼƬ����
        imgAll = createImg([['images/transformslide1.png', 'images/transformslide2.png',
            'images/transformslide3.png', 'images/transformslide4.png'],
            ['images/transformslide5.png', 'images/transformslide6.png',
                'images/transformslide7.png', 'images/transformslide8.png'],
            ['images/transformslide9.png', 'images/transformslide10.png',
                'images/transformslide11.png', 'images/transformslide12.png']]),
    //ͼƬ�������
        imgArrIndex = 0,
    //ͼƬÿ���߹��ĽǶ�
        imgAng = 40,
    //ͼƬ�ƶ���ʱ��
        imgTime = 300,
    //ͼƬ���Ƿ������ı���
        flag = false,
        autoTimer = null,
        autoInterval = 3800;
    //��ȡԪ��
    function init() {
        $transleft = $("#transleft");
        $transright = $("#transright");
        $imglist = $(".transbox ul li");
        confige();
        setEvent();
        autogo();
    }

    //����ͼƬ��б�Ƕ�
    function confige() {
        //ÿ������15
        var ang = 15,
        //��һ��ͼ�ĽǶ�
            aint = -15;
        $imglist.transform({origin: origin});
        $imglist.each(function (i) {
            //�������ĵ�ǰԪ��
            var $this = $(this);
            $this.transform({rotate: aint + (i * ang) + "deg"});
        })
    }

    //���¼�
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

    //����ͼƬ����
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

    //�л�ͼƬ����
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
            //��¼��ǰli
            var $this = $(this);
            //��¼ͼƬ
            var $thisImg = $this.children('img');
            //��ͼƬ
            var $targetImg = $(imgAll[imgArrIndex][i]);
            //ÿ��ͼƬ���ֵ�ʱ��
            var thisTime = (d === 1) ? imgTime * i : imgTime * ($imglist.length - 1 - i);
            //����ͼƬװ��$thisItme��
            $this.append($targetImg);
            //����ͼƬ��ʼλ�úͽǶ�
            $thisImg.transform({origin: origin});
            $targetImg.transform({origin: origin1, rotate: (0 - d) * (imgAng) + "deg"});
            setTimeout(function () {
                //�õ�ǰͼƬ��ת��ȥ����ͼƬ��ת����
                $thisImg.animate1({rotate: 60 * d + "deg"},500, function () {
                    $targetImg.animate1({rotate: -(2*d)+"deg"}, 0, function () {
                        $targetImg.animate1({rotate: "0deg"},100, function () {
                            $thisImg.remove();
                            if (thisTime == ($imglist.length - 1) * imgTime) {
                                flag = false;
                            }
                        })
                        //��֤liֻ��һ��ͼƬ
                    });
                });
            }, thisTime)
        })
    }

    //�Զ����ź���
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
