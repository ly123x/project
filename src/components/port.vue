<template>
<div class="propertypaycosst">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <wuyeHeader :index="2"></wuyeHeader>
    <div class="cha">
        <p class="p1">查看历史账单</p>
        <ul class="u3">
            <li>
                <div>
                    <p>{{one}}</p>
                    <p>{{one1}}</p>
                </div>
                <div>
                    <p>{{two}}<span>{{two1}}</span><span class="red">{{three1}}</span>{{three}}</p>
                    <p>{{three2}}<span class="red">{{three3}}</span>{{three4}}</p>
                </div>
                <p>
                    <button class="b1">立即缴费</button>
                </p>
            </li>
            <li>
                <div>
                    <p>{{one}}</p>
                    <p>{{one1}}</p>
                </div>
                <div>
                    <p>{{two}}<span>{{two1}}</span><span class="red">{{three1}}</span>{{three}}</p>
                    <p>{{three2}}<span class="red">{{three3}}</span>{{three4}}</p>
                </div>
                <p>
                    <button class="b1">立即缴费</button>
                </p>
            </li>
            <li>
                <div>
                    <p>{{one}}</p>
                    <p>{{one1}}</p>
                </div>
                <div>
                    <p>{{two}}<span>{{two1}}</span><span class="red">{{three1}}</span>{{three}}</p>
                    <p>{{three2}}<span class="red">{{three3}}</span>{{three4}}</p>
                </div>
                <p>
                    <button class="b1">立即缴费</button>
                </p>
            </li>
            <li>
                <div>
                    <p>{{one}}</p>
                    <p>{{one1}}</p>
                </div>
                <div>
                    <p>{{two}}<span>{{two1}}</span><span class="red">{{three1}}</span>{{three}}</p>
                    <p>{{three2}}<span class="red">{{three3}}</span>{{three4}}</p>
                </div>
                <p>
                    <button class="b1">立即缴费</button>
                </p>
            </li>
            <li>
                <div>
                    <p>{{one}}</p>
                    <p>{{one1}}</p>
                </div>
                <div>
                    <p>{{two}}<span>{{two1}}</span><span class="red">{{three1}}</span>{{three}}</p>
                    <p>{{three2}}<span class="red">{{three3}}</span>{{three4}}</p>
                </div>
                <p>
                    <button class="b1">立即缴费</button>
                </p>
            </li>
            <li>
                <div>
                    <p>{{one}}</p>
                    <p>{{one1}}</p>
                </div>
                <div>
                    <p>{{two}}<span>{{two1}}</span><span class="red">{{three1}}</span>{{three}}</p>
                    <p>{{three2}}<span class="red">{{three3}}</span>{{three4}}</p>
                </div>
                <p>
                    <button class="b1">立即缴费</button>
                </p>
            </li>
        </ul><br>
        <div class="f1">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import Iheader from "../components/IHeader";
import sidebar from "../components/sidebar";
import wuyeHeader from "../components/wuyeHeader"
export default {
    props: ['index'],
    data() {
        return {
            one: '',
            one1: '',
            two: '',
            two1: '',
            three1: '',
            three2: '',
            three3: '',
            three: '',
            three4: '',
        }
    },
    components: {
        Iheader,
        sidebar,
        wuyeHeader
    },
    created() {
        let that = this
        this.$axios
            .get(
                "https://www.fastmock.site/mock/7e5b574c19d281a25349f30de2db85d0/eslm/elsm"
            )
            .then((res) => {
                that.one = res.data.y1.one;
                that.one1 = res.data.y1.one1;
                that.two = res.data.y1.two;
                that.two1 = res.data.y1.two1;
                that.three = res.data.y1.three;
                that.three1 = res.data.y1.three1;
                that.three2 = res.data.y1.three2;
                that.three3 = res.data.y1.three3;
                that.three4 = res.data.y1.three4;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};
</script>

<style>
@import url("../assets/css/wuye.css");
</style>
