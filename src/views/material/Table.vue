<template>
  <div class="material-table-wrap">
    <el-table
      class="material-table"
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
      :max-height="500"
      size="large"
      border
    >
      <el-table-column
        align="center"
        prop="id"
        sortable
        label="ID"
        width="100"
      />
      <el-table-column align="center" prop="name" label="名称" width="180" />
      <el-table-column align="center" prop="cost" sortable label="单价" />
      <el-table-column align="center" prop="date" sortable label="更新日期" />
      <el-table-column align="center" prop="user" label="变更人" />
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" @click="handleDel(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-wrap">
      <el-pagination
        background
        hide-on-single-page
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @update:current-page="emit('update:current-page', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { tableData } from "@/mock/data";

import { watch } from 'vue';

const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
});

const emit = defineEmits(['update:current-page'])

console.log("🚀 ~ file: Table.vue ~ line 69 ~ props", props)

const handleEdit = (row: object) => {
  console.log("🚀 ~ file: Table.vue ~ line 23 ~ handleEdit ~ row", row);
};

const handleDel = (row: object) => {
  console.log("🚀 ~ file: Table.vue ~ line 28 ~ handleDel ~ row", row);
};
</script>

<style lang="scss">
.material-table-wrap {
  .pagination-wrap {
    text-align: right;
    margin-top: 10px;
  }
  .el-pagination {
    display: inline-flex;
  }
}
</style>
