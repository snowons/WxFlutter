<template>
    <column class="column">
        <gesture-detector @onTapDown="onClick">
            <container class="summary-container">
                <text class="text">Touch me</text>
            </container>
        </gesture-detector>

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
.label-container {
    padding-left: 10;
    padding-top: 5;
    padding-bottom: 5;
}
.text {
    font-size: 20px;
    color: red;
}
.summary-container {
    color: white;
    padding: 10;
}
</style>