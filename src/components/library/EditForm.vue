<template>
    <div>
        <el-dialog :visible.sync="dialogFormVisible" @close="clear" title="添加/修改图书">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="书名">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.author"></el-input>
                </el-form-item>
                <el-form-item label="出版社">
                    <el-input v-model="form.press"></el-input>
                </el-form-item>
                <el-form-item label="封面">
                    <el-input v-model="form.cover"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input type="textarea" v-model="form.abs"></el-input>
                </el-form-item>
                <el-form-item label="种类">
                    <el-radio-group v-model="form.category.name">
                        <el-radio label="文学" value="1"></el-radio>
                        <el-radio label="流行" value="2"></el-radio>
                        <el-radio label="文化" value="3"></el-radio>
                        <el-radio label="生活" value="4"></el-radio>
                        <el-radio label="经管" value="5"></el-radio>
                        <el-radio label="科技" value="6"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="出版时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date"
                                    value-format="yyyy-M-d" style="width: 50%;"></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确定</el-button>
                    <el-button @click="dialogFormVisible=false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "EditForm",
        data(){
            return{
                dialogFormVisible:false,
                form:{
                    id:'',
                    title:'',
                    author:'',
                    date:'',
                    press:'',
                    cover:'',
                    abs:'',
                    category:{
                        id:'',
                        name:''
                    }
                }
            }
        },

        methods:{
            onSubmit(){
                this.$axios.post('/book',{
                    id: this.form.id,
                    cover: this.form.cover,
                    title: this.form.title,
                    author: this.form.author,
                    date: this.form.date,
                    press: this.form.press,
                    abs: this.form.abs,
                    category: this.form.category
                }).then(resp=>{
                    if (resp&&resp.status===200){
                        this.dialogFormVisible=false
                        this.$emit("onSubmit")
                    }
                })
            },
            clear () {
                this.form = {
                    id: '',
                    title: '',
                    author: '',
                    date: '',
                    press: '',
                    cover: '',
                    abs: '',
                    category: {}
                }
            },
        }
    }
</script>

<style scoped>

</style>