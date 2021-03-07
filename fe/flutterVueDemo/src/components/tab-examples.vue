<template>
    <fractionally-sized-box class="scroll-container">
        <single-child-scroll-view>

            <column class="column">
                <center>
                    <text style="font-size:24px;color:#333333;text-align:center;">{{title}}</text>
                </center>
                <padding class="padding">
                    <text style="font-size:18px;color:#808080;">{{desc}}</text>
                </padding>

                <column class="column" v-for="(v,i) in list" :key="i">
                    <gesture-detector @onTapDown="onGroupClick(v)">
                        <div class="group" :style="{color:v.expanded?'#ebebeb':'#ffffff'}">
                            <row class="row">
                                <text style="font-size: 22;color:#333333;">{{v.title}}</text>
                                <icon class="icon" :codePoint="getIcon(v.iconName)"></icon>
                            </row>
                        </div>
                    </gesture-detector>
                    <gesture-detector @onTapDown="onItemClick(item)" v-for="(item,j) in v.items" :key="j">
                        <div class="cell">
                            <row class="row">
                                <text style="font-size: 22;color:#333333;">{{item.name}}</text>
                                <icon class="cell-icon" :codePoint="getIcon('chevron-right')"></icon>
                            </row>
                        </div>
                    </gesture-detector>
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
            title: "\n\nWxFlutter Examples",
            desc: "The following will show some simple examples",
            list: [
                {
                    "title": "Examples",
                    "iconName": "chevron-down",
                    "items": [{
                        "name": "env",
                        "path": "/pages/examples/env.js"
                    },
                    {
                        "name": "demo",
                        "path": "/pages/examples/demo.js"
                    }, {
                        "name": "book",
                        "path": "/pages/examples/book.js"
                    }]
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