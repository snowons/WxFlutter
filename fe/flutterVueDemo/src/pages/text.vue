<template>
    <column class="column">
        <text style="font-size: 18px;">WxFlutter:Hello World</text>
        <text style="font-size: 24px;">WxFlutter:Hello World</text>
        <text style="font-size: 36px;">WxFlutter:Hello World</text>
        <text style="font-size: 36px;color:red;">WxFlutter:Hello World</text>
        <text style="font-size: 36px;background-color:red;">WxFlutter:Hello World</text>
        <text style="font-size: 48px;inherit:false;max-lines:1;overflow:ellipsis;">WxFlutter:Hello World</text>
        <text style="font-size: 48px;max-lines:20;">WxFlutter:Hello World</text>

    </column>
</template>
<script>
export default {
    data() {
        return {
            name: 'Snow'
        }
    },
    computed: {
        getStyle() {
            return {
                width: 750,
                color: this.name == 'Snow' ? 'red' : 'blue',
                height: 400
            }
        }
    },
    created() {
    },
    methods: {
    }
}
</script>
<style scoped>
.column {
    cross-axis-alignment: start;
}
.padding {
    padding: 30px;
}
</style>