<template>
    <list-view class="start">
        <container class="label-container">
            <text class="label-text">style="padding:20;"</text>
        </container>
        <padding style="padding:20;">
            <text class="text">{{text}}</text>
        </padding>

        <container class="label-container">
            <text class="label-text">style:padding-left:20;padding-right:80;</text>
        </container>
        <padding style="padding-left:20;padding-right:80;">
            <text class="text">{{text}}</text>
        </padding>

    </list-view>
</template>
<script>
export default {
    data() {
        return {
            text: 'The [padding] argument must not be null.The [padding] argument must not be null.'
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

.text {
    font-size: 18px;
    inherit: false;
    max-lines: 3;
    overflow: ellipsis;
}
.label-text {
    font-size: 18px;
}
</style>