<template>
  <el-dialog width="20%" v-model="dialogFormVisible" title="添加学生">
    <el-form :model="editData3">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="editData3.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-select v-model="editData3.sex" placeholder="选择性别">
          <el-option label="男生" value="男" />
          <el-option label="女生" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" :label-width="formLabelWidth">
        <el-input v-model="editData3.age" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click=closeDialog(false)>取消</el-button>
        <el-button type="primary" @click="handleAddOrUpdate">
          保存
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue'
import { studentPost, studentPut } from '@/api/student/api_student'

let emit = defineEmits()

let closeDialog = (type) => {
  emit('handleEmit', type)
}
let editData3 = reactive({
  username: "",
  age: 0,
  sex: "",
})


const formLabelWidth = '140px'
// 接受父组件参数
let props = defineProps({
  dialogFormVisible: Boolean,
  isCreate: Boolean,
  editData: Object,

});

const { isCreate, editData } = toRefs(props)

console.log('editData::', JSON.parse(JSON.stringify(editData)))

if (isCreate.value === true) {
  let editData2 = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(editData))))["_object"]["editData"]["value"]
  console.log(editData2)
  editData3 = reactive(editData2)
}

const handleAddOrUpdate = () => {
  console.log("3333333", isCreate.value)
  if (isCreate.value === true) {
    handleEdit()

  } else {
    handleAdd()
  }
}

// 添加学生接口
const handleAdd = () => {
  studentPost(editData3).then((res: any) => {
    if (res.code === 10000) {
      closeDialog(true)
    }
    closeDialog(false)
  })
}

// 编辑学生接口
const handleEdit = () => {
  studentPut(editData3).then((res: any) => {
    if (res.code === 10000) {
      closeDialog(true)
    }
    closeDialog(false)
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