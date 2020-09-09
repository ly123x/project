<template>
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个人充值交费" name="first">
        <div>111</div>
    </el-tab-pane>
    <el-tab-pane label="宽带包年续费" name="second">配置管理</el-tab-pane>
</el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>
