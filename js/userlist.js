var userlist = function () {
    return this;
};

// 初始化
userlist.prototype.init = function () {
    // 每页显示头像数量
    this.pageSize = 9;

    // 获取用户列表数据
    this.getUserData();
    // 初始化事件
    this.initEvent();
};

// 获取用户列表数据
userlist.prototype.getUserData = function (page) {
    var that = this;

    // var data = {};
    // data.device_sn = commonJs.deviceCode;
    // data.page = (page || 1);
    // data.pageSize = "100";//this.pageSize
    //
    // $.ajax( {
    //     url: commonJs.apiUrl + "/webpillow/list.html",
    //     type: "GET",
    //     // data: data,
    //     // dataType: 'json',
    //     processData:false,
    //     contentType:false,
    //     success : function (data) {
    //         //代码
    //         console.log(data)
    //     }
    // });
    //
    // return;


    // 获取头像接口
    var data = {};
    data.device_sn = commonJs.deviceCode;
    data.page = (page || 1);
    data.pageSize = "10000";//this.pageSize
    var url = commonJs.apiUrl + "/webpillow/list.html";
    ajax.load(url, data, function (resultData) {
        console.log(resultData);

        // 判断如果总数少于9则至少显示9个
        that.pageSize = (resultData.content.dataCount < that.pageSize ? that.pageSize : resultData.content.dataCount);

        // 生成头像
        var htmlArr = [];
        for (var i = 0; i < that.pageSize; i++) {
            // 获取对应的数据
            var dataListObj = resultData.content.dataList[i];

            // 拼接数据
            htmlArr.push('<li class="userlist-dot" data-id="' + (dataListObj ? (dataListObj.id) : "") + '">');
            htmlArr.push('<a class="userlist-link" href="javascript:;">');
            htmlArr.push('<img class="userlist-img" src="' + (dataListObj ? (commonJs.apiUrl + dataListObj.avatar) : "") + '" alt="">');
            htmlArr.push('</a>');
            htmlArr.push('</li>');
        }

        $("#userlist").html(htmlArr.join(""));
    });
};


// 初始化事件
userlist.prototype.initEvent = function () {
    // 头像点击事件
    $("#userlist").on("click", ".userlist-dot", function () {
        // 获取头像id
        var avatarId = $(this).attr("data-id");
        // 调转链接
        // window.location.href = window.location.origin + "/view/measure-step5.html?avatarid=" + avatarId;
        $(location).attr("href","../view/measure-step5.html?avatarid=" + avatarId);
    });

};

$(function () {
    var userlistObj = new userlist();
    userlistObj.init();
});