<template>
    <column>

        <container class="label-container">
            <text style="label-text">ClipRect</text>
        </container>
        <center>
            <clip type="ClipRect">
                <Align alignment='bottomCenter' heightFactor=0.5>
                    <image class="image" :src="imageUrl"></image>
                </Align>
            </clip>

        </center>

        <container class="label-container">
            <text style="label-text">ClipRRect</text>
        </container>
        <center>
            <clip type="ClipRRect" borderRadius=100>
                <div style="color:red;width:300;height:100;">
                </div>

            </clip>
        </center>

        <container class="label-container">
            <text style="label-text">ClipOval</text>
        </container>
        <center>
            <clip type="ClipOval">
                <div style="color:red;width:300;height:100;">
                </div>

            </clip>
        </center>

    </column>
</template>
<script>
export default {
    data() {
        return {
            imageUrl: "https://s3.ax1x.com/2021/02/14/yy9uGR.png",
        }
    },
    computed: {

    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.start {
    cross-axis-alignment: start;
    main-axis-alignment: start;
}
.center {
    cross-axis-alignment: center;
    main-axis-alignment: center;
}
.end {
    main-axis-alignment: end;
    cross-axis-alignment: end;
}

.label-container {
    padding-left: 10;
    padding-top: 5;
    padding-bottom: 5;
    color: #ebebeb;
}
.label-text {
    font-size: 18px;
}
</style>