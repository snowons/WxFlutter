<template>
    <list-view class="start">
        <container class="label-container">
            <text class="label-text">color</text>
        </container>
        <container class="container" style="color:red;"></container>

        <container class="label-container">
            <text class="label-text">margin</text>
        </container>
        <container class="container" style="margin:20;color:green;"></container>

        <container class="label-container">
            <text class="label-text">padding</text>
        </container>
        <container class="container" style="padding:20;color:blue;">
            <text style="max-lines:5;">This padding is in addition to any padding inherent in the [decoration];see [Decoration.padding]</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:top-left;">
            <text>topLeft</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:top-center;">
            <text>topCenter</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:top-right;">
            <text>topRight</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:center;">
            <text>center</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:center-left;">
            <text>centerLeft</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:center-right;">
            <text>centerRight</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:bottom-left;">
            <text>bottomLeft</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:bottom-center;">
            <text>bottomCenter</text>
        </container>

        <container class="label-container">
            <text class="label-text">alignment</text>
        </container>
        <container class="container" style="color:yellow;alignment:bottom-right;">
            <text>bottomRight</text>
        </container>

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

.container {
    width: 100px;
    height: 100px;
}
.label-text {
    font-size: 18px;
}
</style>