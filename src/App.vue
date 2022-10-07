<template>
  <div class="app-main">
    <el-container>

      <el-header>
        <Nav />
      </el-header>

      <el-main>
        <Breadcrumb />
        <RouterView />
      </el-main>

    </el-container>
  </div>
</template>


<script setup lang="ts">
import { RouterView } from 'vue-router'

import Nav from '@/components/Nav.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

</script>


<style>
.app-main {
  margin: 0;
  padding: 0;
}
</style>