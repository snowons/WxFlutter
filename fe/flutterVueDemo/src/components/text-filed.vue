<template>
    <column class="column">

        <text-filed @onChanged="onTextFiledChanged" ref="tf"></text-filed>

        <text style="font-size: 27px;">Input Value: {{value}}</text>

        <row>
            <raised-button style="color: red;" @onPressed="onCleanClick()">
                <text style="font-size: 14px;color: white;">clean</text>
            </raised-button>

            <raised-button style="color: green;" @onPressed="onSetValueClick">
                <text style="font-size: 14px;color: white;">setValue</text>
            </raised-button>

            <raised-button style="color: blue;" @onPressed="onFocusClick">
                <text style="font-size: 14px;color: white;">requestFocus</text>
            </raised-button>

            <raised-button style="color: yellow;" @onPressed="onUnfocusClick">
                <text style="font-size: 14px;color: white;">unfocus</text>
            </raised-button>
        </row>

    </column>
</template>
<script>
const system = weex.requireModule('system')
export default {
    data() {
        return {
            value: '',
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
            this.$refs.tf.clear(data => {
                console.log("TextFiled clear callback--- > " + JSON.stringify(data));
            });
        },
        onSetValueClick() {
            this.$refs.tf.setValue('hello', data => {
                console.log("TextFiled setValue callback--- > " + JSON.stringify(data));
            });
        },
        onFocusClick() {
            this.$refs.tf.requestFocus(data => {
                console.log("TextFiled requestFocus callback--- > " + JSON.stringify(data));
            });
        },
        onUnfocusClick() {
            this.$refs.tf.unfocus(data => {
                console.log("TextFiled unfocus callback--- > " + JSON.stringify(data));
            });
        }
    }
}
</script>
<style scoped>
.column {
    cross-axis-alignment: start;
}
</style>