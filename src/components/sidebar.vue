<template>
<div class="sidebar">
    <div class="zz">
        <el-col :span="12">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#623BFE" text-color="#fff" active-text-color="#CCCCFF">
                <el-menu-item index="1">
                    <i class="el-icon-s-home
"></i>
                    <span slot="title" @click="shou">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-s-shop
e"></i>
                        <span>智慧物业</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="water">物业缴费</el-menu-item>
                        <el-menu-item index="1-2" @click="select">缴费查询</el-menu-item>
                        <el-menu-item index="1-3" @click="repairs">故障报修</el-menu-item>
                        <el-menu-item index="1-4" @click="note">公告管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-s-custom"></i>
                        <span>社区医疗</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">预约挂号</el-menu-item>
                        <el-menu-item index="1-2">健康驿站</el-menu-item>
                        <el-menu-item index="1-3">医生简介</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-s-grid"></i>
                        <span>智能应用</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="stopcar">智能停车</el-menu-item>
                        <el-menu-item index="1-2" @click="open">智能开门</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-s-data"></i>
                        <span>数据统计</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="house">房屋分类</el-menu-item>
                        <el-menu-item index="1-2" @click="analyze">缴费分析</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-s-promotion"></i>
                        <span>基本信息</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="homex">房屋信息</el-menu-item>
                        <el-menu-item index="1-2" @click="ren">人口信息</el-menu-item>
                        <el-menu-item index="1-3" @click="equipment">设备信息</el-menu-item>
                        <el-menu-item index="1-4" @click="map">电子地图</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <i class="el-icon-s-tools"></i>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="user">用户管理</el-menu-item>
                        <el-menu-item index="1-2" @click="role">角色管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: true,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        shou: function () {
            this.$router.push({
                path: '/Index'
            })
        },
        equipment: function () {
            this.$router.push({
                path: '/equipment'
            })
        },
        house: function () {
            this.$router.push({
                path: '/house'
            })
        },
        water: function () {
            this.$router.push({
                path: '/water'
            })
        },
        analyze: function () {
            this.$router.push({
                path: '/analyze'
            })
        },
        homex: function () {
            this.$router.push({
                path: '/homex'
            })
        },
        map: function () {
            this.$router.push({
                path: '/map'
            })
        },
        ren: function () {
            this.$router.push({
                path: '/population'
            })
        },
        stopcar: function () {
            this.$router.push({
                path: '/stopcar'
            })
        },
        role: function () {
            this.$router.push({
                path: '/role'
            })
        },
        user: function () {
            this.$router.push({
                path: '/usermanager'
            })
        },
        open: function () {
            this.$router.push({
                path: '/open'
            })
        },
        select: function () {
            this.$router.push({
                path: '/costselect'
            })
        },
         note: function () {
            this.$router.push({
                path: '/note'
            })
        },
         repairs: function () {
            this.$router.push({
                path: '/repairs'
            })
        }
    }
};
</script>

<style scoped>
.sidebar span.el-radio-button__inner {
    width: 0px;
}

.sidebar i {
    color: white !important;
}

.sidebar .zhan {
    margin-left: -1221px;
    margin-top: 13px;
}

.sidebar .zz {
    float: left;
    color: white;
}

.sidebar .kai {
    margin-left: -12px;
    font-size: 1px;
}

.sidebar .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 0px !important;
}

.sidebar.sidebar .el-col-12 {
    width: 144%;
    height: 1308px;
    background: #957BFF;
    margin-top: 22px;
    margin-left: 5px;
}
</style>
