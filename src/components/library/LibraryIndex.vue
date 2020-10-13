<template>
    <el-container>
        <el-aside width="100px" style="margin-left: -150px">
<!--            <switch></switch>-->
            <side-menu></side-menu>
        </el-aside>
        <el-main>
            <book></book>
        </el-main>
    </el-container>
</template>

<script>
    import SideMenu from "@/components/library/SideMenu";
    import Book from "@/components/library/Book";
    export default {
        name: "Library",
        components: {Book, SideMenu}
    }
</script>

<style scoped>

</style>