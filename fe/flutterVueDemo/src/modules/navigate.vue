<template>
    <center>
        <column class="column">
            <gesture-detector @onTapDown="onPush">
                <container class="summary-container">
                    <text class="text">Push a WeexPage</text>
                </container>
            </gesture-detector>
            <gesture-detector @onTapDown="onPop">
                <container class="summary-container">
                    <text class="text">Back</text>
                </container>
            </gesture-detector>
        </column>
    </center>
</template>
<script>
const navigate = weex.requireModule('navigate')

export default {
    data() {
        return {
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
        onPush() {
            navigate.push({
                title: 'Text',
                uri: 'text.js',
                type: 'components',
                path: '',
                url: ''
            }, callback => {
            })
        },
        onPop() {
            navigate.pop(callback => {
            });
        }
    }
}
</script>
<style scoped>
.column {
    cross-axis-alignment: start;
}
.summary-container {
    color: white;
    padding: 10;
    margin-top: 20;
}
</style>