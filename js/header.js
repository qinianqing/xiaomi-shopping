/**
 * Created by Administrator on 2016/9/1.
 */
/*
 * by:陈东圣
 *
 * */
$(document).ready(function(){
    //给每个li注册鼠标经过显示事件
    $(".tab-item").mouseenter(function(){
        var index=$(this).index();
        console.log(index);
//                $(".list-header").children(".main").css("backgroundImage","url(images/site"+index+".png)");
        $('.list-header'+index).stop().fadeIn();
    });
    $(".tab-item").mouseleave(function(){
        var index=$(this).index();
//                $(".list-header").children(".main").css("backgroundImage","url(images/site"+index+".png)")
        $('.list-header'+index).stop().fadeOut();
    });

    $(".submit").mouseenter(function(){
        $(this).css("background-image","url('images/button-h-2.jpg')");
    });
    $(".submit").mouseleave(function(){
        $(this).css("background-image","url('images/button-h-1.jpg')");
    });

    $(".search").focus(function(){
        $(this).css("border-color","#ff6700");
        $(".submit").css("border-color","#ff6700");
        $(".dv").slideDown().css("border-color","#ff6700");
    });
    $(".search").blur(function(){
        $(this).css("border-color","#e0e0e0");
        $(".dv").slideUp().css("border-color","#e0e0e0");
        $(".submit").css("border-color","#e0e0e0");
    });
    $(".dv li").click(function(){
        var val = $(this).text().trim();
        $(".search").val("");
        $(".search").val(val);
        console.log($(this).index());
    });
    $(".dv li").mouseenter(function(){
        $(this).css("backgroundColor","#ff6700");
        $(this).css("color","#fff");
    });
    $(".dv li").mouseleave(function(){
        $(this).css("backgroundColor","");
        $(this).css("color","#666");
    });
    $(".login-a").click(function(){
        $("#bg").fadeIn();
        $("#login-h").show("slow");
    });
    $("#closeBtn").click(function(){
        $("#bg").fadeOut("slow");
        $("#login-h").fadeOut();
    });
    $("#loginBtn").click(function(){
        var user=$("#username").val();
        var pass=$("#password").val();
        $(".topbar-info").html('<span>'+user+'您好，欢迎来到小米官网!</span>');
        $("#bg").fadeOut("slow");
        $("#login-h").fadeOut();
    });

    $("#title").mousedown(function (event) {
        //获取鼠标的可视区域的横坐标
        var x=$("#login-h").offset().left;
        console.log(x);
        //获取鼠标的可视区域的纵坐标
        var y=$("#login-h").offset().top;
        console.log(y);
        //获取鼠标按下的这个点到登录窗口的层左边框的距离
        var titleLeft= event.clientX-x;
        //获取鼠标按下的这个点到登录窗口的层上面的距离
        var titleTop= event.clientY-y;

        //鼠标移动的事件
        $(document).mousemove(function (e) {
            //再次的获取鼠标可视区域横坐标和纵坐标
            var w=e.clientX+250-titleLeft;//设置当前层的横坐标距离
            var t=e.clientY-140-titleTop;//设置当前层的纵坐标距离
            // console.log(e.clientX+"==="+e.clientY);
            $("#login-h").css("left",w+"px");
            $("#login-h").css("top",t+"px");
        });

    });

    $("#title").mouseup(function () {
        $(document).off("mousemove");
    });
    $(".topbar-cart").mouseenter(function(){
        $(this).css("backgroundColor","#fff");
        $(this).css("color","#ff6700");
        $(".cart-box").stop().slideDown();
    });
    $(".topbar-cart").mouseleave(function(){
        $(this).css("backgroundColor","#424242");
        $(this).css("color","#ccc");
        $(".cart-box").stop().slideUp();
    });
});