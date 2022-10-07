<template>
  <div class="material-form-wrap">
    <el-form
      inline
      :model="formData"
      class="search-form"
      label-suffix=" :"
    >
      <el-form-item label="ID">
        <el-input
          clearable
          v-model.trim="formData.id"
          @keyup.enter="search"
          placeholder="请输入ID"
        />
      </el-form-item>
      <el-form-item label="名称">
        <el-input
          clearable
          v-model.trim="formData.name"
          @keyup.enter="search"
          placeholder="请输入名称"
        />
      </el-form-item>
      <el-button type="primary" plain @click="search">查询</el-button>
      <el-button type="info" plain @click="reset">重置</el-button>
    </el-form>

    <el-button type="primary" class="create-btn" @click="emit('create')"
      >新建</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";

const defFormData = () => {
  return {
    id: "",
    name: "",
  };
};
const formData = reactive(defFormData());

const emit = defineEmits(["search", "create"]);

const reset = () => {
  Object.assign(formData, defFormData());
  search();
};

const search = () => {
  emit("search", formData);
};

onMounted(() => {
  emit("search", formData);
});
</script>

<style lang="scss">
.material-form-wrap {
    display: flex;
    justify-content: space-between;
    .search-form {
      text-align: right;
      margin-bottom: 20px;
      .el-form-item {
        margin-bottom: 0;
      }
      .el-form-item__content {
        width: 200px;
      }
    }
}
</style>
