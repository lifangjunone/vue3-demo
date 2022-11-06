<template style="backgroud=red">
<h3>学生管理系统</h3>
<button style="background: green" @click="handleAdd()">添加</button>

<el-table :data="tableObj.tableData" style="width: auto">
    <el-table-column prop="id" label="编号" width="auto" />
    <el-table-column prop="username" label="姓名" width="auto" />
    <el-table-column prop="sex" label="性别" width="auto"/>
    <el-table-column prop="age" label="年龄" width="auto"/>
    <el-table-column fixed="right" label="操作" width="auto">
    <template #default="scope">
      <el-button link type="primary" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
      <el-button link type="primary" size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
    </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { studentGet, studentDelete, studentPost, studentPut } from '@/api/student/api_student'

const tableObj = reactive({
  tableData:[]
})
// 添加学生接口
const handleAdd = () => {
  studentPost({}).then((res:any) => {
    if (res.code === 10000) {
      toLoad()
    }
  })
}
// 删除学生接口
const handleDelete = (id: number) => {

  const params ={
    id: id,
  }
  JSON.stringify(params)
  studentDelete(params).then((res:any) => {
    if (res.code === 10000) {
      toLoad()
    }
  })
}
// 编辑学生接口
const handleEdit = (id: number) => {
  studentPut(id).then((res:any) => {
    if (res.code === 10000) {
      toLoad()
    }
  })
}
// 显示学生列表
const toLoad = () => {
  studentGet({}).then((res:any) => {
    if (res.code === 10000) {
      tableObj.tableData = res.data
    }
  })
}
onMounted(() =>{
  toLoad()
})


</script>
<style scoped>

</style>