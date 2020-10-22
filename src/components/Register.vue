<template>
    <body id="poster">
    <el-card style="padding: 20px 100px 0 50px;margin:200px 500px 0 500px" class="login-container">
        <p style="font-family: 华文楷体;font-size: x-large" >注册</p>
        <el-form ref="form" :model="loginForm"  >
            <el-form-item label="name" style="height: 30px" label-width="50px">
                <el-input v-model="loginForm.username" ></el-input>
            </el-form-item>
            <el-form-item label="paw" style="height: 30px" label-width="50px">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
        </el-form>
        <router-link to="/login"><el-button type="error"  style="margin-right: 15px;border: none">返回</el-button></router-link>
        <el-button type="primary" v-on:click="register" style="background: black;border: none">注册</el-button>
    </el-card>
    </body>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                loginForm:{
                    username:'',
                    password:'',
                }
            }
        },
        methods:{
            register(){
                this.$axios.post("/register",{
                    username:this.loginForm.username,
                    password:this.loginForm.password
                }).then(resp=>{
                    if (resp.data.code===200){
                        this.$alert("注册成功","提示",{
                            confirmButtonText:'确定'
                        })
                        this.$router.replace("/login")
                    }else {
                        this.$alert(this.data.message,'提示',{
                            confirmButtonText:'确定'
                        })
                    }
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
        background: url("../assets/girl.jpg") no-repeat center;
        height: 100%;
        width: 100%;
        margin-top: -60px;
        margin-left: -10px;
        background-size: cover;
        position: fixed;
    }
</style>