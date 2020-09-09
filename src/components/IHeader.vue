<template>
<div class="IHeader" :style="{background:color1}">
    <div class="left">
        <img src="../assets/img/s1.png" />
    </div>
    <div class="white">
        <h1>XXXX智慧社区管理系统</h1>
    </div>
    <div class="one">
        <el-dropdown>
            <span class="el-icon-s-custom" style="color:white;font-size:30px">
                <span style="color:white;font-size:20px"> admin</span><i class="el-icon-caret-bottom el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <div>修改密码</div>
                <div>
                    个人资料
                </div>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
    <div class="two">
        <el-dropdown style="color:white;font-size:23px">
            <span class="el-icon-magic-stick">
                换肤<i class=" el-icon--right"></i>
                <el-dropdown-menu slot="dropdown">
                    <div class="block">
                        <el-color-picker v-model="color1"></el-color-picker>
                    </div>
                </el-dropdown-menu>
            </span>
        </el-dropdown>
    </div>
    <div class="three">
        <div id="three">
            <el-dropdown>
                <span class="el-icon-question" style="color:white;font-size:30px">
                    <span style="color:white;font-size:20px"> 帮助</span><i class="el-icon-caret-bottom el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <div>帮助文档</div>
                    <div>
                        关于系统
                    </div>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
    <div class="four">
        <div id="four">
            <template>
                <span>{{this.$store.state.name}}</span>
                <el-button type="text" @click="open"><i class="el-icon-warning-outline" style="color:white;font-size:30px"></i></el-button>
            </template>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            color1: '#957BFE',
        };
    },
    methods: {
        open() {
            this.$confirm('确定要退出吗, 是否继续?', '系统提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true,
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出成功!',
                }, this.$router.push({
                    path: "/Login"
                }), sessionStorage.clear());
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出'
                });
            });
        }
    }
};
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
    color: whitesmoke;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.IHeader .white {
    color: white;
    float: left;
    padding-left: 20px;
    padding-top: 25px;
}

.IHeader .one {
    padding-top: 25px;
    cursor: pointer;
    color: purple;
    font-weight: bolder;
}

.IHeader .two {
    margin-left: 786px;
    margin-top: -33px;
    padding-top: -33px;
    color: white;
}

.IHeader .left {
    float: left;
    padding-top: 15px;
    padding-left: 20px;
}

.IHeader #three {
    position: absolute;
    margin-left: 1149px;
    top: -33px;
}

.IHeader .three {
    position: relative;
}

.IHeader #four {
    position: absolute;
    margin-left: 1260px;
    top: -45px;
}

.IHeader .four {
    position: relative;
}

.IHeader {
    width: 100%;
    height: 95px;
}
</style>
