var choiseAge = function () {
    return this;
}

//初始化
choiseAge.prototype.init = function () {
//    初始化事件
    this.initEvent();

//    从本地获取数据
    this.bindData();
}

//从本地获取数据
choiseAge.prototype.bindData = function () {
    var chooseGender = localStorage.getItem("chooseGender");
    var chooseAge = localStorage.getItem("chooseAge");
    if(chooseGender){
        $("#choose-gender .choice[data-type='" + chooseGender + "']").addClass("active");
    }
    if(chooseAge){
        $("#choose-age .age-choose[data-type='" + chooseAge + "']").addClass("active");
    }
}

// 初始化事件
choiseAge.prototype.initEvent = function () {
    //点击年龄添加选中、兄弟之间不选
    $(".age-choose,.choice").on('click',function () {
        $(this).addClass("active").siblings().removeClass("active");
        //    接受性别和枕头的值
        var chooseAge = $("#choose-age .age-choose[class*='active']").attr("data-type");
        var chooseGender = $("#choose-gender .choice[class*='active']").attr("data-type");

        if(chooseGender && chooseAge){
            localStorage.setItem("chooseGender",chooseGender);
            localStorage.setItem("chooseAge",chooseAge);
            $(location).attr("href","../view/suggesction.html");
        }
    });

}


$(function () {
    var choiseAgeObj = new choiseAge();
    choiseAgeObj.init();
})