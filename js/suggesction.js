var suggesction = function () {
    return this;
}

//初始化
suggesction.prototype.init = function () {
//    初始化事件
    this.initEvent();

    //从本地获取数据
    this.bindData()
}

//从本地获取数据
suggesction.prototype.bindData = function () {
    var chooseTexture = localStorage.getItem("chooseTexture");
    var chooseComfort = localStorage.getItem("chooseComfort");
    var chooseHight = localStorage.getItem("chooseHight");

    if (chooseTexture) {
        $("#texture .sugges-link[data-type='" + chooseTexture + "']").addClass("active");
    }
    if (chooseComfort) {
        $("#comfort .sugges-link[data-type='" + chooseComfort + "']").addClass("active");
    }
    if (chooseHight) {
        $("#hight .sugges-link[data-type='" + chooseHight + "']").addClass("active");
    }
}

// 初始化事件
suggesction.prototype.initEvent = function () {
    //点击年龄添加选中、兄弟之间不选
    $(".sugges-link").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // 推荐枕头按钮点击事件
    $(".suggesction-link").on('click', function () {

        // 接收值
        var chooseTexture = $("#texture .sugges-link[class*='active']").attr("data-type");
        var chooseComfort = $("#comfort .sugges-link[class*='active']").attr("data-type");
        var chooseHight = $("#hight .sugges-link[class*='active']").attr("data-type");

        if(chooseTexture && chooseComfort && chooseHight) {
            localStorage.setItem("chooseTexture", chooseTexture);
            localStorage.setItem("chooseComfort", chooseComfort);
            localStorage.setItem("chooseHight", chooseHight);

            $(location).attr("href","../view/choise-assistant.html");
        }
        else {
            layer.alert("问题没有回答完哦，请继续答题！");
        }
    });
}


$(function () {
    var suggesctionObj = new suggesction();
    suggesctionObj.init();
})