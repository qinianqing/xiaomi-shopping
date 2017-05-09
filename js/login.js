//点击二维码切换二维码登陆
$(function () {
    var $jump = $(".ds_jump");
    $jump.mouseover(function () {
        $(this).css("opacity", 0.5)
    });
    $jump.mouseout(function () {
        $(this).css("opacity", 1)
    });
    $jump.click(function () {
        $(".ds_content").hide();
        $(".erweima").show()
    });
    $(".close").click(function () {
        $(".erweima").hide();
        $(".ds_content").show()
    })
});