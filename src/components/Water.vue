<template>
<div class="propertypaycosst">
    <Iheader></Iheader>
    <sidebar></sidebar>
    <wuyeHeader :index="0"></wuyeHeader>
    <div class="cha">
        <p class="p1">查看历史账单</p>
        <ul class="u2">
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
            <li>
                <p>{{one}}<span>{{one1}}</span></p>
                <p>{{two}}<span>{{two1}}</span></p>
                <p><span class="red">{{three}}</span><span class="blue">{{three1}}</span><button>{{three2}}</button></p>
            </li>
        </ul><br>
        <div class="footer">
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
            three: '',
            three1: '',
            three2: ''
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
                that.one = res.data.one;
                that.one1 = res.data.one1;
                that.two = res.data.two;
                that.two1 = res.data.two1;
                that.three = res.data.three;
                that.three1 = res.data.three1;
                that.three2 = res.data.three2;
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
