<template>
<div>
    <Iheader></Iheader>
    <sidebar></sidebar>
    <wuyeHeader :index="5"></wuyeHeader>
    <div class="big">
        <div class="top">
            <div class="one">
                缴费单位<select>
                    <option v-for="(item, index) in one" :key="index">{{
              item
            }}</option>
                </select>
            </div>
            <div class="two">用户编号:<input type="text" v-model="two" /></div>

            <p class="p1">查询</p>
            <p class="p2">查看历史账单</p>
        </div>
        <div class="top1">
            <ul>
                <li v-for="(item, index) in two1" :key="index">
                    {{item.li}}
                    <input type="text" :placeholder="item.li1" class="t2">
                </li>
            </ul>
        </div>
        <p class="p3">立即缴费</p>
    </div>
</div>
</template>

<script>
import Iheader from "../components/IHeader";
import sidebar from "../components/sidebar";
import wuyeHeader from "../components/wuyeHeader";
export default {
    props: ['index'],
    data() {
        return {
            one: [],
            two: {},
            two1: [],
        };
    },
    components: {
        Iheader,
        sidebar,
        wuyeHeader,
    },
    created() {
        let that = this;
        this.$axios
            .get(
                "https://www.fastmock.site/mock/7e5b574c19d281a25349f30de2db85d0/eslm/elsm"
            )
            .then((res) => {
                that.one = res.data.y2;
                that.two = res.data.y3.li;
                that.two1 = res.data.y5;
                console.log(that.two);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};
</script>

<style scoped>
.bg-light-gray {
    margin-left: 223px;
    border: 1px solid #e9e9ff;
    margin-top: 142px;
    height: 700px;
}

.p1 {
    color: white;
    height: 33px;
    line-height: 36px;
    width: 81px;
    float: right;
    background: #bdbdff;
    margin-right: 172px;
    border-radius: 6px;
    margin-top: 29px;
}

.top1 {
    padding-top: 50px;
}

.top1 input {
    width: 305px;
    height: 25px;
    padding-left: 3px;
}

.top1 ul li {
    padding: 10px 0px;
}

.top1 ul li:nth-of-type(4) input,
.top1 ul li:nth-of-type(5) input {
    margin-left: 30px;
}

input.t2 {
    margin-left: 10px;
}

.t1 {
    margin-left: 20px;
}

.p2 {
    color: white;
    height: 33px;
    line-height: 36px;
    width: 81px;
    float: right;
    background: #bdbdff;
    margin-right: 72px;
    border-radius: 6px;
    margin-top: -34px;
}

.p3[data-v-1d4e3f92] {
    color: white;
    height: 33px;
    line-height: 36px;
    width: 305px;
    background: #bdbdff;
    border-radius: 6px;
    margin: 0px auto;
    position: absolute;
    text-align: center;
    left: 620px;
    top: 625px;
}

.one {
    float: left;
    line-height: 100px;
}

.top {
    height: 100px;
    border: 1px solid #e9e9ff;
    border-top: none;
    padding-left: 50px;
    margin-left: 222px;
    margin-top: 132px;
}

select {
    width: 305px;
    height: 30px;
    border-color: rgba(240, 238, 240, 1);
    margin-left: 10px;
}

.two {
    margin-left: 67px;
    float: left;
    margin-top: 38px;
}

.two input {
    width: 305px;
    margin-left: 10px;
    height: 30px;
    margin-top: -20px;
}
</style>
