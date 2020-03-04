<template>
  <div>
    <el-container style="height:100vh">
      <el-header style="height: auto">
        <header-nav-bar></header-nav-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import HeaderNavBar from "@/components/layout/HeaderNavBar.vue";
export default {
  name: "LayoutIndex",
  components: {
    HeaderNavBar
  }
};
</script>
