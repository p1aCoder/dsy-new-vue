<template>
    <el-dialog :visible.sync="rateVisible" title="请给本书打分">
        <p style="margin-top: -20px">书名：{{form.title}}</p>
        <el-form>
            <el-form-item style="margin-top: 20px">
                <el-rate
                        :max="10"

                        style="margin-top: -10px"
                        v-model="form.rate"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                        :allow-half="true"
                        show-text
                        :texts="['1','2','3','4','5','6','7','8','9','10']">
                </el-rate>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button @click="rateVisible=false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
    export default {
        name: "RateForm",
        data() {
            return {
                form:{
                  id:'',
                  title:'',
                  rate:''
                },
                rateVisible:false
            }
        },
        methods:{
            onSubmit(){
                this.$axios.post('/rate',{
                    rate:this.form.rate,
                    title: this.form.title,
                    id:this.form.id
                }).then(resp=>{
                    this.rateVisible=false
                    if (resp.data.code===200){
                        this.$message(resp.data.result)
                    }else {
                        this.$message(resp.data.message)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>