<template>
    <container class="container">

        <column class="column">
            <raised-button style="color: red;" @onPressed="onUpdateTitleClick">
                <text style="font-size: 14px;color: white;">updateTitle</text>
            </raised-button>

            <raised-button style="color: green;" @onPressed="onBackgroundColorClick">
                <text style="font-size: 14px;color: white;">backgroundColor</text>
            </raised-button>

            <raised-button style="color: blue;" @onPressed="onSetNavigationBarColorClick">
                <text style="font-size: 14px;color: white;">setNavigationBarColor</text>
            </raised-button>
        </column>
    </container>

</template>
<script>
const wx = weex.requireModule('wxFlutter')

export default {
    data() {
        return {
        }
    },
    computed: {
    },
    created() {
    },
    methods: {

        onUpdateTitleClick() {
            wx.invoke({
                method: 'updateTitle',
                title: 'Test updateTitle'
            }, (ret) => {
                console.log("updateTitle callback")
            })
        },
        onSetNavigationBarColorClick() {
            wx.invoke({
                method: 'setNavigationBarColor',
                appBarColor: '#ff0000'
            }, (ret) => {
                console.log("setNavigationBarColor callback")
            })
        },
        onBackgroundColorClick() {
            wx.invoke({
                method: 'setBackgroundColor',
                backgroundColor: '#00ffff'
            }, (ret) => {
                console.log("setBackgroundColor callback")
            })
        }
    }
}
</script>
<style scoped>
.container {
    padding: 20;
    alignment: top-center;
}
.column {
}

.padding {
    padding: 10;
}
</style>