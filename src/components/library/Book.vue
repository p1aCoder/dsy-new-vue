<template>
    <div>
        <el-row style="height: 840px">
            <el-tooltip
                placement="right"
                transition="el-collapse-transition"
                v-for="item in books"
                :key="item.id">
                <p slot="content">{{item.title}}</p>
                <p slot="content">
                    <span>{{item.author}}</span>*
                    <span>{{item.press}}</span>*
                    <span>{{item.date}}</span>
                </p>
                <p slot="content" style="width: 300px">{{item.abs}}</p>


                <el-card :body-style="{ padding: '0px' }" style="width: 150px;margin: 0 15px 20px 0">
                    <img :src="item.cover" class="image">
                    <div style="padding: 5px;">
                        <el-row style="text-align: left">{{item.title}}</el-row>
                        <el-row style="text-align: left;font-size: 14px;color: #475669;font-family:楷体">{{item.author}}</el-row>
                        <div class="bottom clearfix">
                            <el-button type="text" style="float: right" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>

            </el-tooltip>
        </el-row>
        <el-row>
            <el-pagination
            :current-page="1"
            :page-size="10"
            :total="20">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return{
                books:[
                    {
                        cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
                        title: '三体',
                        author: '刘慈欣',
                        date: '2019-05-05',
                        press: '重庆出版社',
                        abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .image {
        width: 88%;
        display: block;
        cursor: pointer;
        padding: 10px 10px 10px 10px;
    }
</style>