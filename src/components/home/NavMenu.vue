<template>
    <el-row>
        <el-menu style="margin-top: -60px" active-text-color="#66ccff" router
                 :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/jotter">笔记</el-menu-item>
            <el-menu-item index="/library">图书</el-menu-item>
            <el-menu-item index="/admin">个人</el-menu-item>
            <span style="position: absolute;left: 700px;top:14px;font-size: 20px">white_jotter</span>
        </el-menu>

        <div class="line"></div>

    </el-row>
</template>

<script>
    export default {
        name:"NavMenu",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>