/**
 * Created by lupan on 2019/1/23.
 */
var indexPage = function () {
    return this;
}

// 初始化
indexPage.prototype.init = function () {
    // 只有index页面才清空导航列表
    // 将导航列表保存到本地
    var pagesArr = [window.location.href];
    localStorage.setItem("pagesArr", JSON.stringify(pagesArr));

    // 运行系统打开首页后，获取本机机器唯一标识，保存到本地
    this.initFingerprint();

    // 初始化轮播图
    this.initSwiper();
    // 初始化事件
    this.initEvent();
};

// 运行系统打开首页后，设置本机机器唯一标识
indexPage.prototype.initFingerprint = function () {
    var fingerprint = new Fingerprint().get();
    // 判断如果存在则添加
    if (!localStorage.getItem("fingerprint")) {
        localStorage.setItem("fingerprint", fingerprint);
        console.log("没有机器码，已经生成机器码。")
    }
    console.log(fingerprint);
};

// 初始化轮播图
indexPage.prototype.initSwiper = function () {
    this.mySwiper = new Swiper('.swiper-container', {
        // 循环模式选项
        loop: true,
        speed: 500,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination'
        // },
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素
                this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时运行当前slide动画
                // this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
            }
        }
    })
}

// 初始化事件
indexPage.prototype.initEvent = function () {
    var that = this;

    $(".carousel-video").on("playing", function () {
        that.mySwiper.autoplay.stop();
    })

    $(".carousel-video").on("pause", function () {
        console.log("视频暂停");
        that.mySwiper.autoplay.start();
    })

    $(".carousel-video").on("ended", function () {
        that.mySwiper.autoplay.start();
    })
}

$(function () {
    var indexPageObj = new indexPage();
    indexPageObj.init();
});