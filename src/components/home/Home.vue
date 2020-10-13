<template>
    <el-container>
        <NavMenu></NavMenu>
        <router-view/>
    </el-container>
</template>

<script>
    import NavMenu from "@/components/home/NavMenu";
    export default {
        name: "Home",
        components: {NavMenu}
    }
</script>

<style scoped>

</style>