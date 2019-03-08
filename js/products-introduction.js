/**
 * Created by lupan on 2019/1/2.
 */

var productsIntroductionPage = function () {
    return this;
};

//初始化
productsIntroductionPage.prototype.init = function () {
    //获取链接重的参数
    this.type = window.location.href.split('?')[1].split('=')[1];

    //设置购买枕头列表数据
    this.setData();
    //设置购买枕头列表数据
    this.setDataListHtml();
    //初始化事件
    this.initEvent();
};

//枕头列表数据
productsIntroductionPage.prototype.setData = function () {
    this.listData = {
        'lightgray': {
            'bigImg': 'productsIntroduction-img-lightgray.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅灰色 3D 网 TPE 弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'blue': {
            'bigImg': 'productsIntroduction-img-blue.png',
            'title': '智能测量＋专属调节',
            'subtitle': '宝蓝色 3D 网 TPE 弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'pink': {
            'bigImg': 'productsIntroduction-img-pink.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅粉色 3D 网 TPE 弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'brown': {
            'bigImg': 'productsIntroduction-img-brown.png',
            'title': '智能测量＋专属调节',
            'subtitle': '深咖色 3D 网 进口三棱荞麦壳枕  Buckwheat Shell',
            'feature': '阳光下晾晒清洁',//
            'hotNum': '20'
        },
        'cheese': {
            'bigImg': 'productsIntroduction-img-cheese.png',
            'title': '智能测量＋专属调节',
            'subtitle': '本白色 60 支绗缝 天然乳胶枕  Cheese Latex',
            'feature': '可水洗TPE弹性粒子',//
            'hotNum': '20'
        },
        'white': {
            'bigImg': 'productsIntroduction-img-white.png',
            'title': '智能测量＋专属调节',
            'subtitle': '本白色 3D 网 双重纤维棉枕  Fiber cotton',
            'feature': '可水洗TPE弹性粒子',//
            'hotNum': '20'
        },
        'gray': {
            'bigImg': 'productsIntroduction-img-gray.png',
            'title': '智能测量＋专属调节',
            'subtitle': '深灰色 3D 网 竹炭TPE弹性体+香木球枕  Bamboo charcoal',
            'feature': '可水洗TPE弹性粒子',//
            'hotNum': '20'
        },
        'pinkJuvenile': {
            'bigImg': 'productsIntroduction-img-pinkJuvenile.png',
            'title': '智能测量＋专属调节',
            'subtitle': '浅粉色 3D 网 TPE 弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        },
        'whiteChild': {
            'bigImg': 'productsIntroduction-img-whiteChild.png',
            'title': '智能测量＋专属调节',
            'subtitle': '白色 3D 网 TPE 弹性体枕  TPE Elastomer',
            'feature': '可水洗TPE弹性粒子',
            'hotNum': '20'
        }
    }
};

// 数据列表
productsIntroductionPage.prototype.setDataListHtml = function () {
    //获取对应的数据
    var data = this.listData[this.type];

    // 设置图片
    $(".products-img").attr("src", "../images/" + data.bigImg);
    // 标题
    $(".products-title").html(data.title);
    // 副标题
    $(".products-subtitle").html(data.subtitle);
    // 描述
    $(".products-text").html(data.feature + " 热销 20万件");

    // 设置购物数量
    // 获取本地数据
    var shopCartData = localStorage.getItem("shopCartData");
    if (shopCartData) {
        shopCartData = JSON.parse(shopCartData);
        $("#numText").val(shopCartData[this.type] || 1);
        // 如果选中数量不等于1，则移除减少的禁用样式
        if ($("#numText").val() != "1") {
            $("#minusNum").removeClass("forbidden");
        }
    }
};

//数据列表
productsIntroductionPage.prototype.setDataListHtml_jing = function () {
    var htmlArr = [];

    //获取链接重的参数
    var type = window.location.href.split('?')[1].split('=')[1];
    //获取对应的数据
    var data = this.listData[type];

    var htmlArr = [];
    <!--图片介绍-->
    htmlArr.push('<img class="products-img" src="../images/' + data.bigImg + '" alt="">');
    htmlArr.push('<div class="products-imgtext">7天无忧退货<span class="imgtext-hg">-</span>48小时极速退款<span class="imgtext-hg">-</span>满200元免邮费</div>');
    <!--商品描述-->
    htmlArr.push('<div class="products-describe">');
    htmlArr.push('<p class="products-title">' + data.title + '</p>');
    htmlArr.push('<p class="products-subtitle">' + data.subtitle + '</p>');
    htmlArr.push('<p class="products-text">' + data.feature + '</p>');
    htmlArr.push('<p class="products-text">' + data.feature + '热销' + data.hotNum + '万件</p>');
    htmlArr.push('<div class="products-select">');
    htmlArr.push('<a href="javascript:;" class="pro-link">更多选择</a>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');
    <!--请选择规格数量-->
    htmlArr.push('<div class="products-specification">');
    htmlArr.push('<span class="specification-num">请选择规格数量</span>');
    htmlArr.push('<span class="specification-gt"><a href="javascript:;" class="fa fa-chevron-right"></a></span>');
    htmlArr.push('</div>');
    <!--商品参数-->
    htmlArr.push('<div class="products-parameter fix">');
    htmlArr.push('<p class="parameter-text">商品参数</p>');
    htmlArr.push('<div class="parameter-join">');
    htmlArr.push('<a href="javascript:;" class="par-join">加入购物车</a>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');

    $('.main').html(htmlArr.join(''));
}


//初始化事件
productsIntroductionPage.prototype.initEvent = function () {
    var that = this;

    // 减少按钮的点击事件
    $("#minusNum").on("click", function () {
        // 获取购物数量
        var numText = Number($("#numText").val());

        // 如果购物车数量为1
        if (numText > 1) {
            // 数量-1
            $("#numText").val(numText - 1);
        }

        if (Number($("#numText").val()) == 1) {
            // 添加禁用属性
            $(this).addClass("forbidden");
        }
    });

    // 添加按钮的点击事件
    $("#addNum").on("click", function () {
        // 获取购物数量
        var numText = Number($("#numText").val());
        // 去掉减少按钮的禁用属性
        $("#minusNum").removeClass("forbidden");
        // 数量+1
        $("#numText").val(numText + 1);
    });

    // 加入购物车按钮点击事件
    $("#shoppingBtn").on("click", function () {
        // 将购物数据添加到本地
        // 先获取本地购物车数据
        var shopCartData = localStorage.getItem("shopCartData");
        shopCartData = shopCartData ? JSON.parse(shopCartData) : {};
        // 设置对应加入购物车的数量
        shopCartData[that.type] = $("#numText").val();
        // 再设置到本地
        localStorage.setItem("shopCartData", JSON.stringify(shopCartData));

        console.log(localStorage.getItem("shopCartData"));

        // 跳转到购物车页面
        $(location).attr("href","../view/shopping-cart.html");
    });
};

$(function () {
    var productsIntroductionPageObj = new productsIntroductionPage();
    productsIntroductionPageObj.init();
});