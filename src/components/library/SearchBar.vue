<template>
    <div style="display: flex;justify-content: center;margin-bottom: 30px">
        <el-input prefix-icon="el-icon-search" v-model="keywords" placeholder="请输入关键字"
                  @keyup.enter.native="onClick" style="width: 400px;margin-right: 30px"></el-input>
        <el-button icon="el-icon-search" @click="onClick">Search</el-button>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        data(){
            return{
                keywords:''
            }
        },

        methods:{
            onClick(){
                this.$emit("onSearch")
            }
        }
    }
</script>

<style scoped>

</style>