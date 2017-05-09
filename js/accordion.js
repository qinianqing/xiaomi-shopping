/**
 * Created by wu on 2016/9/1 0001.
 */



$(function () {
    var $li = $(".fold_wrap li");
    for (var i = 0; i < $li.length; i++) {
        $li.eq(i).css("backgroundImage", "url('images/mi" + (i + 1) + ".jpg')");
    }


    $li.mouseenter(function () {
        $(this).stop().animate({"width": "600px"}, 600).siblings().stop().animate({"width": "125px"}, 600);
        $(this).children(".mask_b").stop().animate( {color:"#ff6700",backgroundColor: "rgba(0,0,0,0)"}, 600);
        //$(this).children(".mask_b").stop().animate( {}, 600);
    });

    $li.mouseleave(function () {
        $li.stop().animate({"width": "204px"}, 600);
        $(this).children(".mask_b").stop().animate({color:"black", backgroundColor: "rgba(0,0,0,.5)"}, 600);
    });
});

