<template>
    <center>
        <column class="column">
            <gesture-detector @onTapDown="onPush">
                <container class="summary-container">
                    <text class="text">Push a WeexPage</text>
                </container>
            </gesture-detector>
            <gesture-detector @onTapDown="onPushWithParams">
                <container class="summary-container">
                    <text class="text">Push a WeexPage with params</text>
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
            params: {
                a: 1,
                b: 'string',
                c: ['1', 2, {}],
                d: {
                    e: [{
                        k: "v"
                    }],
                    f: {
                        g: ['1', '2', '3']
                    }
                }
            }
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
                title: "Evn",
                url: "/pages/examples/env.js"
            }, callback => {
            })
        },
        onPushWithParams() {
            navigate.push({
                title: "Evn & Params",
                url: "/pages/examples/env.js",
                params: this.params
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
.text {
    font-size: 20px;
}
</style>