<template>
    <el-container>
        <el-tabs tab-position="left"  style="font-size: xx-large;height: 800px;width:100%;margin-left: -250px">
            <el-tab-pane label="展示">
                <div>
                    <el-carousel :interval="4000" type="card" height="400px">
                        <el-carousel-item v-for="item in imagebox" :key="item.id">
                            <img :src="item.idView" class="image">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </el-container>
</template>

<script>
    export default {
        name: "AppIndex",
        data(){
            return {
                imagebox:[{id:0,idView:require('@/assets/girl2.jpg')},
                    {id:1,idView:require('@/assets/girl.jpg')},
                    {id:2,idView:require('@/assets/fruit.jpg')},
                ]
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>