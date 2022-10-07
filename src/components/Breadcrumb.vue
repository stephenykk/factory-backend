<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="route of $route.matched"
      :key="route.path"
      :to="{ path: route.path }"
      >{{ route.meta.title || route.name }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const $route = useRoute();
</script>

<style lang="scss">
.el-breadcrumb {
  padding: 10px;
  background: #f2f2f2;
  margin-bottom: 40px;
  border-radius: 3px;
}
</style>
