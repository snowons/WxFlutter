<template>
    <fractionally-sized-box class="scroll-container">
        <single-child-scroll-view>
            <column>
                <center>
                    <text style="font-size:24px;color:#333333;text-align:center;">{{title}}</text>
                </center>
                <padding class="padding">
                    <text style="font-size:18px;color:#808080;">{{desc}}</text>
                </padding>

                <column class="column" v-for="(v,i) in list" :key="i">
                    <gesture-detector class="gesture-detector" @onTapDown="onGroupClick(v)">
                        <div class="group" :style="{color:v.expanded?'#ebebeb':'#ffffff'}">
                            <row class="row">
                                <text style="font-size: 22;color:#333333;">{{v.title}}</text>
                                <icon class="icon" :codePoint="getIcon(v.iconName)"></icon>
                            </row>
                        </div>
                    </gesture-detector>
                    <column v-if="v.expanded">
                        <ink-well @onTapDown="onItemClick(item)" v-for="(item,j) in v.items" :key="j">
                            <div class="cell">
                                <row class="row">
                                    <text style="font-size: 22;color:#333333;">{{item.name}}</text>
                                    <icon class="cell-icon" :codePoint="getIcon('chevron-right')"></icon>
                                </row>
                            </div>
                        </ink-well>
                    </column>
                </column>

                <padding class="padding"></padding>
            </column>
        </single-child-scroll-view>
    </fractionally-sized-box>
</template>
<script>
const eventBus = weex.requireModule('eventBus')
const navigate = weex.requireModule('navigate')
import Icons from "../codepoints.json";
export default {
    data() {
        return {
            title: "\n\nWxFlutter built-in components",
            desc: "The following will show the capabilities of WxFlutter built-in components, the component style is reduced for reference, and the specific property parameters are detailed in the development document",
            list: [
                {
                    "title": "Base",
                    "iconName": "basecamp",
                    "expanded": false,
                    "items": [{
                        "name": "text",
                        "path": "/pages/text.js"
                    }, {
                        "name": "image",
                        "path": "/pages/image.js"
                    }, {
                        "name": "raised-button",
                        "path": "/pages/raised-button.js"
                    }, {
                        "name": "flat-button",
                        "path": "/pages/flat-button.js"
                    }, {
                        "name": "text-filed",
                        "path": "/pages/text-filed.js"
                    }, {
                        "name": "icon",
                        "path": "/pages/icon.js"
                    }, {
                        "name": "transform",
                        "path": "/pages/transform.js"
                    }, {
                        "name": "clip",
                        "path": "/pages/clip.js"
                    }, {
                        "name": "rich-text",
                        "path": "/pages/rich-text.js"
                    }]
                },
                {
                    "title": "View",
                    "iconName": "vector-circle",
                    "expanded": false,
                    "items": [{
                        "name": "container",
                        "path": "/pages/container.js"
                    }, {
                        "name": "list",
                        "path": "/pages/list.js"
                    }, {
                        "name": "indexed-stack",
                        "path": "/pages/indexed-stack.js"
                    }]
                },
                {
                    "title": "Flex",
                    "iconName": "all-inclusive",
                    "expanded": false,
                    "items": [{
                        "name": "center",
                        "path": "/pages/center.js"
                    }, {
                        "name": "column",
                        "path": "/pages/column.js"
                    }, {
                        "name": "padding",
                        "path": "/pages/padding.js"
                    }, {
                        "name": "row",
                        "path": "/pages/row.js"
                    },]
                }
            ],
        }
    },
    computed: {

    },
    methods: {
        getIcon(name) {
            return Icons.material_community_icons[name]
        },
        onGroupClick(item) {
            var timestamp = new Date().getTime()
            console.log("onGroupClick timestamp = " + timestamp)
            item.expanded = !item.expanded
        },
        onItemClick(item) {
            navigate.push({
                title: item.name,
                url: item.path
            }, callback => {
            })
        },
    }
}
</script>
<style lang="less" scoped>
@import './common.less';
</style>