/**
 * Created by lupan on 2018/12/18.
 */
var shoppingCartPage = function () {
    return this;
}

//初始化
shoppingCartPage.prototype.init = function () {
    // 获取本地数据
    this.shopCartData = JSON.parse(localStorage.getItem("shopCartData"));

    //设置购买枕头列表数据
    this.setData();
    //设置购买枕头列表数据
    this.setDataListHtml();
    //初始化事件
    this.initEvent();
};

//枕头列表数据
shoppingCartPage.prototype.setData = function () {
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
            'leftImg': 'assistant-img-blue.png',
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
        },
        'pinkJuvenile': {
            'leftImg': 'assistant-img-pinkJuvenile.png',
            'title': '有机棉+软管枕／粉色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：粉色 Pink',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        },
        'whiteChild': {
            'leftImg': 'assistant-img-whiteChild.png',
            'title': '有机棉+软管枕／白色 ',
            'subtitle': 'PE+TPE Elastomer',
            'color': '颜色Color：白色 White',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        }
    }
};

//数据列表
shoppingCartPage.prototype.setDataListHtml = function () {
    if (!this.shopCartData) {
        return;
    }

    // 隐藏无数据提示
    $(".no-data").hide();

    // 遍历绑定数据
    var htmlArr = [];
    for (var key in this.shopCartData) {

        //获取对应的数据
        var data = this.listData[key];

        htmlArr.push('<li class="cart fix" data-type="' + key + '">');
        <!--左边介绍部分-->
        htmlArr.push('<div class="cart-left">');
        <!--左边图片-->
        htmlArr.push('<div class="left-img">');
        htmlArr.push('<img class="cart-img" src="../images/' + data.leftImg + '" alt="">');

        htmlArr.push('<div class="img-bottom"></div>');
        htmlArr.push('</div>');
        <!--右边文字-->
        htmlArr.push('<div class="right-text">');
        htmlArr.push('<p class="text-title">' + data.title + '</p>');
        htmlArr.push('<p class="text-subtitle">' + data.subtitle + '</p>');
        htmlArr.push('<p class="text-money">&yen;499</p>')
        htmlArr.push('<p class="text-intro">' + data.color + '</p>');
        htmlArr.push('<p class="text-intro">' + data.hardness + '</p>');
        htmlArr.push('<p class="text-intro">' + data.elasticity + '</p>');
        htmlArr.push('</div>');
        htmlArr.push('</div>');
        <!--增加数量-->
        htmlArr.push('<div class="cart-right">');
        htmlArr.push('<button type="button" class="but button-minus button-down">-</button>');
        htmlArr.push('<input type="text" class="button-count" value="' + this.shopCartData[key] + '" readonly="readonly">');
        htmlArr.push('<button type="button" class="button-minus button-up">+</button>');
        htmlArr.push('</div>');
        htmlArr.push('</li>');
    }

    $('#cartCont').html(htmlArr.join(''));

    // 判断如果ul中无数据了，则显示无数据
    if ($("#cartCont > li").length === 0) {
        $(".no-data").show();
    }
};

//初始化事件
shoppingCartPage.prototype.initEvent = function () {
    var that = this;

    // 减少按钮的点击事件
    $(".button-down").on("click", function () {
        // 获取类型
        var itemType = $(this).parents(".cart").attr("data-type");
        // 获取购物数量
        var numText = Number($(this).siblings(".button-count").val());

        // 如果购物车数量为1
        if (numText > 1) {
            // 数量-1
            $(this).siblings(".button-count").val(numText - 1);
            // 设置本地数据的数量
            that.shopCartData[itemType] = $(this).siblings(".button-count").val();
        }
        else {
            // 如果等于0则移除该条数据，与移除本地对象中的该条数据
            $(this).parents(".cart").remove();
            delete that.shopCartData[itemType];
        }

        // 设置到本地
        localStorage.setItem("shopCartData", JSON.stringify(that.shopCartData));

        console.log(localStorage.getItem("shopCartData"));

        // 判断如果ul中无数据了，则显示无数据
        if ($("#cartCont > li").length === 0) {
            $(".no-data").show();
        }
    });

    // 添加按钮的点击事件
    $(".button-up").on("click", function () {
        // 获取购物数量
        var numText = Number($(this).siblings(".button-count").val());
        // 数量+1
        $(this).siblings(".button-count").val(numText + 1);

        // 获取类型
        var itemType = $(this).parents(".cart").attr("data-type");
        // 设置本地数据的数量
        that.shopCartData[itemType] = $(this).siblings(".button-count").val();
        // 设置到本地
        localStorage.setItem("shopCartData", JSON.stringify(that.shopCartData));

        console.log(localStorage.getItem("shopCartData"));
    });

    // 跳转到购物详情页
    $(".cart-left").on("click", function () {
        // 获取类型
        var itemType = $(this).parents(".cart").attr("data-type");
        $(location).attr("href","../view/products-introduction.html?type=" + itemType);
    });
};

$(function () {
    var shoppingCartPageObj = new shoppingCartPage();
    shoppingCartPageObj.init();
});


