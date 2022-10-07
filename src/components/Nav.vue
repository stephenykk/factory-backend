<template>
  <el-menu
    :default-active="activeMenuIndex"
    class="nav-menu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
    :ellipsis="false"
  >
    <!-- <el-menu-item index="0">LOGO</el-menu-item> -->
    <el-menu-item class="logo-wrap" index="index"><Logo /></el-menu-item>
    <!-- <li class="logo-wrap" index="0"><Logo /></li> -->
    <li class="flex-1" />
    <el-menu-item index="materialManage">原料管理</el-menu-item>
    <el-menu-item index="orderManage">订单管理</el-menu-item>
    <el-menu-item index="userManage" disabled>人员管理</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router'
import Logo from './icons/IconEcosystem.vue'


const $router = useRouter()
console.log("🚀 ~ file: Nav.vue ~ line 29 ~ router", $router)

const activeMenuIndex = ref("materialManage");

const handleSelect = (name: string) => {
  $router.push({name})
};
</script>

<style lang="scss">
.el-menu.nav-menu {
    .el-menu-item {
        height: auto;
    }
}
</style>
