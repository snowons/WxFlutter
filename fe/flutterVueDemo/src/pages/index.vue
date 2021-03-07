<template>
    <indexed-stack class="root" :index="index">
        <TabComponents></TabComponents>
        <TabModules></TabModules>
        <TabExamples></TabExamples>
    </indexed-stack>
</template>
<script>
const eventBus = weex.requireModule('eventBus')

import TabComponents from '../components/tab-components.vue'
import TabModules from '../components/tab-modules.vue'
import TabExamples from '../components/tab-examples.vue'
export default {
    data() {
        return {
            index: 0
        }
    },
    components: {
        TabComponents,
        TabModules,
        TabExamples
    },
    computed: {
    },
    created() {
        eventBus.on('tabBarClick', (ret) => {
            this.index = ret.index;
        })
    },
    methods: {
    }
}
</script>
<style scoped>
.root {
    alignment: top-start;
}
</style>