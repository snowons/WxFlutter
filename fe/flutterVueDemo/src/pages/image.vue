<template>
    <container class="image-container">
        <image class="image" :src="imageUrl"></image>
    </container>
</template>
<script>
export default {
    data() {
        return {
            imageUrl: "https://s3.ax1x.com/2021/02/14/yy9uGR.png",
        }
    },
    computed: {
        getStyle() {
            return {
                width: 750,
                color: this.name == 'Snow' ? 'red' : 'blue',
                height: 100
            }
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.image-container {
    padding-top: 10;
    alignment: top-center;
}
</style>