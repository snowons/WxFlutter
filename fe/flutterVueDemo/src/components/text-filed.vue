<template>
    <column class="column">

        <text-filed @onChanged="onTextFiledChanged"></text-filed>

        <text style="font-size: 27px;">Input Value: {{value}}</text>

        <raised-button style="color: red;" @onPressed="onCleanClick()">
            <text style="font-size: 14px;color: white;">Clean</text>
        </raised-button>
    </column>
</template>
<script>
const system = weex.requireModule('system')
export default {
    data() {
        return {
            value: '',
            inputValue: ''
        }
    },
    computed: {
    },
    created() {
    },
    methods: {
        onTextFiledChanged(e) {
            this.value = e.value
            console.log("onTextFiledChanged --- > " + JSON.stringify(e));
        },
        onCleanClick() {
            this.inputValue = ''
            // system.requestFocus(callback => { })
        },
    }
}
</script>
<style scoped>
.column {
    cross-axis-alignment: start;
}
</style>