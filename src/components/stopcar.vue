<template>
<div class="house">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <div class="top">
        <img src="../assets/img/s4.png" />
        <img src="../assets/img/s5.png" />
        <div class="fen">
            停车
        </div>
    </div>
    <div class="section" id="xx">
        <ul>
            <li>
                <img src="../assets/img/t1.svg" />
                <p><span class="blue">5</span><br /><span>停车场数</span></p>
            </li>
            <li>
                <img src="../assets/img/t2.svg" />
                <p><span class="blue">1000</span><br /><span>总车位数</span></p>
            </li>
            <li>
                <img src="../assets/img/t3.svg" />
                <p><span class="blue">999</span><br /><span>场内车辆数</span></p>
            </li>
            <li>
                <img src="../assets/img/t4.svg" />
                <p><span class="blue">50</span><br /><span>今日临时收入</span></p>
            </li>
            <li>
                <img src="../assets/img/t5.svg" />
                <p><span class="blue">1000</span><br /><span>月卡数</span></p>
            </li>
            <li>
                <img src="../assets/img/t6.svg" />
                <p><span class="blue">1000</span><br /><span>物业费</span></p>
            </li>
        </ul>
        <div class="zhu ">
            <template>
                <ve-histogram :data="chartData"></ve-histogram>
            </template>
        </div>
        <div class="zhong">
            <img src="../assets/img/t7.png">
            <img src="../assets/img/t7.png">
            <img src="../assets/img/t7.png">
            <img src="../assets/img/t7.png">
        </div>
        <div class="zhuz ">
            <template>
                <ve-histogram :data="chartData1"></ve-histogram>
            </template>
        </div>
        <div class="left">
            <template>
                <ve-ring :data="chartData2"></ve-ring>
            </template>
        </div>
        <div class="zp">
            <img src="../assets/img/t8.png">
        </div>
        <div class="right">
            <template>
                <ve-histogram :data="chartData3"></ve-histogram>
            </template>
        </div>
        <div class="vv">
            <template>
                <ve-histogram :data="chartData4"></ve-histogram>
            </template>
        </div>>
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
    data() {
        return {
            chartData: {
                columns: ["日期", "访问用户"],
                rows: [{
                        日期: "昨天",
                        访问用户: 1393
                    },
                    {
                        日期: "今天",
                        访问用户: 3530
                    },
                ],
            },
            chartData4: {
                columns: ["日期", "访问用户"],
                rows: [{
                        日期: "昨天",
                        访问用户: 3530
                    },
                    {
                        日期: "今天",
                        访问用户: 1393
                    },
                ],
            },
            chartData1: {
                columns: ["日期", "昨天", '今天'],
                rows: [{
                        日期: "qian",
                        昨天: 1393,
                        今天: 312
                    },
                    {
                        日期: "today",
                        昨天: 3530,
                        今天: 312
                    },
                ],
            },
            chartData2: {
                columns: ['出场', '入场'],
                rows: [{
                        '出场': '23.8%',
                        '入场': 1393
                    },
                    {
                        '出场': '76',
                        '入场': 3530
                    }
                ]
            }
        };
    },
};
</script>

<style scoped>
.house .top img:first-of-type {
    width: 77%;
    margin-top: 22px;
}

.house .left {
    margin-top: 13px;
    height: 355px;
    padding-top: 8px;
    width: 250px !important;
    border: 1px solid #CCCCCC;
    margin-left: 10px;
}

.house .blue {
    color: #a993ff;
    font-size: 20px;
    font-weight: bold;
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

.house .section {
    border: 1px solid #e9e9ff;
    margin-left: 230px;
    height: 1000px;
    margin-top: 13px;
}

.house #xx ul li {
    float: left;
    width: 175px;
    height: 80px;
    font-size: 16px;
    margin: 37px 5px;
}

.house ul li p {
    margin-top: 11px;
}

.house .zhong[data-v-b8b75c9c] {
    width: 548px;
    border: 1px solid #CCCCCC;
    margin-top: -355px;
    margin-left: 279px;
    height: 357px;
    padding: 11px;
}

.zp img {
    width: 546px;
}

.zp[data-v-b8b75c9c] {
    border: 1px solid #CCCCCC;
    height: 357px;
    width: 548px;
    margin-left: 278px;
    float: left;
    margin-top: -356px;
}

.house .zhong img[data-v-b8b75c9c] {
    width: 260px;
    height: 163px;
    margin: 0px 1px;
}

.house ul li img {
    float: left;
    width: 64px;
    height: 64px;
    margin-left: 15px;
    line-height: 21px;
    margin-top: 5px;
}

.house .zhu {
    margin-top: 200px;
    height: 355px;
    padding-top: 8px;
    width: 250px !important;
    border: 1px solid #CCCCCC;
    margin-left: 10px;
}

.vv[data-v-b8b75c9c] {
    margin-top: -755px;
    height: 355px;
    padding-top: 8px;
    width: 250px !important;
    border: 1px solid #CCCCCC;
    margin-left: 10px;
    float: right;
    margin-right: 19px;
}

.house .left {
    height: 355px;
    padding-top: 8px;
    width: 250px !important;
    border: 1px solid #CCCCCC;
    margin-left: 10px;
}

.house .zhuz {
    margin-top: -356px;
    height: 357px;
    padding-top: 10px;
    width: 250px !important;
    border: 1px solid #CCCCCC;
    float: right;
    margin-right: 20px;
}
</style>
