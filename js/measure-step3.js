/**
 * Created by lupan on 2019/1/22.
 */
var measureStep3 = function () {
    return this;
}

//初始化
measureStep3.prototype.init = function () {
    // 视频元素
    this.video = document.querySelector('#video');
    // 视频信息
    this.videoInfo = {
        videoWidth: "",
        videoHeight: "",
        eleWidth: "",
        eleHeight: ""
    };

    // 视频大小
    this.constraints = {
        audio: false,
        video: {
            // width: {ideal: 1280},
            // height: {ideal: 720}
        }
    };


    // 初始化摄像头
    this.initMediaDevices();
    //初始化事件
    this.initEvent();

    // setTimeout(function () {
    //     $(".take").trigger("click");
    // }, 10000)
};

// 初始化摄像头
measureStep3.prototype.initMediaDevices = function () {
    var that = this;

    // 开启视频
    navigator.mediaDevices.getUserMedia(this.constraints)
        .then(function (mediaStream) {
            console.log('getUserMedia:', mediaStream);

            that.video.srcObject = mediaStream;
            that.video.onloadedmetadata = function (e) {
                that.video.play();

                // 获取视频信息
                that.videoInfo.eleWidth = that.video.clientWidth;
                that.videoInfo.eleHeight = that.video.clientHeight;
                that.videoInfo.videoWidth = e.target.videoWidth;
                that.videoInfo.videoHeight = e.target.videoHeight;

                // 设置video的位置偏移
                $(that.video).css({left: -((that.videoInfo.eleWidth - document.body.clientWidth) / 2)});
                // 设置反转
                $(that.video).css({transform: "rotateY(180deg)"});
            };
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
};

//初始化事件
measureStep3.prototype.initEvent = function () {
    var that = this;

    $('.take').on('click', function () {
        // 清空id到本地，返回到上页拍照页后，移除该id，很重要
        localStorage.removeItem("cl_data_id");

        // 使用canvas进行拍照
        var canvas = document.getElementById('canvas');
        // 设置canvas的宽为屏幕宽度, 高为视频元素高度
        canvas.width = document.body.clientWidth;
        canvas.height = that.videoInfo.eleHeight;

        // 设置显示比例，视频实际高度/视频元素高度
        var proportion = that.videoInfo.videoHeight / that.videoInfo.eleHeight;

        // 设置开始截取的坐标位置，偏移位置*显示比例
        var cutX =((that.videoInfo.eleWidth - document.body.clientWidth) / 2) * proportion;
        // 设置实际要截取的宽高
        var cutWidth = canvas.width * proportion;
        var cutHeight = canvas.height * proportion;

        // 绘制canvas图形
        canvas.getContext('2d').drawImage(that.video, cutX, 0, cutWidth, cutHeight, 0, 0, canvas.width, canvas.height);
        // 设置图片
        document.getElementById('picture').src = canvas.toDataURL("image/png");
        // 设置反转
        $("#picture").css({transform: "rotateY(180deg)"});
        // var img = new Image();
        // img.src = canvas.toDataURL("image/png");

        // 将数据保存到本地
        localStorage.setItem("positiveFile", canvas.toDataURL("image/png"));

        // 跳转到下一页
        window.location.href = window.location.origin + "/view/measure-step5.html";
        $(location).attr("href","../view/measure-step5.html");
    })
};

$(function () {
    var measureStep3Obj = new measureStep3();
    measureStep3Obj.init();
});