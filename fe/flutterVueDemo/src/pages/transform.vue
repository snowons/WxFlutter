<template>
    <column>

        <container class="label-container">
            <text style="label-text">Transform.scale</text>
        </container>
        <container>
            <DecoratedBox style="color:red;">
                <Transform class="transform-scale">
                    <text style="font-size:24px;">Hello world</text>
                </Transform>
            </DecoratedBox>
        </container>

        <container class="label-container">
            <text style="label-text">Transform.translate</text>
        </container>
        <container>
            <DecoratedBox style="color:red;">
                <Transform class="transform-translate">
                    <text style="font-size:24px;">Hello world</text>
                </Transform>
            </DecoratedBox>
        </container>

        <container class="label-container">
            <text style="label-text">Transform.rotate</text>
        </container>
        <container>
            <DecoratedBox style="color:red;height:100">
                <Transform class="transform-rotate" :angle="getAngle">
                    <text style="font-size:24px;">Hello world</text>
                </Transform>
            </DecoratedBox>
        </container>

        <container class="label-container">
            <text style="label-text">Transform.skew</text>
        </container>
        <container>
            <DecoratedBox style="color:red;height:100">
                <Transform class="transform-skew">
                    <text style="font-size:24px;">Hello world</text>
                </Transform>
            </DecoratedBox>
        </container>
    </column>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        getAngle() {
            return Math.PI / 2
        }
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.start {
    cross-axis-alignment: start;
    main-axis-alignment: start;
}
.center {
    cross-axis-alignment: center;
    main-axis-alignment: center;
}

.label-container {
    padding-left: 10;
    padding-top: 5;
    padding-bottom: 5;
    color: #ebebeb;
}
.label-text {
    font-size: 18px;
}

.transform-scale {
    transform-type: scale;
    scale: 1.5;
}

.transform-translate {
    transform-type: translate;
    origin-x: 10;
    origin-y: 10;
}

.transform-rotate {
    transform-type: rotate;
    origin-x: 20;
    orgin-y: 50;
}

.transform-skew {
    transform-type: skew;
    x: 1;
    y: 2;
    z: 3;
    origin-x: 20;
    orgin-y: 50;
}
</style>