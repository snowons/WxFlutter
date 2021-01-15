<template>
    <center>
        <text style="font-size: 27px;" :att="getTextAtt()">{{name}} : Hello World. {{index}}</text>
    </center>

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
        // Test binding att
        getTextAtt() {
            return {
                a: '1',
                b: {
                    c: ['1', '2', '3']
                }
            }
        }
    }
}
</script>
<style scoped>
.column {
    cross-axis-alignment: start;
}
</style>