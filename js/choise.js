var choise = function () {
    return this;
}

//初始化
choise.prototype.init = function () {
    // 初始化事件
    this.initEvent();
    // 清空已选择的本地获取数据
    this.clearLocalstorage();
}

// 清空已选择的本地获取数据
choise.prototype.clearLocalstorage = function () {
    localStorage.removeItem("chooseGender");
    localStorage.removeItem("chooseAge");
    localStorage.removeItem("chooseTexture");
    localStorage.removeItem("chooseComfort");
    localStorage.removeItem("chooseHight");
}

// 初始化事件
choise.prototype.initEvent = function () {

}

$(function () {
    var choiseObj = new choise();
    choiseObj.init();
})