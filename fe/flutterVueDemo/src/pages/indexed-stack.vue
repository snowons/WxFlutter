<template>
    <column>
        <raised-button class="btn" @onPressed="onClick">
            <text style="font-size: 24px;">Swith</text>
        </raised-button>
        <indexed-stack class="root" :index="index">
            <container style="color:red;height:100;">
                <text style="font-size: 27px;">Page:1</text>
            </container>
            <center>
                <text style="font-size: 27px;">Page:2</text>
            </center>
        </indexed-stack>
    </column>

</template>
<script>
export default {
    data() {
        return {
            index: 0
        }
    },
    computed: {
    },
    created() {

    },
    methods: {
        onClick() {
            this.index = this.index == 0 ? 1 : 0;
        }
    }
}
</script>
<style scoped>
.root {
    alignment: center;
}
.padding {
    padding: 30px;
}
</style>