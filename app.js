var express = require('express');
var path = require('path');
var app = express();

// 设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname, '/')));

// 首页
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// 选枕助手
app.get('/view/assistant.html', function (req, res) {
    res.sendFile(__dirname + '/view/assistant.html');
});

// 好睡专题
app.get('/view/good-sleep.html', function (req, res) {
    res.sendFile(__dirname + '/view/good-sleep.html');
});

// 曲线测量
app.get('/view/measure.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure.html');
});

// 曲线测量-第1步 选择
app.get('/view/measure-step1.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step1.html');
});

// 曲线测量-第2步 侧面曲线
app.get('/view/measure-step2.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step2.html');
});

// 曲线测量-第3步 正面曲线
app.get('/view/measure-step3.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step3.html');
});

// 曲线测量-第4步 计算中
app.get('/view/measure-step4.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step4.html');
});

// 曲线测量-第5步 我的曲线
app.get('/view/measure-step5.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step5.html');
});

// 曲线测量-第6步 二维码
app.get('/view/measure-step6.html', function (req, res) {
    res.sendFile(__dirname + '/view/measure-step6.html');
});

// 专属定制
app.get('/view/onepillow.html', function (req, res) {
    res.sendFile(__dirname + '/view/onepillow.html');
});

// 产品购物页
app.get('/view/products-introduction.html', function (req, res) {
    res.sendFile(__dirname + '/view/products-introduction.html');
});

// 购物车
app.get('/view/shopping-cart.html', function (req, res) {
    res.sendFile(__dirname + '/view/shopping-cart.html');
});

// 丰富材质
app.get('/view/texture.html', function (req, res) {
    res.sendFile(__dirname + '/view/texture.html');
});

// 材质详情页
app.get('/view/texture-detail.html', function (req, res) {
    res.sendFile(__dirname + '/view/texture-detail.html');
});

// 用户列表
app.get('/view/userlist.html', function (req, res) {
    res.sendFile(__dirname + '/view/userlist.html');
});

app.listen(3011, function () {
    console.log("已启动一人一枕项目，监听3011端口")
});