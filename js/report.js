var report = function () {
    return this;
};

// 初始化
report.prototype.init = function () {
    // 根据测量参数获取数据
    this.getDataByParam();
    // 初始化事件
    this.initEvent();
};

// 根据测量参数获取数据
report.prototype.getDataByParam = function () {
    var that = this;

    // 获取数据id，如果存在，则不再进行接口数据获取
    var dataId = localStorage.getItem("cl_data_id");
    if (dataId) {
        // 设置数据
        that.data = JSON.parse(localStorage.getItem(dataId));

        // 绑定数据
        that.setData();
        // 绑定小程序二维码
        that.setQRCodeImg();
        // 绑定左侧头像
        that.setAvatarImg();
        // 绑定曲线数据
        that.setCurveImg();
    }
}

// 绑定右侧数据
report.prototype.setData = function () {
    console.log("a", this.data.ac);

    // 数据为mm，转换为cm
    var ac = Math.round(this.data.ac * 10) / 100;
    var bc = Math.round(this.data.bc * 10) / 100;
    var head_neck = Math.round(this.data.head_neck * 10) / 100;
    var head_shoulder = Math.round(this.data.head_shoulder * 10) / 100;

    //头部高度
    $('#acNum').html(ac + 'cm');
    if (ac < 5) {
        $("#acNumText").html("您的头部高度为" + ac + "cm，适宜枕的枕头为中低。请选择合适高度的枕头，如果枕高不合适将会使颈椎受损，严重时可能会引起病变。");
    }
    else if (ac >= 5) {
        $("#acNumText").html("您的头部高度为" + ac + "cm，适宜枕的枕头为中高。请选择合适高度的枕头，如果枕高不合适将会使颈椎受损，严重时可能会引起病变。");
    }

    //颈部高度
    $('#bcNum').html(bc + 'cm');
    if (bc < 7.5) {
        $("#bcNumText").html("您的颈部部高度为" + bc + "cm，适宜将睡枕的颈部区域调整为中低，颈部完全没有支撑或者过高会让睡眠时的颈部压力增加，甚至引起供血不畅、压迫神经，以致四肢酸麻，请注意选择适合自己的睡枕；");
    }
    else if (bc >= 7.5) {
        $("#bcNumText").html("您的颈部部高度为" + bc + "cm，适宜将睡枕的颈部区域调整为中高，颈部完全没有支撑或者过高会让睡眠时的颈部压力增加，甚至引起供血不畅、压迫神经，以致四肢酸麻，请注意选择适合自己的睡枕；");
    }


    //头颈高度差
    $('#headNeckNum').html(head_neck + 'cm');
    if (head_neck < 9) {
        $("#headNeckNumText").html("头颈高度差小于9cm，您的颈部长度不高，请注意睡觉时头部距离颈部枕头边缘的距离要适中，否则会引起颈部的不适；");
    }
    else if (head_neck >= 9 && head_neck <= 12.5) {
        $("#headNeckNumText").html("头颈高度差在9cm-12.5cm之间，您的颈部长度适中，请注意睡觉时头部距离颈部枕头边缘的距离要适中，否则会引起颈部的不适；");
    }
    else if (head_neck > 12.5) {
        $("#headNeckNumText").html("头颈高度差大于12.5cm，您的颈部长度偏长，请注意睡觉时头部距离颈部枕头边缘的距离要适中，否则会引起颈部的不适；");
    }

    //头肩距离
    $('#headShoulderNum').html(head_shoulder + 'cm');
    if (head_shoulder < 10) {
        $("#headShoulderNumText").html("大于10cm：您的头肩距离略大，在选择枕头时，需要较高的侧睡区，低矮的侧睡区会让您的肩部承受较大的压力，长时间睡眠会产生大小臂酸麻的现象。");
    }
    else if (head_shoulder >= 10) {
        $("#headShoulderNumText").html("小于10cm：您的头肩距离略低，在选择枕头时，需要适中的的侧睡高度，在侧睡时，睡枕过高的侧睡区域会由于压迫神经给您的颈部带来不适，请注意调整");
    }

};

// 绑定小程序二维码
report.prototype.setQRCodeImg = function () {
    $("#reportCode").attr('src', commonJs.apiUrl + this.data.qrcode_url);
};

// 绑定左侧头像
report.prototype.setAvatarImg = function () {
    $("#avatarImg").attr('src', commonJs.apiUrl + (this.data.avatar || this.data.avatar_url));
};

// 绑定曲线数据
report.prototype.setCurveImg = function () {
    // 渲染PDF
    // this.renderingPDF(commonJs.apiUrl + (this.data.bodyImage || this.data.body_url), "sideImg");

    // 渲染图片
    $("#sideImg").attr({"src": commonJs.apiUrl + this.data.body_url});

    // 获取原本图片的宽度
    var img = new Image();
    img.src = commonJs.apiUrl + that.data.body_url;
    img.onload = function(){
        // 计算图片偏移宽度
        var leftWidth = that.data.left_point * ($("#sideImg").width() / img.width);
        $("#sideImg").css({"transform": "translateX(-" + leftWidth + "px)"})

        console.log("imgWidth: ", img.width);
        console.log("sideImgWidth: ", $("#sideImg").width());

        // 隐藏等待页面
        $(".load-model").hide();
    }
};

// 渲染PDF
report.prototype.renderingPDF = function (fileURL, canvasId) {

    PDFJS.getDocument(fileURL).then(function (pdf) {
        pdf.getPage(1).then(function (page) {

            var scale = 2;
            var viewport = page.getViewport(scale);

            // var desiredWidth = 100;
            // var viewport = page.getViewport({ scale: 1, });
            // var scale = desiredWidth / viewport.width;
            // var scaledViewport = page.getViewport({ scale: scale, });

            //  准备用于渲染的 canvas 元素
            var canvas = document.getElementById(canvasId);
            var context = canvas.getContext('2d');
            // canvas.height = $(".curve-person").height();
            // canvas.width = $(".curve-person").width();
            canvas.height = viewport.height;
            canvas.width = viewport.width;


            // 将 PDF 页面渲染到 canvas 上下文中
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);

            // 左移一些canvas
            $(canvas).css({"transform": "translateX(-" + ((canvas.width - $(".curve-person").width())/2) + "px)"})

            // 隐藏等待页面
            $(".load-model").hide();

        });
    });

};

// 初始化事件
report.prototype.initEvent = function () {

};

$(function () {
    var reportObj = new report();
    reportObj.init();
});