<template>
    <fractionally-sized-box class="scroll-container">
        <single-child-scroll-view>
            <column class="column">
                <container class="row-container">
                    <row>
                        <container class="image-container">
                            <image class="image" :src="detail.image"></image>
                        </container>
                        <column class="column">
                            <container>
                                <text class="title">{{"书名：" + detail.title}}</text>
                            </container>
                            <container>
                                <text class="title">{{"作者：" + detail.author}}</text>
                            </container>
                            <container>
                                <text class="title">{{"出版社：" + detail.publisher}}</text>
                            </container>
                            <container>
                                <text class="title">{{"副标题：" + detail.subtitle}}</text>
                            </container>
                        </column>
                    </row>
                </container>
                <container class="label-container">
                    <text class="summary-label">内容简介</text>
                </container>
                <container class="summary-container">
                    <text class="summary">{{detail.summary}}</text>
                </container>
                <container class="label-container">
                    <text class="summary-label">作者简介</text>
                </container>
                <container class="summary-container">
                    <text class="author">{{detail.author_intro}}</text>
                </container>
                <container class="label-container">
                    <text class="summary-label">目录</text>
                </container>
                <container class="catalog-container">
                    <text class="catalog">{{catalogShort}}</text>
                </container>
                <container class="more-container">
                    <raised-button class="more-btn" @onPressed="onMoreClick">
                        <text class="more">{{btnText}}</text>
                    </raised-button>
                </container>
            </column>
        </single-child-scroll-view>
    </fractionally-sized-box>
</template>
<script>
export default {
    data() {
        return {
            name: 'Snow',
            catalogShort: "",
            showLong: false,
            btnText: "查看更多",
            detail: {
                title: '历史学家的修养和技艺',
                catalog: '在当代中国，社会群体干预历史写作的现象并不常见，现实政治往往以另外的方式作用于历史编纂。20世纪30年代，历史学家蒋廷黻写成《中国近代史大纲》，最后一节题为“蒋总裁贯彻总理的遗教”，不免使人联想到他与国民党政权的特殊关系；近60年后，大陆重印这本书，则以这一节“所论有失公允”为由，毫不留情地予以删去。蒋廷黻当年写这一节，就有“蛇足”意味；而重版时的删削，则有“不尊重历史”之嫌。已经写成的史书尚且可以在现实力量的作用下任意删改，而在写作过程中依据现实要求来取舍和诠释，就更不足为怪了',
                author: '李剑鸣',
                publisher: '上海三联书店',
                subtitle: '治史三书',
                summary: '本书取材自李剑鸣教授开设的史学方法课程，前身为此课程的教学讲义。为初学者简要梳理史学方法论，并介绍了古今中外史学大家的治学经验。',
                author_intro: '李剑鸣，1960年6月生，湖南常德人，历史学博士。现为北京大学历史学系教授、博士生导师，南开大学近现代史研究中心研究人员，兼任中国美国史研究会理事长、国务院学位委员会学科评议组成员、教育部社会科学委员会委员。著有《大转折的年代》、《文化的边疆》、《美国的奠基时代》等。',
                image: 'https://img1.doubanio.com/view/subject/l/public/s4129408.jpg'
            }
        }
    },
    computed: {
        getStyle() {
            return {
                width: 750,
                color: this.name == 'Snow' ? 'red' : 'blue',
                height: 100
            }
        }
    },
    methods: {
        onclick() {
            var result = this.color1 === "black" ? "green" : "black";
            this.color1 = result;
            this.color2 = result;
            this.color3 = result;

        },
        onMoreClick(e) {
            console.log("js --- onMoreClick ")
            this.showLong = !this.showLong;
            var catalogShort = this.detail.catalog;
            var btnText = "收起更多";
            if (!this.showLong) {
                if (catalogShort.length > 50) {
                    catalogShort = catalogShort.substring(0, 50) + "...";
                }
                btnText = "查看更多";
            }
            this.btnText = btnText;
            this.catalogShort = catalogShort;
        }
    }
}
</script>
<style scoped>
/* detail */
.scroll-container {
    width-factor: 1;
    height-factor: 1;
}

.column {
    cross-axis-alignment: start;
}

.row-container {
    color: white;
    padding: 10;
}

.image-container {
    width: 120px;
    height: 160px;
    margin-right: 5;
}

.title {
    font-size: 14px;
    color: black;
}

.summary-container {
    color: white;
    padding: 10;
}

.label-container {
    padding-left: 10;
    padding-top: 5;
    padding-bottom: 5;
}

.summary-label {
    font-size: 16;
    color: green;
}

.catalog-container {
    color: white;
    padding-top: 10;
    padding-left: 10;
    padding-right: 10;
}

.more-container {
    padding-left: 10;
    padding-right: 10;
    padding-bottom: 10;
    color: white;
}

.more-btn {
    color: white;
}

.more {
    color: blue;
}
</style>