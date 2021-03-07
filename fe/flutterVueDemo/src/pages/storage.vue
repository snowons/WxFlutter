<template>
    <column class="column">

        <text-filed @onChanged="onTextFiledChanged"></text-filed>

        <text style="font-size: 27px;">Storage Value: {{value}}</text>

        <row class="row">
            <raised-button style="color: red;" @onPressed="onSetClick">
                <text style="font-size: 14px;color: white;">setItem</text>
            </raised-button>

            <raised-button style="color: green;" @onPressed="onGetClick">
                <text style="font-size: 14px;color: white;">getItem</text>
            </raised-button>

            <raised-button style="color: blue;" @onPressed="onRemoveClick">
                <text style="font-size: 14px;color: white;">removeItem</text>
            </raised-button>
        </row>
    </column>
</template>
<script>
const storage = weex.requireModule('storage')
const system = weex.requireModule('system')
const KEY = 'kWeexFlutterStorageTest'
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
        this.onGetClick()
    },
    methods: {
        onTextFiledChanged(e) {
            this.inputValue = e.value
            console.log("onTextFiledChanged --- > " + JSON.stringify(e));
        },
        onSetClick() {
            storage.setItem(KEY, this.inputValue, result => {
                console.log('setItem result = ' + JSON.stringify(result))
            })
            system.requestFocus(callback => { })
        },
        onGetClick() {
            storage.getItem(KEY, result => {
                if (result && result.data) {
                    this.value = result.data.value;
                }
                console.log('getItem result = ' + JSON.stringify(result))
            })
        },
        onRemoveClick() {
            storage.removeItem(KEY, result => {

                console.log('removeItem result = ' + JSON.stringify(result))
            })
        }
    }
}
</script>
<style scoped>
.column {
    cross-axis-alignment: start;
}

.row {
    main-axis-alignment: space-between;
}
</style>