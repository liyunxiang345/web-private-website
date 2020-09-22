<template>
  <div>
    <el-container style="height:100vh">
      <el-header style="height: auto">
        <header-nav-bar></header-nav-bar>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>
        <footer-message></footer-message>
      </el-footer> -->
    </el-container>
  </div>
</template>
<script>
import HeaderNavBar from "@/components/layout/HeaderNavBar";
// import FooterMessage from "@/components/layout/FooterMessage";
export default {
  name: "LayoutIndex",
  components: {
    HeaderNavBar
    // FooterMessage
  }
};
</script>
<style lang="less" scoped>
.main{
  padding-top: 0 !important;
}
</style>
