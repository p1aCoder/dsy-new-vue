<template>


    <body id="poster">
        <el-card style="padding: 20px 100px 0 50px;margin:200px 500px 0 500px" class="login-container">
            <p style="font-family: 华文楷体;font-size: x-large" >系统</p>
            <el-form ref="form" :model="loginForm"  >
                <el-form-item label="name" style="height: 30px" label-width="50px">
                    <el-input v-model="loginForm.username" ></el-input>
                </el-form-item>
                <el-form-item label="paw" style="height: 30px" label-width="50px">
                    <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" v-on:click="login" style="background: black;border: none">登录</el-button>
            <router-link to="/register"><el-button type="warning" style="margin-left: 15px;border: none">注册</el-button></router-link>
        </el-card>
    </body>

</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                loginForm:{
                    username:'dsy',
                    password:'123',
                }
            }
        },
        methods:{
            login(){
                this.$axios.post("/login",{
                    username:this.loginForm.username,
                    password:this.loginForm.password
                }).then(resp=>{
                    if (resp.data.code===200){
                        this.$store.commit('login',this.loginForm)
                        var path=this.$route.query.redirect
                        this.$router.replace({path:path==='/' || path===undefined ? '/index' :path})
                    }else {
                        this.$message(resp.data.message)
                    }

                }).catch(()=> {

                })
            }
        }
    }
</script>

<style scoped>
    .login-container{
        border-radius: 15px;
        background-clip: padding-box;
        opacity: 80%;
    }

    #poster{
        background: url("../assets/cloud1.jpg") no-repeat center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }
</style>

<!--12-->