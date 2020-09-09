<template>
<div>
    {{msg}}
</div>
</template>

<script>
export default {
    data() {
        return {
            msg: []
        };
    },
    created() {
        let that = this;
        this.$axios
            .get(
                "http://47.111.250.151:8081/api/Question/GetQuestion"
            )
            .then((res) => {
                that.msg = res.data;
                console.log(msg)
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};
</script>

<style></style>
