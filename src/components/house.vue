<template>
<div class="house">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <div class="top">
        <img src="../assets/img/s4.png">
        <img src="../assets/img/s5.png">
        <div class="fen">
            房屋统计分类
        </div>
    </div>
    <div class="footer">
        <ul>
            <li>
                <img src="../assets/img/h1.svg">
                <p>1000<br><span>毛坯数</span></p>
            </li>
            <li>
                <img src="../assets/img/h2.svg">
                <p>500<br><span>精装数</span></p>
            </li>
            <li>
                <img src="../assets/img/h3.svg">
                <p>100<br><span>豪华精装数</span></p>
            </li>
            <li>
                <img src="../assets/img/h4.svg">
                <p>100<br><span>入住数</span></p>
            </li>
        </ul>
        <div class="zhu ">
            <template>
                <ve-histogram :data="chartData"></ve-histogram>
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
                columns: ['分类', 'house_num', 'house_area'],
                rows: [{
                        '分类': '毛坯',
                        'house_num': 993,
                        'house_area': 1093,
                    },
                    {
                        '分类': '精装',
                        'house_num': 1393,
                        'house_area': 953,
                    },
                    {
                        '分类': '豪华精装',
                        'house_num': 123,
                        'house_area': 1093,
                    },
                    {
                        '分类': '入住',
                        'house_num': 1393,
                        'house_area': 123
                    }

                ]
            }
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
    height: 700px;
    margin-top: 13px;
}

.house .footer ul li {
    border: 1px solid #797979;
    border-radius: 10px;
    float: left;
    width: 175px;
    height: 80px;
    font-size: 16px;
    margin: 24px 46px;
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
