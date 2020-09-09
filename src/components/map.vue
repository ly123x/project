<template>
<div class="house">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <div class="top">
        <img src="../assets/img/s4.png">
        <img src="../assets/img/s5.png">
        <div class="fen">
            电子地图
        </div>
    </div>
    <div id="zhu">
        <template>
            <ve-bmap :settings="chartSettings" :after-set-option-once="afterSet" :series="chartSeries" :tooltip="chartTooltip">
            </ve-bmap>
        </template>
    </div>
</div>
</template>

<script>
import Iheader from "../components/IHeader";
import sidebar from "../components/sidebar";
export default {
    data() {
        this.chartSettings = {
            key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
            bmap: {
                center: [120, 30],
                zoom: 14,
                roam: true,
                mapStyle: {}
            }
        }
        this.chartTooltip = {
            show: true
        }
        return {
            chartSeries: [{
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: [
                    [120, 30, 1] // 经度，维度，value，...
                ]
            }]
        }
    },
    methods: {
        afterSet: function (echarts) {
            var bmap = echarts.getModel().getComponent('bmap').getBMap()
            bmap.addControl(new window.BMap.MapTypeControl())
        }
    },
    components: {
        Iheader,
        sidebar,
    }
}
</script>

<style scoped>
.house .top img:first-of-type {
    width: 77%;
    margin-top: 22px;
}

.house .top img:last-of-type {
    margin-top: 22px;
    left: 241px;
    position: absolute;
}

.house .fen {
    position: absolute;
    left: 255px;
    top: 28px;
    color: white;
}

.house .top {
    position: relative;
}

.house .footer {
    border: 1px solid #E9E9FF;
    margin-left: 230px;
    height: 700px;
    margin-top: 13px;
}

.house #yyy ul li {
    border: 1px solid #797979;
    border-radius: 10px;
    float: left;
    width: 175px;
    height: 80px;
    font-size: 16px;
    margin: 37px 5px;
}

.house ul li p {
    margin-top: 11px;
}

.house ul li img {
    float: left;
    width: 64px;
    height: 64px;
    margin-left: 15px;
    line-height: 21px;
    margin-top: 5px;
}

.house #zhu {
    margin-left: 220px;
    margin-top: 13px;
    width: -13%;
    height: 1000px;
}
</style>
