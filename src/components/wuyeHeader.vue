<template>
<div class="propertypaycosst">
    <div class="top">
        <img src="../assets/img/s4.png" class="img1" />
        <div class="ding">
            <div id="ding">
                <img src="../assets/img/s5.png" class="img2" style="width:20px" />
                <span>物业缴费</span>
            </div>
        </div>
    </div>
    <div class="section">
        <ul class="ul">
            <li>缴费类型</li>
            <!--<li @click="shui" class="ds">水费</li>
            <li @click="dian" class="ds">电费</li>
            <li @click="port" class="ds">停车费</li>
            <li @click="fuel" class="ds">燃气费</li>
            <li @click="network" class="ds">固定宽带</li>
            <li @click="tv" class="ds">有线电视</li>-->
            <li @click="dianji(indexs,item.path)" v-for="(item, indexs) in title" :key="indexs" :class="[index==indexs?'ds':'']">
                {{item.name}}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: ['index'],
    methods: {
        dianji(indexs, path) {
            console.log(indexs)
            this.index = indexs;
            this.$router.push({
                path
            })
        },
        shui: function () {
            this.$router.push({
                path: '/water'
            })
            document.getElementsByClassName("ds")[0].style.background = "red"
        },
        dian: function () {
            this.$router.push({
                path: '/Electric'
            })
        },
        port: function () {
            this.$router.push({
                path: '/port'
            })
        },
        fuel: function () {
            this.$router.push({
                path: '/fuel'
            })
        },
        network: function () {
            this.$router.push({
                path: '/network'
            })
        },
        tv: function () {
            this.$router.push({
                path: '/tv'
            })
        }
    },
    data() {
        return {
            title: [{
                name: "水费",
                path: '/water'
            }, {
                name: "电费",
                path: '/Electric'
            }, {
                name: "停车费",
                path: '/port'

            }, {
                name: "燃气费",
                path: '/fuel'

            }, {
                name: "有线电视",
                path: '/tv'
            }],
        }
    }
}
</script>

<style>
@import url("../assets/css/wuye.css");
</style>
