<template>
    <center>
        <column>
            <image class="image" :src="imageUrl"></image>

            <padding class="padding">
                <text class="text">{{text}}</text>
            </padding>

            <padding class="padding">
                <text style="font-size:24px;color:blue">{{desc}}</text>
            </padding>

        </column>

    </center>
</template>
<script>
export default {
    data() {
        return {
            text: "A toy for building Flutter apps with Weex",
            desc: "Written in VueJS, rendered by Flutter",
            imageUrl: "https://s3.ax1x.com/2021/02/14/yy9uGR.png",
        }
    }
}
</script>
<style scoped>
.image {
    width: 200px;
    height: 200px;
}
.text {
    color: red;
    font-size: 24px;
}
.padding {
    padding: 30px;
}
</style>