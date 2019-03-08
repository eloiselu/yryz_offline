/**
 * Created by lupan on 2018/12/18.
 */
var textureDetailPage = function () {
    return this;
}

//初始化
textureDetailPage.prototype.init = function () {
    this.type = window.location.href.split('?')[1].split('=')[1];

    //设置购买枕头列表数据
    this.setData();
    //设置购买枕头列表数据
    this.setDataListHtml();
    //初始化事件
    this.initEvent();
}

//枕头列表数据
textureDetailPage.prototype.setData = function () {
    this.listData = {
        'white': {
            'name': '绒纤云锦棉',
            'headImg': 'textureDetail-white-head.png',
            'textureImg': 'textureDetail-white-img.png',
            'title': '云绒纤维棉',
            'subtitle': 'Soft  Fiber  Cotton',
            'color': 'white',
            'textureHead2': 'textureDetail-white-head2.png',
            'hardnessImg': 'textureDetail-white-hardness.png',
            'elasticityImg': 'textureDetail-white-elasticity.png',
            'feature': 'VCollection经过超过1000次的试验找到接受度最高的纤维棉混合体，云绒纤维棉是由两种不同结构的纤维通过一定比例交织在一起而形成，提供最细腻的睡眠头部支撑感。提供最柔软的触感的1.33d云朵棉和提供加强支撑的3d弹性纤维两种材料分别打散通过螺旋气流混合－纤维交织－形成既拥有柔软度又具备一定弹性的支撑力',
            'suitableCrowd': '柔软睡眠，适合大多数人使用',
            'washingMethod': '可机洗，或用冷水手洗，清洗时要注意不要用洗衣粉，且洗涤的时间不要太久，洗后务必彻底晒干'
        },
        'pink': {
            'name': '粉色TPE弹性体',
            'headImg': 'textureDetail-pink-head.png',
            'textureImg': 'textureDetail-pink-img.png',
            'title': 'PE+TPE 弹性体',
            'subtitle': 'PE+TPE Elastomer',
            'color': 'Pink',
            'textureHead2': 'textureDetail-pink-head2.png',
            'hardnessImg': 'textureDetail-pink-hardness.png',
            'elasticityImg': 'textureDetail-pink-elasticity.png',
            'feature': 'VCollection从日本精心选购的PE+TPE弹性体是一种热塑性弹性体材料，具有高强度高回弹性，环保无毒触感柔软等特点由于拥有舒适的手感，广泛用于人造皮肤通过欧盟EU-10/2011食品级测试标准及欧盟RoHS环保安全标准。 中医养生云：头凉脚热七分饱在睡眠时，头部保持低温有效降低大脑皮层活跃度利于大脑皮层休息。软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量。',
            'suitableCrowd': '颈椎不舒服，长时间坐姿工作压力大年轻人'
        },
        'cheese': {
            'name': '芝士乳胶条',
            'headImg': 'textureDetail-cheese-head.png',
            'textureImg': 'textureDetail-cheese-img.png',
            'title': '芝士乳胶条',
            'subtitle': 'Charcoal  Elastomer+Incienso',
            'color': 'white',
            'textureHead2': 'textureDetail-cheese-head2.png',
            'hardnessImg': 'textureDetail-cheese-hardness.png',
            'elasticityImg': 'textureDetail-cheese-elasticity.png',
            'feature': 'VCollection Team精心选择的“天然芝士乳胶条”（天然乳胶含量达百分之八十）是乳胶枕品类中全新的呈现形式整块的乳胶被冲压成条状，保持了所有乳胶的优势的同时可以最方便的取出和填充给你最方便的高度调节方式，弹性好，有乳胶独特气味，很好的吸湿性和透气性无污染无毒',
            'suitableCrowd': '颈椎不舒服，长时间坐姿工作压力大年轻人'
        },
        'lightgray': {
            'name': '白色TPE弹体',
            'headImg': 'textureDetail-lightgray-head.png',
            'textureImg': 'textureDetail-lightgray-img.png',
            'title': 'PE+TPE弹性体',
            'subtitle': 'PE+TPE  Elastomer',
            'color': 'White',
            'textureHead2': 'textureDetail-lightgray-head2.png',
            'hardnessImg': 'textureDetail-lightgray-hardness.png',
            'elasticityImg': 'textureDetail-lightgray-elasticity.png',
            'feature': 'PE+TPE弹性体是一种热塑性弹性体材料中空管状弹性体在提供完美支撑力的同时有良好的透气性除螨抑菌触感柔软，环保无味极易清洁。具有高强度，高回弹性等特点，由于拥有舒适的手感，广泛用于人造皮肤通过欧盟EU-10/2011食品级测试标准及欧盟RoHS环保安全标准。在睡眠时，头部保持低温，有效降低大脑皮层活跃度，利于大脑皮层休息。软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量',
            'suitableCrowd': '颈椎不舒服，长时间坐姿工作压力大年轻人'
        },
        'blue': {
            'name': '蓝色TPE弹体',
            'headImg': 'textureDetail-blue-head.png',
            'textureImg': 'textureDetail-blue-img.png',
            'title': 'PE+TPE弹性体',
            'subtitle': 'PE+TPE  Elastomer',
            'color': 'Blue',
            'textureHead2': 'textureDetail-blue-head2.png',
            'hardnessImg': 'textureDetail-blue-hardness.png',
            'elasticityImg': 'textureDetail-blue-elasticity.png',
            'feature': 'PE+TPE弹性体是一种热塑性弹性体材料中空管状弹性体在提供完美支撑力的同时有良好的透气性除螨抑菌触感柔软，环保无味极易清洁。具有高强度，高回弹性等特点，由于拥有舒适的手感，广泛用于人造皮肤通过欧盟EU-10/2011食品级测试标准及欧盟RoHS环保安全标准。在睡眠时，头部保持低温，有效降低大脑皮层活跃度，利于大脑皮层休息。软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量',
            'suitableCrowd': '颈椎不舒服，长时间坐姿工作压力大年轻人'
        },
        'brown': {
            'name': '三棱荞麦壳',
            'headImg': 'textureDetail-brown-head.png',
            'textureImg': 'textureDetail-brown-img.png',
            'title': '三棱荞麦壳',
            'subtitle': 'PE+TPE  Elastomer',
            'color': 'Dark Brown',
            'textureHead2': 'textureDetail-brown-head2.png',
            'hardnessImg': 'textureDetail-brown-hardness.png',
            'elasticityImg': 'textureDetail-brown-elasticity.png',
            'feature': '荞麦壳呈棱形，坚而不硬，凉爽舒适，壳与壳之间 自然形成完美透气通道，透气性佳，在地下埋藏百年不变质',
            'suitableCrowd': '颈椎不舒服，长时间坐姿工作压力大年轻人'
        },
        'gray': {
            'name': '竹炭弹性木+香木',
            'headImg': 'textureDetail-gray-head.png',
            'textureImg': 'textureDetail-gray-img.png',
            'title': '竹炭弹性木+香木',
            'subtitle': 'Charcoal  Elastomer+Incienso',
            'color': 'Dark Brown',
            'textureHead2': 'textureDetail-gray-head2.png',
            'hardnessImg': 'textureDetail-gray-hardness.png',
            'elasticityImg': 'textureDetail-gray-elasticity.png',
            'feature': 'VCollection用高超的工艺将精心研发的竹炭素和 TPE弹性体一体成型，除具备细密多孔、抑菌驱虫 等特点天然的崖柏颗粒有对人身体有益的化学成分挥发油具有扩张支气管、抑菌、抗肿瘤、抗氧化等药理作用。在日本，柏木香气被誉为"空气维生素"，有癌症专家让病人在柏木林中保健治疗。用崖柏做熏香让崖柏的香气环绕在病人周围，可以改善病人心情，提高免疫力竹炭弹性体+天然的崖柏木颗粒，同时提供柔软和弹性对于是头部压力的两个中药体验因素。',
            'suitableCrowd': '老少皆宜，尤其是易出汗体质的人群'
        }
    }
};

