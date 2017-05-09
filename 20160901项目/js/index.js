// 左侧导航栏 start
//详细菜单显示
var banner_ul = document.getElementById("banner-ul");
var banner_lis = banner_ul.children;
var banner_div = banner_ul.getElementsByTagName("div");
//console.log(banner_div);
for (var i = 0; i < banner_lis.length; i++) {
    // var banner_div=banner_lis[i].getElementsByTagName("div")[0];

    banner_lis[i].index = i;//保存序列号
    banner_lis[i].onmouseover = function () {//给li绑定鼠标经过事件
        for (var i = 0; i < banner_lis.length; i++) {//遍历
            banner_div[i].style.display = "none";//排他
            animate( banner_div[i],{"left":"258","opacity":0});
        }
        banner_div[this.index].style.display = "block";
        animate( banner_div[this.index],{"left":"302","opacity":0.8});

    };
    banner_ul.onmouseout = function () {
        for (var i = 0; i < banner_lis.length; i++){
            banner_div[i].style.display = "none";
        }

    };
    //详细菜单图标创建
    var banner_i = banner_div[i].getElementsByTagName("i");
    for (var j = 0; j < banner_i.length; j++) {

        banner_i[j].style.background = " url(images/" + (i + 1) * (j + 1) + ".png) no-repeat";
        //console.log(i * (j + 1));

    }
}

// 左侧导航栏 end
//轮播图 start
//1.使图片自动播放
//var banner_slider = document.getElementById("banner_slider");
//var banner_content = document.getElementById("banner_content");
//var banner_lis = banner_content.getElementsByTagName("li");
//var ul = banner_slider.children[1];
//var imgWidth = banner_slider.offsetWidth;
//var pic = 0;
//var arr = document.getElementById("banner_arrow");
//var left = arr[0];
//var right = arr[1];
var box=document.getElementById("banner")
var screen=document.getElementById("banner_slider");
//获取显示图片的宽度
var imgWidth=screen.offsetWidth;
//获取ul
var ul=document.getElementById("banner_content");
//获取ul中所有的li
var lis=ul.children;
//获取ol
var ol=screen.children[1];
//var dian_lis=ol.children;
//获取焦点层
var arr=document.getElementById("banner_arrow");
//获取left和right
var left=document.getElementById("left");
var right=document.getElementById("right");
var pic=0;//该变量配合左右按键使用,该变量的值应该和ol中li的索引一致
//遍历ul中所有的li,根据li的个数创建li并添加到ol中,

    //鼠标进入的事件
for(var k=0;k<lis.length;k++){
    var li=document.createElement("li");
    ol.appendChild(li);//添加li到ol中
    //没每个li添加一个索引的属性,并设置值,
    li.index=k;
    //设置li中的文字内容
    //li.innerHTML=k+1;
    //鼠标进入的事件
    li.onmouseover=function () {
        //设置样式,清理所有的li的样式,设置当前的li的样式
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].className="dian_1";
        }
        this.className="dian";
        //移动图片
        var target=-this.index*imgWidth;
        animate(ul,{"left":target});
        pic=this.index;
    };
}
ol.children[0].className="dian";
//因为要做无缝连接,所以把ul中的第一个li克隆追加到ul中
ul.appendChild(ul.children[0].cloneNode(true));
var timeId=null;
timeId=setInterval(rightHandle,5000);
//设置鼠标进入box后显示显示左右焦点层
box.onmouseover=function () {
    arr.style.display="block";
    clearInterval(timeId);
};
box.onmouseout=function () {
    arr.style.display="none";
    timeId=setInterval(rightHandle,5000);
};
//设置鼠标点击右边的按钮
right.onclick=rightHandle;
function rightHandle() {
    if(pic==lis.length-1){
        pic=0;
        ul.style.left=0+"px";
    }
    pic++;
    animate(ul,{"left":-pic*imgWidth});
    if (pic==lis.length-1){
        //此时显示第一张图片,设置ol中第一个li的类样式
        ol.children[0].className="dian";
        //同时移除ol中最后一个li的样式
        ol.children[ol.children.length-1].className="dian_1";
    }else{
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className="dian_1";
        }
        ol.children[pic].className="dian";
    }
};
left.onclick=leftHandle;
function leftHandle() {
    if(pic==0){
        pic=lis.length-1;
        ul.style.left=-(lis.length-1)*imgWidth+"px";
    }
    pic--;
    animate(ul,{"left":-pic*imgWidth});
    for(var i=0;i<ol.children.length;i++){
        ol.children[i].className="dian_1";
    }
    ol.children[pic].className="dian";
};
//轮播图 end
