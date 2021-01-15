<template>
    <column class="column">
        <container>
            <raised-button style="color: green;" @onPressed="onClick">
                <text style="font-size: 36px;color: blue;">RaisedButton</text>
            </raised-button>
        </container>
        <container class="summary-container">
            <text style="font-size: 27px;">{{name}} : Hello World.</text>
        </container>
    </column>

</template>
<script>
export default {
    data() {
        return {
            name: 'Snow',
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
        onClick() {
            if (this.name == 'Snow') {
                this.name = 'P Man'
            } else {
                this.name = 'Snow'
            }

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
}
</style>