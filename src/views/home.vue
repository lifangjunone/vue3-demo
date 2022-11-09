<template>
  <div style="margin-top:100px">
    <h3 style="font-weight:bolder">学生管理系统</h3>
    <button style="background: green; margin-top:40px; margin-bottom:40px" @click="dialogFormVisible = true"
      :editData="tsData">添加</button>

    <el-table :data="tableObj.tableData" style="width: auto">
      <el-table-column prop="id" label="编号" width="auto" />
      <el-table-column prop="username" label="姓名" width="auto" />
      <el-table-column prop="sex" label="性别" width="auto" />
      <el-table-column prop="age" label="年龄" width="auto" />
      <el-table-column prop="created_at" label="创建时间" width="auto" />
      <el-table-column prop="updated_at" label="更新时间" width="auto" />
      <el-table-column fixed="right" label="操作" width="auto">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
          <el-button link type="primary" size="small" @click="editRow(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 引入子页面［添加页面］ -->
    <create v-if="dialogFormVisible" @handleEmit="handleList" :editData="tsData" :isCreate="isCreate"
      v-model:dialogFormVisible="dialogFormVisible"></create>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, defineComponent } from 'vue'
import { studentGet, studentDelete, studentPut } from '@/api/student/api_student'

import create from './create.vue'


let dialogFormVisible = ref(false)
let isCreate = ref(false)
let tsData = reactive({})

let tableObj = reactive({
  tableData: [],
})


// 删除学生接口
const handleDelete = (id: number) => {

  const params = {
    id: id,
  }
  JSON.stringify(params)
  studentDelete(params).then((res: any) => {
    if (res.code === 10000) {
      toLoad()
    }
  })
}

// 显示学生列表
const toLoad = () => {
  studentGet({}).then((res: any) => {
    if (res.code === 10000) {
      tableObj.tableData = res.data
    }
  })
}

const handleList = (type) => {
  if (type) {
    toLoad()
  }
  dialogFormVisible.value = false
  isCreate.value = false

}
const editRow = (index) => {
  tsData.value = JSON.parse(JSON.stringify(tableObj.tableData[index]))
  console.log('curRow', tsData)
  dialogFormVisible.value = true
  isCreate.value = true
  return tsData
}

onMounted(() => {
  toLoad()
})

</script>
<style scoped>

</style>