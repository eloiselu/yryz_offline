/**
 * Created by lupan on 2019/1/23.
 */

var indexPage = function () {
    return this;
}

// 初始化
indexPage.prototype.init = function () {
    // 初始化轮播图
    this.initSwiper();
    // 初始化事件
    this.initEvent();
}

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
        pagination: {
            el: '.swiper-pagination'
        },
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

}

$(function () {
    var indexPageObj = new indexPage();
    indexPageObj.init();
})