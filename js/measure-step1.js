/**
 * Created by lupan on 2019/1/16.
 */

var measureStep1 = function () {
    return this;
}

//初始化
measureStep1.prototype.init = function () {
    //初始化事件
    this.initEvent();

    //从本地获取数据
    this.bindData();
};

//从本地获取数据
measureStep1.prototype.bindData = function () {
    var measureGender = localStorage.getItem("measureGender");
    var measureHair = localStorage.getItem("measureHair");
    if(measureGender){
        $("#gender .choose[data-type='" + measureGender + "']").addClass("active");
    }
    if(measureHair){
        $("#hair .choose[data-type='" + measureHair + "']").addClass("active");
    }
}

//初始化事件
measureStep1.prototype.initEvent = function () {
    $('.choose').on('click', function () {
        //添加选中、兄弟之间不选
        $(this).addClass("active").siblings().removeClass("active");

        // 判断如果现在点击的为性别，则清空发型的选择
        if ($(this).parents(".measure1-choose").attr("id") === "gender") {
            $("#hair .choose").removeClass("active");
        }

        //接收男女、长中短发值
        var measureGender = $("#gender .choose[class*='active']").attr("data-type");
        var measureHair = $("#hair .choose[class*='active']").attr("data-type");

        if(measureGender && measureHair){
            //存到本地存储
            localStorage.setItem("measureGender",measureGender);
            localStorage.setItem("measureHair",measureHair);
            $(location).attr("href","../view/measure-step2.html");
        }
    })
};

$(function () {
    var measureStep1Obj = new measureStep1();
    measureStep1Obj.init();
});