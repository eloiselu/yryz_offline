/**
 * Created by lupan on 2018/12/31.
 */
var assistantPage = function () {
    return this;
}

//初始化
assistantPage.prototype.init = function () {
    //设置购买枕头列表数据
    this.initData();
    //初始化事件
    this.initEvent();

    // 默认选中儿童
    $('.assistant-left .assistant-li[data-type="baby"]').trigger("click");
};

//枕头列表数据
assistantPage.prototype.initData = function () {
    this.pillowDatas = {
        'pink': {
            'leftImg': 'assistant-img-pink.png',
            'title': '粉色软管枕／浅粉色',
            'subtitle': 'PE+TPE Elastomer',
            'description': '粉色软管枕专门为女性打造，具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量',
        },
        'blue': {
            'leftImg': 'assistant-img-blue.png',
            'title': '蓝色软管枕／蓝色',
            'subtitle': 'PE+TPE Elastomer',
            'description': '蓝色软管枕专门为精英男士打造，具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量'
        },
        'brown': {
            'leftImg': 'assistant-img-brown.png',
            'title': '三角荞麦壳枕／深咖色',
            'subtitle': 'PE+TPE Elastomer',
            'description': '荞麦壳呈棱形，坚而不硬，凉爽舒适壳与壳之间自然形成完美透气通道透气性佳，在地下埋藏百年不变质'
        },
        'cheese': {
            'leftImg': 'assistant-img-cheese.png',
            'title': '芝士乳胶条枕/本白色',
            'subtitle': 'Cheese Latex',
            'description': '芝士乳胶的优势是让你可以最方便的 取出和填充给你最方便的高度调节方式，弹性好，有乳胶独特气味很好的吸湿性和透气性无污染无毒'
        },
        'white': {
            'leftImg': 'assistant-img-white.png',
            'title': '纤维棉枕／白色',
            'subtitle': 'PE+TPE Elastomer',
            'description': '提供最柔软的触感的1.33d云朵棉和提供加强支撑的3d弹性纤维两 种材料分别打散通过螺旋气流混合－纤维交织－形成既拥有柔软度又具备一定弹性支撑力'
        },
        'lightgray': {
            'leftImg': 'assistant-img-lightgray.png',
            'title': 'TPE弹性体枕／浅灰色',
            'subtitle': 'TPE Elastome',
            'description': '为长期压力大的年轻人准备软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量'
        },
        'gray': {
            'leftImg': 'assistant-img-gray.png',
            'title': '竹炭软管枕／深棕色',
            'subtitle': 'TPE Elastome',
            'description': '竹炭弹性体＋天然的崖柏木颗粒同时提供柔软和弹性对于是头部压力的两个重要体验要素'
        },
        'pinkJuvenile': {
            'leftImg': 'assistant-img-pinkJuvenile.png',
            'title': '有机棉+软管枕／粉色 ',
            'subtitle': 'Orginc+TPE Elastomer',
            // 'description': '提供最柔软的触感的1.33d云朵棉和提供加强支撑的3d弹性纤维两 种材料分别打散通过螺旋气流混合－纤维交织－形成既拥有柔软度又具备一定弹性支撑力'

        },
        'whiteChild': {
            'leftImg': 'assistant-img-whiteChild.png',
            'title': '有机棉+软管枕／白色 ',
            'subtitle': 'Orginc+TPE Elastomer',
            // 'description': '提供最柔软的触感的1.33d云朵棉和提供加强支撑的3d弹性纤维两 种材料分别打散通过螺旋气流混合－纤维交织－形成既拥有柔软度又具备一定弹性支撑力'
        }
    };

    this.classifyData = {
        'baby': {
            'topImg': 'assistant-bigimg-baby.png',
            'pillows': ["whiteChild"]
        },
        'infant': {
            'topImg': 'assistant-bigimg-infant.png',
            'pillows': ["whiteChild"]
        },
        'child': {
            'topImg': 'assistant-bigimg-child.png',
            'pillows': ["whiteChild", "pink", "blue", "brown"]
        },
        'juvenile': {
            'topImg': 'assistant-bigimg-juvenile.png',
            'pillows': ["cheese", "pink", "blue", "gray", "brown"]
        },
        'youth': {
            'topImg': 'assistant-bigimg-youth.png',
            'pillows': ["white", "cheese", "pink", "blue", "brown"]
        },
        'middleAge': {
            'topImg': 'assistant-bigimg-middle.png',
            'pillows': ["white", "cheese", "lightgray", "gray", "brown"]
        },
        'oldAge': {
            'topImg': 'assistant-bigimg-old.png',
            'pillows': ["white", "gray", "brown"]
        },
        'man': {
            'topImg': 'assistant-bigimg-man.png',
            'pillows': ["cheese", "lightgray", "blue", "gray", "brown"]
        },
        'woman': {
            'topImg': 'assistant-bigimg-woman.png',
            'pillows': ["cheese", "white", "lightgray", "pink", "brown"]
        },
        'richMaterial': {
            'topImg': 'assistant-bigimg-hard.png',
            'pillows': ["cheese", "white", "lightgray", "pink", "blue", "gray", "brown"]
        }
    }
};

