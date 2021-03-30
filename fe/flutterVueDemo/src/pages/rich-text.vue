<template>
    <column class="column">
        <padding class="padding">
            <rich-text :value=getVaule() @onTap="richTextClick"></rich-text>
        </padding>
    </column>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        getStyle() {
            return {
                width: 750,
                color: this.name == 'Snow' ? 'red' : 'blue',
                height: 400
            }
        }
    },
    created() {
    },
    methods: {
        richTextClick(e) {
            console.log("####### onRichTextClick index = " + e.index + ' , value = ' + e.value)
        },
        getVaule() {
            return JSON.stringify({
                value: 'Sign in to agree to the',
                style: {
                    color: 'black',
                    fontSize: '14'
                },
                children: [
                    {
                        value: "'terms of service'",
                        type: 'text',
                        onTap: true,
                        style: {
                            color: 'blue',
                            fontSize: '16'
                        }
                    },
                    {
                        value: "'and'",
                        type: 'text',
                        style: {
                            color: 'black',
                            fontSize: '14'
                        }
                    },
                    {
                        value: "'privacy policy'",
                        type: 'text',
                        onTap: true,
                        style: {
                            color: 'blue',
                            fontSize: '16'
                        }
                    },
                    {
                        src: 'https://gw.alicdn.com/tfs/TB1bBD0zCzqK1RjSZFpXXakSXXa-68-67.png',
                        type: 'image',
                        style: {
                            width: '20',
                            height: '20',
                            alignment: 'middle'
                        }
                    }
                ]
            })
        }
    }
}
</script>
<style scoped>
.column {
    cross-axis-alignment: start;
}
.padding {
    padding-top: 10px;
    padding-left: 10px;
}
</style>