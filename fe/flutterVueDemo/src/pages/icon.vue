<template>
    <column class="column">
        <padding class="padding">
            <icon class="icon" :codePoint="getIcon('all-inclusive')"></icon>
        </padding>

        <padding class="padding">
            <icon class="icon" style="color:red;" :codePoint="getIcon('all-inclusive')"></icon>
        </padding>

        <padding class="padding">
            <icon class="icon" style="color:blue;size:48px;" :codePoint="getIcon('all-inclusive')"></icon>
        </padding>
    </column>
</template>
<script>
const eventBus = weex.requireModule('eventBus')
const navigate = weex.requireModule('navigate')
import Icons from "../codepoints.json";
export default {
    data() {
        return {
        }
    },
    computed: {

    },
    methods: {
        getIcon(name) {
            return Icons.material_community_icons[name]
        }
    }
}
</script>
<style  scoped>
.padding {
    padding: 24px;
}
.icon {
    font-family: MaterialCommunityIcons;
}
</style>