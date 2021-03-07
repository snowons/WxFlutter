<template>
    <list-view class="start">
        <container class="label-container">
            <text class="label-text">center</text>
        </container>
        <center>
            <text>111</text>
        </center>

        <container class="label-container">
            <text class="label-text">center</text>
        </container>
        <center>
            <container class="container-60" style="color:blue;">
            </container>
        </center>

        <container class="label-container">
            <text class="label-text">center</text>
        </container>
        <center style="width-factor:20;height-factor:3;">
            <container class="container-60" style="color:blue;">
            </container>
        </center>
        <center style="width-factor:20;height-factor:3;">
            <container class="container-30" style="color:red;">
            </container>
        </center>

        <div style="height:30"></div>

    </list-view>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.label-container {
    padding-left: 10;
    padding-top: 5;
    padding-bottom: 5;
    color: #ebebeb;
}

.container-60 {
    width: 60px;
    height: 60px;
}

.container-30 {
    width: 60px;
    height: 30px;
}
.label-text {
    font-size: 18px;
}
</style>