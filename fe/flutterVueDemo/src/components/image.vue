<template>
    <center class="image-container">
        <image class="image" :src="imageUrl"></image>
    </center>
</template>
<script>
export default {
    data() {
        return {
            imageUrl: "https://i.loli.net/2021/01/15/AJe1HE5IiOPof82.jpg",
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
.center {
}

.image-container {
    width: 120px;
    height: 160px;
    margin-bottom: 100;
}
</style>