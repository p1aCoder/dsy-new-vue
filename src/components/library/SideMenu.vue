<template>
    <el-menu
            default-active="0"
            class="categories"
            active-text-color="#3354fe"
            @select="handleSelect">
        <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span>全部</span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span>文学</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>流行</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span>文化</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span>生活</span>
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span>经管</span>
        </el-menu-item>
        <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span>科技</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu",
        data(){
            return{
                cid:''
            }
        },
        methods:{
            handleSelect(key){
                this.cid=key
                this.$emit('indexSelect')
            }
        }
    }
</script>

<style scoped>
    .categories {
        position: fixed;
        margin-left: 50%;
        left: -800px;
        top: 100px;
        width: 200px;
    }
</style>