//数据列表
textureDetailPage.prototype.setDataListHtml = function () {
    //获取链接重的参数
    // this.type= window.location.href.split('?')[1].split('=')[1];
    //获取对应的数据
    var data = this.listData[this.type];

    var htmlArr = [];

    <!--顶部图片-->
    htmlArr.push('<img class="texture-head1" src="../images/' + data.headImg + ' ">');

    <!--中间材质部分-->
    htmlArr.push('<div class="texture-name-wrap">');
    htmlArr.push('<img class="texture-name-img" src="../images/' + data.textureImg + '">');
    htmlArr.push('<div class="texture-name">');
    htmlArr.push('<p class="texture-title">' + data.title + '</p>');
    htmlArr.push('<p class="texture-subtitle">' + data.subtitle + '</p>');
    htmlArr.push('<p class="texture-color">颜色 Color: ' + data.subtitle + '</p>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');
    <!--顶部图片2-->
    htmlArr.push('<img class="texture-head2" src="../images/' + data.textureHead2 + '">');

    <!--介绍部分-->
    htmlArr.push('<div class="texture-text-wrap">');

    <!--硬度-->
    htmlArr.push('<div class="texture-text-line">');
    <!--左侧名称部分-->
    htmlArr.push('<div class="texture-text-name">');
    htmlArr.push('<div class="texture-name-title">硬度: </div>');
    htmlArr.push('<div class="texture-name-subtitle">Hardness</div>');
    htmlArr.push('</div>');
    <!--右侧描述部分-->
    htmlArr.push('<div class="texture-desc">');
    htmlArr.push('<img class="texture-scaleplate" src="../images/textureDetail-scaleplate.png">');
    htmlArr.push('<img class="texture-hardness" src="../images/' + data.hardnessImg + '">');
    htmlArr.push('</div>');
    htmlArr.push('</div>');


    <!--弹性-->
    htmlArr.push('<div class="texture-text-line">');
    <!--左侧名称部分-->
    htmlArr.push('<div class="texture-text-name">');
    htmlArr.push('<div class="texture-name-title">弹性: </div>');
    htmlArr.push('<div class="texture-name-subtitle">Elasticity</div>');
    htmlArr.push('</div>');
    <!--右侧描述部分-->
    htmlArr.push('<div class="texture-desc">');
    htmlArr.push('<img class="texture-scaleplate" src="../images/textureDetail-scaleplate.png">');
    htmlArr.push('<img class="texture-hardness" src="../images/' + data.elasticityImg + '">');
    htmlArr.push('</div>');
    htmlArr.push('</div>');

    <!--特性-->
    htmlArr.push('<div class="texture-text-line">');
    <!--左侧名称部分-->
    htmlArr.push('<div class="texture-text-name">');
    htmlArr.push('<div class="texture-name-title">特性：</div>');
    htmlArr.push('<div class="texture-name-subtitle">Feature</div>');
    htmlArr.push('</div>');
    <!--右侧描述部分-->
    htmlArr.push('<div class="texture-desc">');
    htmlArr.push('<p> ' + data.feature + '</p>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');

    <!--适宜人群-->
    htmlArr.push('<div class="texture-text-line">');
    <!--左侧名称部分-->
    htmlArr.push('<div class="texture-text-name">');
    htmlArr.push('<div class="texture-name-title">适宜人群:</div>');
    htmlArr.push('<div class="texture-name-subtitle">Suitable Crowd</div>')
    htmlArr.push('</div>');
    <!--右侧描述部分-->
    htmlArr.push('<div class="texture-desc">');
    htmlArr.push('<p> ' + data.suitableCrowd + ' </p>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');
    htmlArr.push('</div>');
    <!--底部按钮-->
    htmlArr.push('<div class="foot-btn">');
    htmlArr.push('<!--<p>马上了解产品</p>-->');
    htmlArr.push('<a href="javascript:;" class="btn">马上了解产品</a>');
    htmlArr.push('</div>');

    $('.main').html(htmlArr.join(''));
};

//初始化事件
textureDetailPage.prototype.initEvent = function () {
    var that = this;

    $(".btn").on('click', function () {
        $(location).attr("href", "../view/products-introduction.html?type=" + that.type);
    })

};

$(function () {
    var textureDetailPageObj = new textureDetailPage();
    textureDetailPageObj.init();
});