<template>
<div class="Login">
    <h1>XXX智慧社区管理系统</h1>
    <i-button type="primary" shape="circle" icon="ios-search"></i-button>
    <div class="yuan">
        <img src="../assets/img/l1.png" />
        <div class="deng">
            <div id="deng">
                <van-form @submit="onSubmit">
                    <van-field v-model="username" name="用户名" label="用户名" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]" />

                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit" @click="login">
                            提交
                        </van-button>
                    </div>
                </van-form>

            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            checked: true,
            activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
            inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
        };
    },
    methods: {
        onSubmit(values) {
            console.log("submit", values);
        },
        login: function () {
            this.$axios
                .post(
                    "http://139.9.169.87:8081/examsystem/login?username="+this.username+"&password="+this.password
                )
                .then((res) => {
                        console.log(this.username)
                       console.log(this.password) 
                       localStorage.setItem("token",res.data.data.token)    
                       console.log(localStorage.getItem("token")) 
                       this.$router.push({
                           path:'/Index?bb='+this.username
                       })                   
                    sessionStorage.setItem("usn", this.username);
                    sessionStorage.setItem("pwd", this.password);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.Login .kuang {
    text-align: right;
}

.Login {
    background: url("../assets/img/Lbg.png") no-repeat;
    width: 100%;
    background-size: 100%;
    height: 699px;
}

.Login h1 {
    padding-top: 150px;
    color: white;
}

.Login .yuan {
    border-radius: 12px;
    background: #ffffff;
    height: 250px;
    width: 550px;
    margin: 0px auto;
}

.Login .yuan img {
    width: 225px;
    height: 205px;
    float: left;
    padding-top: 8px;
    width: 234px;
    height: 240px;
    padding-left: 5px;
    border-right: 1px solid #3f9bde;
}

.Login .deng {
    position: relative;
}

.Login #deng {
    position: absolute;

    right: 0;
    top: 41px;
}

.Login .kuang {
    position: relative;
}

.Login #kuang {
    position: absolute;
    right: 14.1px;
    top: 9px;
    font-size: 12px;
}

.Login button.van-button.van-button--info.van-button--normal.van-button--block.van-button--round {
    margin-top: 11px;
}
</style>
