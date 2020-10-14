<template>
    <div style="position: absolute;left: 200px;height: 540px;padding-right: 200px;width: 1300px">
        <el-row >
            <SearchBar @onSearch="searchResult" ref="searchBar"></SearchBar>
            <edit-form ref="editForm" @onSubmit="loadBooks"></edit-form>
            <el-tooltip
                placement="right"
                transition="el-collapse-transition"
                v-for="item in books.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                :key="item.id">
                <p slot="content">{{item.title}}</p>
                <p slot="content">
                    <span>{{item.author}}</span>*
                    <span>{{item.press}}</span>*
                    <span>{{item.date}}</span>
                </p>
                <p slot="content" style="width: 300px">{{item.abs}}</p>


                <el-card
                         style="width: 170px;margin: 0 15px 20px 0;float: left;height: 280px"
                         shadow="hover">
                    <img :src="item.cover" class="image" @click="edit(item)">
                    <div style="padding: 5px;">
                        <el-row style="text-align: left;margin-bottom: 6px">{{item.title}}</el-row>
                        <el-row style="text-align: left;font-size: 14px;color: #475669;font-family:楷体">{{item.author}}</el-row>
                        <div class="bottom clearfix">
                            <el-row style="margin-top: 5px">
                                <i style="float: right;cursor: pointer" class="el-icon-delete" @click="deleteBook(item.id)"></i>
                                <i class="el-icon-star-off" style="cursor: pointer"></i>
                            </el-row>
                        </div>
                    </div>
                </el-card>
            </el-tooltip>
        </el-row>
        <el-row style="position: absolute;right: 700px;top: 660px">
            <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            :total="books.length">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import SearchBar from "@/components/library/SearchBar";
    import EditForm from "@/components/library/EditForm";
    export default {
        name: "Book",
        components: {EditForm, SearchBar},
        data () {
            return {
                books: [],
                currentPage: 1,
                pagesize: 12
            }
        },
        mounted: function () {
            this.loadBooks()
        },
        methods: {
            loadBooks() {
                this.$axios.get('/book').then(resp => {
                    if (resp && resp.status === 200) {
                        this.books = resp.data
                    }
                })
            },
            handleCurrentChange:function (currentPage) {
                this.currentPage=currentPage
            },
            searchResult(){
                this.$axios.get("/search?keywords="+this.$refs.searchBar.keywords).then(resp=>{
                    if (resp&&resp.status===200){
                        this.books=resp.data
                    }
                })
            },
            edit(item){
                this.$refs.editForm.dialogFormVisible=true
                this.$refs.editForm.form={
                    id: item.id,
                    cover: item.cover,
                    title: item.title,
                    author: item.author,
                    date: item.date,
                    press: item.press,
                    abs: item.abs,
                    category: {
                        id: item.category.id.toString(),
                        name: item.category.name
                    }
                }
            },
            deleteBook (id) {
                this.$confirm('此操作将永久删除该书籍, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                        this.$axios
                            .post('/delete', {id: id}).then(resp => {
                            if (resp && resp.status === 200) {
                                this.loadBooks()
                            }
                        })
                    }
                ).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
        }
    }
</script>

<style scoped>
    .image {
        width: 99%;
        height: 170px;
        display: block;
        cursor: pointer;
        padding: 0 -10px 10px -10px;
    }
</style>