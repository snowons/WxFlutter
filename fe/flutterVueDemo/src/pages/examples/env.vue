<template>
    <fractionally-sized-box class="scroll-container">
        <single-child-scroll-view>
            <column class="column">

                <text style="font-size: 24px;">{{getEnv}}</text>

            </column>
        </single-child-scroll-view>
    </fractionally-sized-box>
</template>
</template>
<script>
export default {
    data() {
        return {
            env: ''
        }
    },
    computed: {
        getEnv() {

            if (weex.config) {
                return weex.config;
                return JSON.stringify(weex.config, null, '  ')
            }
            return 'weex.config = null'
        }
    },
    beforeCreate() {
        console.log('VueJS:---beforeCreate---');
    },
    created() {
        console.log('VueJS:---created---');
    },
    beforeMount() {
        console.log('VueJS:---beforeMount---');
    },
    mounted() {
        console.log('VueJS:---mounted---');
    },
    beforeUpdate() {
        console.log('VueJS:---beforeUpdate---');
    },
    updated() {
        console.log('VueJS:---updated---');
    },
    beforeDestroy() {
        console.log('VueJS:---beforeDestroy---');
    },
    destroyed() {
        console.log('VueJS:---destroyed---');
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