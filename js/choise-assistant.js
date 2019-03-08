var choiseAssistant = function () {
    return this;
}

//初始化
choiseAssistant.prototype.init = function () {
    //枕头列表数据
    this.setData();
    //处理枕头标签
    this.setPillowLabel();
    // 从本地获取数据
    this.getChooseData();
    // 根据标签获取枕头数据
    this.getPillowData();
    // 拼接数据
    this.setList();

    // 初始化事件
    this.initEvent();
}

//枕头列表数据
choiseAssistant.prototype.setData = function () {
    this.listData = {
        'cheese': {
            'leftImg': 'assistant-img-white.png',
            'title': '芝士乳胶条枕/本白色',
            'subtitle': 'Cheese Latex',
            'color': '颜色Color：本白 Creamy White',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        },
        'gray': {
            'leftImg': 'assistant-img-gray.png',
            'title': 'TPE弹性体枕／深灰色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：深灰色 Dark Gray',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        },
        'brown': {
            'leftImg': 'assistant-img-brown.png',
            'title': '三角荞麦壳枕／深咖色',
            'subtitle': 'Cheese Latex',
            'color': '颜色Color：深咖色 Dark Brown',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        },
        'pink': {
            'leftImg': 'assistant-img-pink.png',
            'title': '粉色软管枕／浅粉色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：浅粉色 pink',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        },
        'blue': {
            'leftImg': 'assistant-img-blue.png',
            'title': '蓝色软管枕／宝蓝色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：宝蓝色 blue',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        },
        'lightgray': {
            'leftImg': 'assistant-img-lightgray.png',
            'title': 'TPE弹体枕／浅灰色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：浅灰色 White',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        },
        'white': {
            'leftImg': 'assistant-img-white.png',
            'title': '纤维棉枕／白色 ',
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：白色 White',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
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
            'subtitle': 'TPE Elastome',
            'color': '颜色Color：白色 White',
            'hardness': '硬度Hardness：中低 Lower-mid',
            'elasticity': '弹性Elasticity：高 High'
        }
    }
};

//处理枕头标签
choiseAssistant.prototype.setPillowLabel = function () {
    // "baby,infant,child,juvenile,youth,middleAge,oldAge"
    // "man,woman"
    // "texture-soft,texture-hard,texture-tougher"
    // "comfort-true,comfort-false"
    // "hight-low,hight-middle,hight-tall"

    this.pillowLabel = {
        // 乳胶枕（男／女）（软／中）（颈椎不舒适不推荐）（年龄19-99）
        'cheese': ['man', 'woman', 'texture-soft', 'texture-hard', 'comfort-false', 'adult'],
        // 竹炭崖柏（男／女）（中／硬）（颈椎不舒适推荐）（年龄19-99）
        'gray': ['man', 'woman', 'texture-hard', 'texture-tougher', 'comfort-true', 'adult'],
        // 荞麦（男／女）（中／硬）（颈椎不舒适推荐）（年龄19-99）
        'brown': ['man', 'woman', 'texture-hard', 'texture-tougher', 'comfort-true', 'adult'],
        // 粉色软管（女性）（软／中）（颈椎不舒适推荐）（年龄19-99）
        'pink': ['woman', 'texture-soft', 'texture-hard', 'comfort-true', 'adult'],
        // 蓝色软管（男性）（中／硬）（颈椎不舒适推荐）（年龄19-99）
        'blue': ['man', 'texture-hard', 'texture-tougher', 'comfort-true', 'adult'],
        // 灰色软管（男／女）（软／中）（颈椎不舒适不推荐）（年龄19-99）
        'lightgray': ['man', 'woman', 'texture-soft', 'texture-hard', 'comfort-false', 'adult'],
        // 纤维棉枕（男／女）（软／中）（颈椎不舒适不推荐）（年龄19-99）
        'white': ['man', 'woman', 'texture-soft', 'texture-hard', 'comfort-false', 'adult'],
        // 爱做梦的小兔兔（图片稍后提供）（儿童枕）（男／女）（年龄3-9岁）（颈椎不舒适推荐）
        'whiteChild': ['man', 'woman', 'texture-soft', 'texture-hard', 'texture-tougher', 'comfort-true', 'baby', 'infant', 'child']
    }
}

