<template>
<div class="house">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <div class="top">
        <img src="../assets/img/s4.png">
        <img src="../assets/img/s5.png">
        <div class="fen">
            缴费统计分类
        </div>
    </div>
    <div class="footer" id="yyy">
        <ul>
            <li>
                <img src="../assets/img/h5.svg">
                <p>1000<br><span>水费</span></p>
            </li>
            <li>
                <img src="../assets/img/h6.svg">
                <p>500<br><span>电费</span></p>
            </li>
            <li>
                <img src="../assets/img/h7.svg">
                <p>100<br><span>燃气费</span></p>
            </li>
            <li>
                <img src="../assets/img/h8.svg">
                <p>100<br><span>宽带费</span></p>
            </li>
            <li>
                <img src="../assets/img/h9.svg">
                <p>100<br><span>停车费</span></p>
            </li>
            <li>
                <img src="../assets/img/h10.svg">
                <p>100<br><span>物业费</span></p>
            </li>

        </ul>
        <div class="zhu ">
            <template>
                <ve-line :data="chartData"></ve-line>
            </template>
            <template>
                <ve-line :data="chartData1"></ve-line>
            </template>
        </div>
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
                columns: ['分类', 'change'],
                rows: [{
                        '分类': '水费',
                        'change': 1193
                    },
                    {
                        '分类': '电费',
                        'change': 3193
                    },
                    {
                        '分类': '煤气费',
                        'change': 2193
                    },
                    {
                        '分类': '停车费',
                        'change': 7193
                    },
                    {
                        '分类': '物业费',
                        'change': 9193
                    }

                ]
            },
            chartData1: {
                columns: ['分类', 'change'],
                rows: [{
                        '分类': '水费',
                        'change': 4193
                    },
                    {
                        '分类': '电费',
                        'change': 3193
                    },
                    {
                        '分类': '煤气费',
                        'change': 1193
                    },
                    {
                        '分类': '停车费',
                        'change': 7193
                    },
                    {
                        '分类': '物业费',
                        'change': 9193
                    }

                ]
            },
        }
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
    height: 1084px;
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

.house .zhu {
    margin-top: 200px;
}
</style>
