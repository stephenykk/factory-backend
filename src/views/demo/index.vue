<template>
  <div class="main">
    <el-container>
      <!-- <el-header>
        <Nav />
      </el-header> -->
      <!--主体-->
      <el-main>
        <!--表格-->
        <el-row>
          <el-col :span="8">
            <div class="grid-content ep-bg-purple" />
          </el-col>
          <el-col :span="8">
            <div class="grid-content ep-bg-purple-light" />
          </el-col>
          <el-col :span="8">
            <div class="grid-content ep-bg-purple" />
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="id">
                <el-input v-model="formInline.id" placeholder="请输入id" />
              </el-form-item>
              <el-form-item label="名称">
                <el-input v-model="formInline.name" placeholder="请输入名称" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>

        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%"
          :height=500 size="large">
          <el-table-column prop="id" sortable label="id" width="100" />
          <el-table-column prop="name" label="名称" width="180" />
          <el-table-column prop="cost" sortable label="单价" />
          <el-table-column prop="date" sortable label="更新日期" />
          <el-table-column prop="user" label="变更人" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary" @click="handleUpdate(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger" @click="handleUpdate(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-table :data="tableData2" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%"
          :height=500 size="large">
          <el-table-column prop="id" sortable label="id" width="100" />
          <el-table-column prop="name" label="名称" width="180" />
          <el-table-column prop="type" sortable label="审核状态" />
          <el-table-column prop="date" sortable label="创建日期" />
          <el-table-column prop="user" label="变更人" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary" @click="handleUpdate(scope.$index, scope.row)">编辑</el-button>
              <el-button type="primary" @click="handleUpdate(scope.$index, scope.row)">审核</el-button>
              <el-button type="danger" @click="handleUpdate(scope.$index, scope.row)">删除</el-button>

            </template>
          </el-table-column>
        </el-table>
        <el-footer>
          <div class="example-pagination-block">
            <el-pagination background layout="prev, pager, next" :total="50" />
          </div>
        </el-footer>
      </el-main>
    </el-container>
  </div>
</template>
  
  
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { tableData, tableData2 } from '@/mock/data'
// import Nav from '@/components/Nav.vue'

const formInline = reactive({
  id: '',
  name: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (payload: any) => {
  console.log(payload)
}

const handleUpdate = (index: number, row: any) => {
  console.log(index, row)
}
</script>
  
  
<style>
.main {
  display: flex;
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
}

.example-pagination-block {
  margin-top: 30px;
  position: absolute;
  right: 20px;
}

.el-col-8 {
  height: 80px;
  padding-top: 20px;
}
</style>