//从本地获取数据
choiseAssistant.prototype.getChooseData = function () {
    this.chooseGender = localStorage.getItem("chooseGender");
    this.chooseAge = localStorage.getItem("chooseAge");
    this.chooseTexture = localStorage.getItem("chooseTexture");
    this.chooseComfort = localStorage.getItem("chooseComfort");
    this.chooseHight = localStorage.getItem("chooseHight");
}

// 根据标签获取枕头数据
choiseAssistant.prototype.getPillowData = function () {
    this.pillowDataArr = [];

    for (var key in this.pillowLabel) {
        var labels = this.pillowLabel[key];
        if (labels.includes(this.chooseGender) &&
            labels.includes(this.chooseAge) &&
            labels.includes(this.chooseTexture) &&
            labels.includes(this.chooseComfort)) {
            this.pillowDataArr.push(key);
        }
    }
    // console.log(pillowDataArr.join(","));
}

//拼接数据
choiseAssistant.prototype.setList = function () {

    if (this.pillowDataArr.length == 0) {
        $("#cartCont").html("<div class='no-data'>根据您选项，我们暂无推荐的枕头！</div>");
        return;
    }

    var htmlArr = [];
    for (var i = 0; i < this.pillowDataArr.length; i++) {
        //获取对应的数据
        var name = this.pillowDataArr[i];
        var data = this.listData[name];

        // htmlArr.push('<li class="cart fix">');
        htmlArr.push('<li class="cart fix" data-type="' + name + '">');
        <!--左边介绍部分-->
        htmlArr.push('<div class="cart-left">');
        <!--左边图片-->
        <!--&lt;!&ndash;左侧图片部分&ndash;&gt;-->
        htmlArr.push('<div class="left-img">');
        htmlArr.push('<img class="cart-img" src="../images/' + data.leftImg + '" alt="">');
        htmlArr.push('<div class="img-bottom"></div>');
        htmlArr.push('</div>');
        <!--右边文字-->
        htmlArr.push('<div class="right-text">');

        htmlArr.push('<p class="text-title">' + data.title + '</p>');
        htmlArr.push('<p class="text-subtitle">' + data.subtitle + '</p>');
        htmlArr.push('<p class="text-intro choise-intro">' + data.color + '</p>');
        htmlArr.push('<p class="text-intro">' + data.hardness + '</p>');
        htmlArr.push('<p class="text-intro">' + data.elasticity + '</p>');

        // htmlArr.push('<p class="text-title">芝士乳胶条枕/本白色</p>');
        // htmlArr.push('<p class="text-subtitle">Cheese Latex</p>');
        // htmlArr.push('<p class="text-intro choise-intro">颜色Color：浅灰 French grey</p>');
        // htmlArr.push('<p class="text-intro">硬度Hardness：中低 Lower-mid</p>');
        // htmlArr.push('<p class="text-intro">弹性Elasticity：高 High</p>')

        htmlArr.push('</div>');
        htmlArr.push('</div>');
        <!--增加数量-->
        htmlArr.push('<p class="cart-right">&yen;499</p>');
        htmlArr.push('</li>')
    }

    $("#cartCont").html(htmlArr.join(""));

}

// 初始化事件
choiseAssistant.prototype.initEvent = function () {
    // 跳转到购物详情页
    $(".cart-left").on("click", function () {
        // 获取类型
        var itemType = $(this).parents(".cart").attr("data-type");
        $(location).attr("href", "../view/products-introduction.html?type=" + itemType);
    });
}


$(function () {
    var choiseAssistantObj = new choiseAssistant();
    choiseAssistantObj.init();
})