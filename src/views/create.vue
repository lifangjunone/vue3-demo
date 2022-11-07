<template>
    <el-dialog width="20%" v-model="dialogFormVisible" title="添加学生">
        <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.sex" placeholder="选择性别">
                    <el-option label="男生" value="男" />
                    <el-option label="女生" value="女" />
                </el-select>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.age" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click=closeDialog(false)>取消</el-button>
                <el-button type="primary" @click="handleAdd">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>

</template>

<script lang="ts" setup>
import { reactive, ref , toRefs} from 'vue'
import {studentPost} from '@/api/student/api_student'


let emit = defineEmits()
let closeDialog = (type) => {
    emit('handleEmit', type)
}
const form = reactive({
  username: '',
  age: '',
  sex: '',
})


const formLabelWidth = '140px'
// 接受父组件参数
let props = defineProps({
    dialogFormVisible:Boolean,
    editData: reactive({}),
    })

const {editData} = toRefs(props)
console.log('editData', JSON.parse(JSON.stringify(editData)))
let editData2 = editData
// 添加学生接口
const handleAdd = () => {
  studentPost(form).then((res:any) => {
    if (res.code === 10000) {
    //   toLoad()
    }
    closeDialog(true)

  })
}

</script>


<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>