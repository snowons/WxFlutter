<template>
    <fractionally-sized-box class="scroll-container">
        <single-child-scroll-view>
            <column class="column">

                <padding class="padding" v-for="(item,i) in list" :key="i">
                    <text style="font-size: 27px;">{{item}}</text>
                </padding>

            </column>
        </single-child-scroll-view>
    </fractionally-sized-box>
</template>
<script>
export default {
    data() {
        return {
            list: 20
        }
    },
    computed: {
    },
    created() {

    },
    methods: {
    }
}
</script>
<style scoped>
.scroll-container {
    width-factor: 1;
    height-factor: 1;
}
.column {
    cross-axis-alignment: start;
}
.padding {
    padding: 30px;
}
</style>