// 设置数据列表
assistantPage.prototype.setDataListHtml = function (classifyDataObj) {
    // 设置顶部大图
    $("#topImg").attr("src", "../images/" + classifyDataObj.topImg);

    // 设置数据列表
    var htmlArr = [];

    for (var i = 0; i < classifyDataObj.pillows.length; i++) {
        // 获取对应的枕头数据
        var pillowData = this.pillowDatas[classifyDataObj.pillows[i]];

        htmlArr.push('<li data-type="' + classifyDataObj.pillows[i] + '">');
        // 左侧图片部分
        htmlArr.push('<div class="list-left">');
        htmlArr.push('<img src="../images/' + pillowData.leftImg + '">');
        htmlArr.push('<div class="img-bottom"></div>');
        htmlArr.push('</div>');
        // 右侧文本部分
        htmlArr.push('<div class="list-right">');
        htmlArr.push('<p class="list-title">' + pillowData.title + '</p>');
        htmlArr.push('<p class="list-subtitle">' + pillowData.subtitle + '</p>');
        htmlArr.push('<div class="buy-button-wrap">');
        htmlArr.push('<button class="buy-button">立即购买</button>');
        htmlArr.push('</div>');
        htmlArr.push('<p class="list-desc">' + pillowData.description + '</p>');
        htmlArr.push('</div>');
        htmlArr.push('</li>');
    }

    $("#assistantRightList").html(htmlArr.join(""));
};

// 数据列表
assistantPage.prototype.setDataListHtml_jing = function () {

    var htmlArr = [];

    //获取链接重的参数
    var type = window.location.href.split('?')[1].split('=')[1];
    //获取对应的数据
    var data = this.listData[type];

    var htmlArr = [];
    <!--左边列表选择部分-->
    htmlArr.push('<div class="assistant-list">');
    htmlArr.push('<ul class="assistant-ul">');
    htmlArr.push('<li class="assistant-li" id="child"><a href="javascript:;">儿童 (3-6岁)</a></li>');
    htmlArr.push('<li class="assistant-li" id="juvenile"><a href="javascript:;">少年 (7-18岁)</a></li>');
    htmlArr.push('<li class="assistant-li" id="youth"><a href="javascript:;">青年 (19-34岁)</a></li>');
    htmlArr.push('<li class="assistant-li" id="middleAge"><a href="javascript:;">中年 (35-54岁)</a></li>');
    htmlArr.push('<li class="assistant-li list-small" id="oldAge"><a href="javascript:;">老年 (55岁)</a></li>');
    htmlArr.push('<li class="assistant-li list-small" id="man"><a href="javascript:;">适宜男士</a></li>');
    htmlArr.push('<li class="assistant-li list-small" id="woman"><a href="javascript:;">女士精选</a></li>');
    htmlArr.push('<li class="assistant-li list-small" id="richMaterial"><a href="javascript:;">丰富材质</a></li>');
    htmlArr.push('<li class="assistant-li list-small" id="softSort"><a href="javascript:;">从软到硬</a></li>');
    htmlArr.push('</ul>');
    htmlArr.push('</div>');
    //右边详情
    htmlArr.push('<div class="assistant-right">');
    <!--上边大图-->
    htmlArr.push('<img src="../images/' + data.bigImg + '" alt="">');
    <!--下边详情-->
    htmlArr.push('<div class="assistant-particulars">');
    <!--左边图片-->
    htmlArr.push('<img class="particulars-img" src="../images/' + data.leftImg + '" alt="">');
    <!--右边介绍-->
    htmlArr.push('<span class="particulars-text">');
    htmlArr.push('<p class="text-title">' + data.title + '</p>');
    htmlArr.push('<p class="text-subtitle">' + data.subtitle + '</p>');
    htmlArr.push('<a href="javascript:;" class="text-join">加入购物车</a>');
    htmlArr.push('<p class="text-intro">' + data.description + '</p>');
    htmlArr.push('</span>');
    htmlArr.push('</div>');

    htmlArr.push('<div class="assistant-particulars">');
    <!--左边图片-->
    htmlArr.push('<img class="particulars-img" src="../images/' + data.leftImg + '" alt="">');
    <!--右边介绍-->
    htmlArr.push('<span class="particulars-text">');
    htmlArr.push('<p class="text-title">' + data.title + '</p>');
    htmlArr.push('<p class="text-subtitle">' + data.subtitle + '</p>');
    htmlArr.push('<a href="javascript:;" class="text-join">加入购物车</a>');
    htmlArr.push('<p class="text-intro">' + data.description + '</p>');
    htmlArr.push('</span>');
    htmlArr.push('</div>');

    $('.main').html(htmlArr.join(''));
};

// 初始化事件
assistantPage.prototype.initEvent = function () {
    var that = this;

    // 左侧列表分类点击事件
    $(".assistant-left .assistant-li").on("click", function () {
        // 设置a标签的选中状态
        $(this).siblings().find("a").removeClass("active");
        $(this).find("a").addClass("active");

        // 获取对应类型的数据
        var classifyDataObj = that.classifyData[$(this).attr("data-type")];
        // 设置数据列表
        that.setDataListHtml(classifyDataObj);
    });

    // 图片点击事件，跳转到材质详情页
    $("#assistantRightList").on("click", ".list-left", function () {
        // window.location.href = window.location.origin + "/view/texture-detail.html?type=" + $(this).parents("li").attr("data-type");
        // $(location).attr("href","../view/texture-detail.html?type=" + $(this).parents("li").attr("data-type"));
        $(location).attr("href","../view/products-introduction.html?type=" + $(this).parents("li").attr("data-type"));
    });

    // 立即购买点击事件，跳转到购买详情页
    $("#assistantRightList").on("click", ".buy-button", function () {
        // window.location.href = window.location.origin + "/view/products-introduction.html?type=" + $(this).parents("li").attr("data-type");
        $(location).attr("href","../view/products-introduction.html?type=" + $(this).parents("li").attr("data-type"));
    });
};

$(function () {
    var assistantPageObj = new assistantPage();
    assistantPageObj.init();
});