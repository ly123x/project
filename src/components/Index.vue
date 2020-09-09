<template>
<div class="Index">
    <IHeader></IHeader>
    <Sidebar></Sidebar>
    <div class="shang">
        <ul class="ul">
            <li>
                <img src="../assets/img/s2.png" class="zp" />
                <p><span class="blue">200</span><br /><span class="shangs">楼宇数</span></p>
            </li>
            <li>
                <img src="../assets/img/u961.svg" class="zp" />
                <p><span class="blue">200</span><br />登记人口数</p>
            </li>
            <li>
                <img src="../assets/img/s4.svg" class="zp" />
                <p><span class="blue">200</span><br />智能设备数</p>
            </li>
            <li>
                <img src="../assets/img/s5.svg" class="zp" />
                <p><span class="blue">200</span><br />智能家居数</p>
            </li>
            <li>
                <img src="../assets/img/s6.svg" class="zp" />
                <p><span class="blue">200</span><br />预约挂号数</p>
            </li>
            <li>
                <img src="../assets/img/s7.svg" class="zp" />
                <p><span class="blue">100</span><br />系统报警数</p>
            </li>
        </ul>
    </div>
    <div class="z1">
        <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
    </div>
    <div class="dt">
        <ve-bmap :settings="chartSettings" :after-set-option-once="afterSet" :series="chartSeries" :tooltip="chartTooltip">
        </ve-bmap>
    </div>
    <div class="zzz">
        <ve-ring :data="chartData1"></ve-ring>
    </div>
    <div class="rrr">
        <ve-histogram :data="chartDatass" :settings="chartSettings"></ve-histogram>
    </div>
    <div class="bbb">
        <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
    </div>
</div>
</template>

<script>
import Sidebar from "../components/sidebar";
import IHeader from "../components/IHeader";
export default {
    components: {
        Sidebar,
        IHeader,
    },
    data() {
        (this.chartSettings = {
            limitShowNum: 5,
        }),
        (this.chartSettings = {
            stack: {
                用户: ["访问用户", "下单用户"],
            },
        });
        this.chartSettings = {
            key: "oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK",
            bmap: {
                center: [120, 30],
                zoom: 14,
                roam: true,
                mapStyle: {},
            },
        };
        this.chartTooltip = {
            show: true,
        };
        return {
            chartData: {
                columns: ["日期", "访问用户"],
                rows: [{
                        日期: "毛坯:28.47%",
                        访问用户: 3530,
                    },
                    {
                        日期: "精装:25.07%",
                        访问用户: 2923,
                    },
                    {
                        日期: "简装",
                        访问用户: 3792,
                    },
                    {
                        日期: "38.26%",
                        访问用户: 4593,
                    },
                ],
            },
            chartDatass: {
                columns: ["日期", "访问用户", "下单用户", "下单率"],
                rows: [{
                        日期: "1/1",
                        访问用户: 1393,
                        下单用户: 1093,
                        下单率: 0.32,
                    },
                    {
                        日期: "1/2",
                        访问用户: 3530,
                        下单用户: 3230,
                        下单率: 0.26,
                    },
                    {
                        日期: "1/3",
                        访问用户: 2923,
                        下单用户: 2623,
                        下单率: 0.76,
                    },
                    {
                        日期: "1/4",
                        访问用户: 1723,
                        下单用户: 1423,
                        下单率: 0.49,
                    },
                    {
                        日期: "1/5",
                        访问用户: 3792,
                        下单用户: 3492,
                        下单率: 0.323,
                    },
                    {
                        日期: "1/6",
                        访问用户: 4593,
                        下单用户: 4293,
                        下单率: 0.78,
                    },
                ],
            },
            chartSeries: [{
                type: "scatter",
                coordinateSystem: "bmap",
                data: [
                    [120, 30, 1], // 经度，维度，value，...
                ],
            }, ],
            chartData1: {
                columns: ["日期", "访问用户"],
                rows: [{
                        日期: "在线22.41%",
                        访问用户: 1393,
                    },
                    {
                        日期: "3.4%",
                        访问用户: 3530,
                    },
                    {
                        日期: "离线34.2%",
                        访问用户: 2923,
                    },
                ],
            },
            chartDatav: {
                columns: ['状态', '数值'],
                rows: [{
                        '状态': '展示',
                        '数值': 900
                    },
                    {
                        '状态': '访问',
                        '数值': 600
                    },
                    {
                        '状态': '点击',
                        '数值': 300
                    },
                    {
                        '状态': '订单',
                        '数值': 100
                    }
                ]
            }
        };
    },
    methods: {
        afterSet: function (echarts) {
            var bmap = echarts
                .getModel()
                .getComponent("bmap")
                .getBMap();
            bmap.addControl(new window.BMap.MapTypeControl());
        },
    },
};
</script>

<style scoped>
.Index .z1 {
    border: 1px solid #e6e6ff;
    width: 37%;
    margin-left: 225px;
    height: 388px;
    margin-top: 15px;
    padding-left: 52px;
    padding-top: 15px;
}

.Index .zzz {
    border: 1px solid #e6e6ff;
    width: 37%;
    margin-left: 225px;
    height: 388px;
    margin-top: 15px;
    padding-left: 52px;
    padding-top: 15px;
}

.Index .rrr {
    border: 1px solid #e6e6ff;
    margin-left: 225px;
    height: 388px;
    margin-top: 15px;
    padding-left: 52px;
    padding-top: 15px;
}

.Index .bbb {
    border: 1px solid #e6e6ff;
    margin-left: 02px;
    height: 386.8px;
    margin-top: -791px;
    padding-left: 116px;
    padding-top: 15px;
    width: 43.4%;
    float: right;
    margin-right: 20.1px;
}

.Index .blue {
    color: #623bfe;
    font-size: 35px;
    font-weight: bolder;
}

.Index .zp {
    width: 57px;
    height: 57px;
    margin-left: -110px;
    margin-top: 19px;
}

.Index ec-extension-bmap {
    width: 100%;
    height: 87% !important;
    overflow: hidden;
    position: relative;
    z-index: 0;
    background-color: rgb(243, 241, 236);
    color: rgb(0, 0, 0);
    text-align: left;
}

.Index .right {
    margin-left: 30px;
}

.Index .shangs {
    padding-top: 20px;
}

.Index .ul p {
    margin-top: -70px;
    margin-left: 37px;
}

.Index .shang {
    border: 1px solid #e6e6ff;
    margin-left: 224px;
    margin-top: 23px;
    width: 1106px;
    height: 100px;
}

.Index .ul li {
    float: left;
    padding: 0px -19px;
    width: 184px;
    height: 129px;
}

.Index .dt {
    width: 589px;
    float: left;
    margin-top: -388px;
    margin-left: 609px;
    height: 348px;
    border: 1px solid #e6e6ff;
}
</style>
