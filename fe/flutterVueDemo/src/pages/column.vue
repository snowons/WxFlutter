<template>
    <list-view class="start">
        <container class="label-container">
            <text class="label-text">start</text>
        </container>
        <column class="start">
            <text class="red-text">Text1</text>
            <text class="green-text">Text2</text>
            <text class="blue-text">Text3</text>
        </column>
        <container class="label-container">
            <text class="label-text">center</text>
        </container>
        <column class="center">
            <text class="red-text">Text1</text>
            <text class="green-text">Text2</text>
            <text class="blue-text">Text3</text>
        </column>

        <container class="label-container">
            <text class="label-text">end</text>
        </container>
        <column class="end">
            <text class="red-text">Text1</text>
            <text class="green-text">Text2</text>
            <text class="blue-text">Text3</text>
        </column>
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
.start {
    cross-axis-alignment: start;
    main-axis-alignment: start;
}
.center {
    cross-axis-alignment: center;
    main-axis-alignment: center;
}
.end {
    main-axis-alignment: end;
    cross-axis-alignment: end;
}
.rtl {
    text-direction: rtl;
}
.padding {
    padding: 24px;
}

.red-text {
    color: #ff8888;
}
.green-text {
    color: #88ff88;
}
.blue-text {
    color: #8888ff;
    padding: 10;
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
</style>