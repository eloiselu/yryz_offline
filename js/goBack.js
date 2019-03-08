var goBack = function () {
    return this;
};

goBack.prototype.init = function () {
    this.pagesArr = JSON.parse(localStorage.getItem("pagesArr"));

    this.addPage();
    this.initEvent();
};

goBack.prototype.addPage = function () {

    var href = window.location.href;
    if (this.pagesArr[this.pagesArr.length - 1] != href) {
        this.pagesArr.push(href);
    }
    localStorage.setItem("pagesArr", JSON.stringify(this.pagesArr));

    console.log(this.pagesArr);
};

goBack.prototype.initEvent = function () {
    var that = this;

    $(".head-back").on("click", function () {
        that.pagesArr.pop();
        var link = that.pagesArr[that.pagesArr.length - 1];
        window.location.href = that.pagesArr[that.pagesArr.length - 1];
        localStorage.setItem("pagesArr", JSON.stringify(that.pagesArr));

        // window.location.href = document.referrer;
    });
};

$(function () {
    var goBackObj = new goBack();
    goBackObj.init();
});