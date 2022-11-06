<template>

<el-table :data="tableObj.tableData" style="width: 100%">
    <el-table-column prop="id" label="Date" width="180" />
    <el-table-column prop="username" label="Name" width="180" />
    <el-table-column prop="sex" label="Address" />
  </el-table>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { student } from '@/api/student/api_student'

const tableObj = reactive({
  tableData:[]
})

const toLoad = () => {
  student({}).then((res:any) => {
    console.log("======", res)
    if (res.code === 10000) {
      console.log(res.data)
      tableObj.tableData = res.data
      console.log("------", tableObj.tableData)
    }
  })
}
onMounted(() =>{
  toLoad()
})
</script>
<style scoped>

</style>