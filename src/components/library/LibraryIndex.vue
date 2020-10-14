<template>
    <el-container>
        <el-aside width="100px" style="margin-left: -150px">
<!--            <switch></switch>-->
            <side-menu @indexSelect="listByCategory" ref="sideMenu"></side-menu>
        </el-aside>
        <el-main>
            <book ref="bookArea"></book>
        </el-main>
    </el-container>
</template>

<script>
    import SideMenu from "@/components/library/SideMenu";
    import Book from "@/components/library/Book";
    export default {
        name: "Library",
        components: {Book, SideMenu},

        methods:{
            listByCategory(){
                this.$axios.get('/book/'+this.$refs.sideMenu.cid).then(resp=>{
                    if (resp&&resp.status===200){
                        this.$refs.bookArea.books=resp.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>