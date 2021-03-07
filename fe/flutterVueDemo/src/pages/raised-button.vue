<template>
    <column class="column">
        <container>
            <raised-button class="btn" @onPressed="onClick">
                <text style="font-size: 24px;">RaisedButton</text>
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
.btn {
    color: #ff0000;
    focus-color: #0000ff;
    hover-color: #00ff55;
    highlight-color: #00ffff;
    splash-color: #ffff00;
}
.summary-container {
    color: white;
    padding: 10;
}
</style>