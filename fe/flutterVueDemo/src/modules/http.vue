<template>
    <fractionally-sized-box class="scroll-container">
        <single-child-scroll-view>
            <column class="column">
                <text class="title">method = GET</text>
                <text class="count">{{getResult}}</text>

                <padding class="padding"></padding>

                <text class="title">method = POST</text>
                <text class="count">{{postResult}}</text>

                <padding class="padding"></padding>

                <text class="title">method = PUT</text>
                <text class="count">{{putResult}}</text>

                <padding class="padding"></padding>

                <text class="title">method = DELETE</text>
                <text class="count">{{deleteResult}}</text>

                <padding class="padding"></padding>

                <text class="title">method = PATCH</text>
                <text class="count">{{patchResult}}</text>
            </column>
        </single-child-scroll-view>
    </fractionally-sized-box>
</template>
<script>
const http = weex.requireModule('http')

export default {
    data() {
        return {
            getResult: 'loading...',
            postResult: 'loading...',
            putResult: 'loading...',
            deleteResult: 'loading...',
            patchResult: 'loading...'
        }
    },
    created() {
        var me = this;
        var GET_URL = 'http://httpbin.org/get';
        var POST_URL = 'http://httpbin.org/post';
        var PUT_URL = 'http://httpbin.org/put';
        var DELETE_URL = 'http://httpbin.org/delete';
        var PATCH_URL = 'http://httpbin.org/patch';

        http.fetch({
            method: 'GET',
            url: GET_URL,
        }, (ret) => {
            if (!ret.ok) {
                me.getResult = "request failed";
            } else {
                console.log('get:' + ret);
                me.getResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'POST',
            url: POST_URL,
        }, function (ret) {
            if (!ret.ok) {
                me.postResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.postResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'PUT',
            url: PUT_URL,
        }, (ret) => {
            if (!ret.ok) {
                me.putResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.putResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'DELETE',
            url: DELETE_URL,
        }, (ret) => {

            if (!ret.ok) {
                me.deleteResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.deleteResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'PATCH',
            url: PATCH_URL,
        }, (ret) => {
            if (!ret.ok) {
                me.patchResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.patchResult = JSON.stringify(ret.data);
            }
        });
    }
};
</script>
<style scoped>
.padding {
    padding: 30px;
}
.scroll-container {
    width-factor: 1;
    height-factor: 1;
}
.column {
    cross-axis-alignment: start;
}
.title {
    font-size: 27px;
    color: #41b883;
}
.count {
    font-size: 20px;
    color: #888888;
}
</style>