<template>
  <div class="header-wrap">
    <div class="header-floor">背景图片</div>
    <nav class="navigator">
      <el-menu
        class="menu-content"
        mode="horizontal"
        @select="handleSelect"
        background-color="#67cf22"
        text-color="#fff"
      >
        <template v-for="(item,$index) in menu_list">
          <el-menu-item
            v-if="item.children.length === 0"
            :key="$index"
            :index="item.id"
          >{{item.name}}</el-menu-item>
          <el-submenu v-else :key="$index" :index="item.id">
            <template slot="title">
              <span v-text="item.name"></span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(little,index) in item.children" :key="index">{{little.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu_list: [
        { name: "首页", id: "1", children: [] },
        { name: "心情杂文", id: "2", children: [] },
        {
          name: "娱乐专区",
          id: "3",
          children: [
            { name: "小游戏", id: "3-1" },
            { name: "音乐欣赏", id: "3-2" }
          ]
        },
        { name: "技术笔记", id: "4", children: [] },
        { name: "关于我", id: "5", children: [] }
      ]
    };
  },
  methods: {
    handleSelect() {}
  }
};
</script>
<style lang="less">
.header-wrap {
  .header-floor {
    height: 170px;
    // background-image: url("~@/assets/public/header.png");
  }
  .navigator {
    height: 61px;
    background-color: #67cf22;
    position: relative;
    .menu-content {
      width: 1000px;
      position: absolute;
      top: 0;
      left: 200px;
    }
  }
}
</style>