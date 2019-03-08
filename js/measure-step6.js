/**
 * Created by lupan on 2019/1/25.
 */
var measureStep6Page = function () {
    return this;
}

//初始化
measureStep6Page.prototype.init = function () {
//    数据列表
    this.setDate();

    this.setDataListHtml();
}


//枕头数据列表
measureStep6Page.prototype.setDate = function () {
    this.listData = {
        'cheese': {
            'leftImg': 'assistant-img-white.png',
            'title': '芝士乳胶条枕/本白色',
            'subtitle': 'Cheese Latex',
            'color': '颜色Color：本白 Creamy White',
            'hardness':'硬度Hardness：中低 Lower-mid',
            'elasticity':'弹性Elasticity：高 High'
        },
        'gray': {
            'leftImg': 'assistant-img-gray.png',
            'title': 'TPE弹性体枕／深灰色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：深灰色 Dark Gray',
            'hardness':'硬度Hardness：中低 Lower-mid',
            'elasticity':'弹性Elasticity：高 High'
        },
        'brown': {
            'leftImg': 'assistant-img-brown.png',
            'title': '三角荞麦壳枕／深咖色',
            'subtitle': 'Cheese Latex',
            'color': '颜色Color：深咖色 Dark Brown',
            'hardness':'硬度Hardness：中低 Lower-mid',
            'elasticity':'弹性Elasticity：高 High'
        },
        'pink': {
            'leftImg': 'assistant-img-pink.png',
            'title': '粉色软管枕／浅粉色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：浅粉色 pink',
            'hardness':'硬度Hardness：中低 Lower-mid',
            'elasticity':'弹性Elasticity：高 High'
        },
        'blue': {
            'leftImg': 'assistant-img-pink.png',
            'title': '蓝色软管枕／宝蓝色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：宝蓝色 blue',
            'hardness':'硬度Hardness：中低 Lower-mid',
            'elasticity':'弹性Elasticity：高 High'
        },
        'lightgray': {
            'leftImg': 'assistant-img-lightgray.png',
            'title': 'TPE弹体枕／浅灰色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：浅灰色 White',
            'hardness':'硬度Hardness：中低 Lower-mid',
            'elasticity':'弹性Elasticity：高 High'
        },
        'white': {
            'leftImg': 'assistant-img-white.png',
            'title': '纤维棉枕／白色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：白色 White',
            'hardness':'硬度Hardness：中低 Lower-mid',
            'elasticity':'弹性Elasticity：高 High'
        }
    }
}

//数据列表
measureStep6Page.prototype.setDataListHtml = function () {
    var htmlArr = [];
    //获取链接重的参数
    var type = window.location.href.split('?')[1].split('=')[1];
    //获取对应的数据
    var data = this.listData[type];
    var htmlArr = [];

    htmlArr.push('<li class="cart fix">');
    <!--左边介绍部分-->
    htmlArr.push('<div class="step6-left">');
    <!--左边图片-->
    <!--&lt;!&ndash;左侧图片部分&ndash;&gt;-->
    htmlArr.push('<span class="left-img">');
    htmlArr.push('<img class="cart-img" src="../images/ ' + data.leftImg + ' " alt="">');
    htmlArr.push('<div class="img-bottom"></div>');
    htmlArr.push('</span>');
    <!--右边文字-->
    htmlArr.push('<span class="right-text">');
    htmlArr.push('<p class="step6-title">' + data.title + '</p>');
    htmlArr.push('<p class="step6-title">' + data.subtitle + '</p>');
    htmlArr.push('<a class="step6-details">');
    htmlArr.push('<p>了解详情</p>');
    htmlArr.push('</a>');
    htmlArr.push('<p>' + data.color + '</p>');
    htmlArr.push('<p>' + data.hardness + '</p>');
    htmlArr.push('<p>' + data.elasticity + '</p>');
    htmlArr.push('</span>');
    htmlArr.push('</div>');
    htmlArr.push('</li>');

    $('.cart-cont').html(htmlArr.join(''));
}

//初始化事件
measureStep6Page.prototype.initEvent = function () {

}

$(function () {
    var measureStep6PageObj = new measureStep6Page();
    measureStep6PageObj.init();
})