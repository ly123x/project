<template>
<div class="opens">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <div class="top">
        <img src="../assets/img/s4.png">
        <img src="../assets/img/s5.png">
        <div class="fen">
            开门
        </div>
    </div>
    <div class="open">
        <el-row>
            <el-button type="primary">开门统计</el-button>
        </el-row>
    </div>
    <div class="zhe">
        <template>
            <ve-line :data="chartData"></ve-line>
        </template>
    </div>
</div>
</template>

<script>
import Iheader from "../components/IHeader";
import sidebar from "../components/sidebar";
export default {
    components: {
        Iheader,
        sidebar,
    },
    data: function () {
        return {
            chartData: {
                columns: ['分类', '蓝牙', 'App', 'WIFI', '门禁卡', '指纹识别'],
                rows: [{
                        '分类': '蓝牙',
                        '蓝牙': 0.2,
                        'App': 0.1,
                        'WIFI': 0.22,
                        '门禁卡': 0.1,
                        '指纹识别': 0.1
                    },
                    {
                        '分类': 'App',
                        '蓝牙': 0.5,
                        'App': 0.5,
                        'WIFI': 0.52,
                        '门禁卡': 0.5,
                        '指纹识别': 0.5
                    },
                    {
                        '分类': 'WIFI',
                        '蓝牙': 0.9,
                        'App': 0.9,
                        'WIFI': 0.92,
                        '门禁卡': 0.8,
                        '指纹识别': 0.8
                    },
                    {
                        '分类': '门禁卡',
                        '蓝牙': 0.2,
                        'App': 0.5,
                        'WIFI': 0.62,
                        '门禁卡': 0.5,
                        '指纹识别': 0.1
                    },
                    {
                        '分类': '指纹识别',
                        '蓝牙': 0.2,
                        'App': 0.5,
                        'WIFI': 0.22,
                        '门禁卡': 0.3,
                        '指纹识别': 0.1
                    },
                    {
                        '分类': '人脸识别',
                        '蓝牙': 0.1,
                        'App': 0.5,
                        'WIFI': 0.32,
                        '门禁卡': 0.2,
                        '指纹识别': 0.1
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.top img:last-of-type {
    margin-top: 22px;
    left: 241px;
    position: absolute;
}

.opens {
    overflow-x: hidden;
}

.zhe {
    width: 100%;
    margin-left: 214px;
    margin-top: 27px;
}

.el-row {
    position: relative;
    box-sizing: border-box;
    margin-left: 20px;
}

.open {
    float: left;
    margin-left: 84px;
    margin-top: 21px;
}

.top img:first-of-type {
    width: 77%;
    margin-top: 22px;
}

canvas {
    position: absolute;
    left: 202px !important;
    top: 32px !important;
    width: 1140px !important;
    height: 400px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding: 0px;
    margin: 0px;
    border-width: 0px;
}

.top {
    position: relative;
}

.fen {
    position: absolute;
    left: 255px;
    top: 28px;
    color: white;
}
</style>
