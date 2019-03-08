/**
 * Created by lupan on 2019/1/16.
 */

var measure = function () {
    return this;
}

//初始化
measure.prototype.init = function () {
    //初始化事件
    this.initEvent();

    //清空已选择的本地获取数据
    this.clearLocalstorage();
};

//清空已选择的本地获取数据
measure.prototype.clearLocalstorage = function () {
    localStorage.removeItem("measureGender");
    localStorage.removeItem("measureHair");
    localStorage.removeItem("sideFile");
    localStorage.removeItem("positiveFile");
}

//初始化事件
measure.prototype.initEvent = function () {

};

$(function () {
    var measureObj = new measure();
    measureObj.init();
});