<template>
  <div>
    <div class="header-wrap">
      <el-row class="first-row">
        <el-col class="col" :span="4"></el-col>
        <el-col class="col" :span="16">
          <!--title-->
          <div class="title">
            <div class="title-logo"></div>
            <div class="title-text">云雾草堂</div>
          </div>
          <!--button-->
          <div class="menu-btn" @click="changeMenu">
            <span class="line-icon"></span>
            <span class="line-icon"></span>
            <span class="line-icon"></span>
          </div>
        </el-col>
        <el-col class="col" :span="4"></el-col>
      </el-row>
    </div>
    <transition name="menu-fade">
      <nav class="my-nav" v-if="MENUSHOW">
        <el-row>
          <el-col class="nav-col" :span="4"></el-col>
          <el-col class="nav-col" :span="16">
            <section class="menu-nav">
              <div class="menu-item">首页</div>
              <div class="menu-item">照片墙</div>
              <div class="menu-item">杂文</div>
              <div class="menu-item">我的</div>
            </section>
          </el-col>
          <el-col class="nav-col" :span="4"></el-col>
        </el-row>
      </nav>
    </transition>
  </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters("MENU",{
      MENUSHOW: "getTipShow"
    })
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapActions("MENU",["setTipShow"]),
    changeMenu(){
      this.setTipShow(!this.MENUSHOW);
    }
  }
};
</script>
<style lang="less" scoped>
  .header-wrap{
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    position: relative;
    z-index: 100;
    .first-row{
      position: relative;
      z-index: 100;
    }
    .col{
      height: 60px;
    }
    .title{
      float: left;
      cursor: pointer;
      font-weight: bold;
      font-size: 18px;
      color: #42AA60;
      text-shadow:  #42AA60 0 0 20px;
      height: 60px;
      .title-logo{
        display: inline-block;
        background-image: url('~@/assets/public/grass.png');
        width: 40px;
        height: 40px;
        background-size: cover;
        float: left;
        margin-top: 10px;
      }
      .title-text{
        float: left;
        padding-top: 20px;
      }
    }
    .menu-btn{
      display: block;
      position: relative;
      float: right;
      margin-top: 20px;
      background-color: transparent;
      background-image: none;
      cursor: pointer;
      .line-icon{
        width: 28px;
        height: 3px;
        background: #42AA60;
        display: block;
        border-radius: 1px;
        margin-bottom: 5px;
      }
    }

  }
  .my-nav{
    height: 50px;
    background-color: #FFFFFF;
    position: absolute;
    width: 100%;
    z-index: 100;
    .nav-col{
      height: 50px;
      .menu-nav{
        float: right;
        .menu-item{
          display: inline-block;
          color: #42AA60;
          padding: 15px;
          cursor: pointer;
          &:hover{
            color: #f28241
          }
        }
      }
    }
  }
  .menu-fade-enter-active{
    transition: all .5s ease;
  }

  .menu-fade-leave-active{
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .menu-fade-enter, .menu-fade-leave-to{
    transform: translateY(-50px);
  }
</style>
