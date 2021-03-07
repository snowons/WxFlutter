<template>
    <column class="column">
        <center>
            <text style="font-size: 27px;">Hello World. {{index}}</text>
        </center>
    </column>
</template>
<script>
export default {
    data() {
        return {
            index: 0,
            timer: null,
            type: 0,
        }
    },
    computed: {

    },
    created() {
        if (this.type == 1) {
            setTimeout(() => {
                this.index++;
            }, 3000)
        } else {
            this.timer = setInterval(() => {
                this.index++;
                if (this.index > 10) {
                    this.timer && clearInterval(this.timer)
                }
            }, 1000)
        }

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